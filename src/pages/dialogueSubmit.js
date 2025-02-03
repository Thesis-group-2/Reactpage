import React from 'react'
import { useEffect, useState } from 'react'

export default function DialogueSubmitView() {
    const [charactersNames, setCharactersNames] = useState([]);
    useEffect(() => {
        fetch('https://wziytkh8pb.execute-api.eu-central-1.amazonaws.com/thesisgameapi//npcInfo/getNameAndDescription/all', {
            method: "GET"
        }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCharactersNames(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div id='submissiondiv'>
            <div>
                <form className='submissionform'>
                    <p>Feel free to checkout the different characters from the menu! ^-^</p>
                    <label>Character</label>
                    <select id="characterlist" name="characters">
                        {charactersNames.map((post) => {
                            return (
                                <option key={post.id}>
                                    {post.name}
                                </option>
                            )
                        })}
                        <option>Random</option>
                    </select>
                    <br />
                    <input class="input_field" placeholder='Write your submission'></input>
                    <br />
                    <button type='button'>Submit</button>
                </form>

            </div>
        </div>
    )

}