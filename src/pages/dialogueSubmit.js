import React from 'react'

export default function DialogueSubmitView() {
    return (
        <div id='submissiondiv'>
            <p>Feel free to checkout the different characters from the menu! ^-^</p>
            <form id='submissionform'>
                <h1>This is the dialogue submitting page</h1>
                <label>Character</label>
                <select id="characterlist" name="characters">
                    <option> Dog reaper</option>
                    <option> Pumpkinhead</option>
                    <option> Angry Strawberry</option>
                </select>
                <br/>
                <input class="input_field" placeholder='Write your submission'></input>
                <br/>
            </form>
        </div>
    )

}