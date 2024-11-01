const Form = () => {
return (
    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <fieldset>
            <legend>Is your cat an indoor or outdoor cat?</legend>
            <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"
                          checked/> Indoor</label>
            <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"/> Outdoor</label>
        </fieldset>
        <fieldset>
            <legend>What's your cat's personality?</legend>
            <input id="loving" type="checkbox" name="personality" value="loving" checked/> <label
            htmlFor="loving">Loving</label>
            <input id="lazy" type="checkbox" name="personality" value="lazy"/> <label
            htmlFor="lazy">Lazy</label>
            <input id="energetic" type="checkbox" name="personality" value="energetic"/> <label
            htmlFor="energetic">Energetic</label>
        </fieldset>
        <input type="text" name="catphotourl" placeholder="cat photo URL" required/>
        <button type="submit">Submit</button>
    </form>
)
}

export default Form;