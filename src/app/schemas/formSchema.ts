import { z } from "zod";

export const formSchema = z.object({
    'indoor-outdoor': z.string({
        message: 'Required'
    }),
    personality: z.string({
        message: 'Required'
    }).array(),
    url: z.string()
        .min(1,{
            message: 'field is empty'
        }).
        url({
            message: 'Enter valid url'
    }),
})

export type formSchemaDataType = z.infer<typeof formSchema>;