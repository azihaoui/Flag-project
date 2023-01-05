import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'

export default function FlagPage() {
    const {name} = useParams()
    const navigate = useNavigate()
    const [flag, setFlag] = useState(null)

    async function getFlag() {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${name}`
        )
        const data = await response.json()
        console.log(data[0])
        setFlag(data[0])
    }

    useEffect(()=> {
        getFlag()
    }, [])

    if (!flag) return <div>loading...</div>

    return (
        <div className="flag-page">
                <div>
                <img src={flag.flags.png} alt="" />
                <h1>{flag.name.common}</h1>
                <button onClick={()=> {
                    navigate('/')
                }}>Go back</button>
            </div>
        </div>
    )
}



   
