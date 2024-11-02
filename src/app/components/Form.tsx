'use client'

import styles from './form.module.scss'
import {formSchemaDataType, formSchema} from "@/app/schemas/formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Error from "@/app/components/Error";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formSchemaDataType>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: formSchemaDataType) => {
        alert("Booking successful!");
        console.dir(data);
    };

    return (
        <form
            action="https://freecatphotoapp.com/submit-cat-photo"
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Is your cat an indoor or outdoor cat?</legend>
                <label>
                    <input
                        id="indoor"
                        type="radio"
                        value="indoor"
                        {...register("indoor-outdoor")}
                    /> Indoor</label>
                <label>
                    <input
                        id="outdoor"
                        type="radio"
                        value="outdoor"
                        {...register("indoor-outdoor")}
                    /> Outdoor</label>
                <Error message={errors["indoor-outdoor"]?.message} />
            </fieldset>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>What's your cat's personality?</legend>
                <input {...register("personality")} id="loving" type="checkbox" value="loving"/>
                <label htmlFor="loving" className={styles.label}>Loving</label>
                <input {...register("personality")} id="lazy" type="checkbox" value="lazy"/>
                <label htmlFor="lazy" className={styles.label}>Lazy</label>
                <input {...register("personality")} id="energetic" type="checkbox" value="energetic"/>
                <label htmlFor="energetic" className={styles.label}>Energetic</label>
                <Error message={errors.personality?.message} />
            </fieldset>
            <input
                type="text"
                placeholder="cat photo URL"
                {...register("url")}
            />
            <Error message={errors.url?.message} />
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    )
}

export default Form;