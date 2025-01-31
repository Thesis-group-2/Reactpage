import React from 'react'
import { useEffect, useState } from 'react'

export default function CharacterList() {

    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://wziytkh8pb.execute-api.eu-central-1.amazonaws.com/thesisgameapi//npcInfo/getNameAndDescription/all', {
            method: "GET"
        }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCharacters(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <div className='chara-container'>
            {characters.map((post) => {
                return (
                    <div>
                        <div className="chara-card" key={post.id}>
                            <h2 className="chara-name">{post.name}</h2>
                            <p className="chara-desc">{post.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )

}