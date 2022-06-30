import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/character/${id}`
        fetch(URL)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, [])
    const { name, status, species, gender, image } = character
    const statusStyle = {
        Alive: "h-3.5 w-3.5 bg-green-400 rounded-full mr-2",
        Dead: "h-3.5 w-3.5 bg-red-600 rounded-full mr-2",
        unknown: "h-3.5 w-3.5 bg-gray-300 rounded-full mr-2"
    }
    return (
        <div className="w-1/2 mx-auto my-32 bg-gray-500 flex rounded-lg">
            <img src={image} alt={name} className="w-96 rounded-l-lg" />
            <div className="px-8 py-5">
                <h1 className="text-4xl font-extrabold text-gray-100">{name}</h1>
                <span className="flex items-center ml-3 mt-12 mb-10">
                    <div className={statusStyle[`${status}`]}></div>
                    <span className="text-gray-200 font-medium text-xl">{status}</span>
                </span>
                <div className="flex items-center ml-3 mt-4 gap-2 mb-10">
                    <span className="text-gray-300 text-xl font-medium">Specie:</span>
                    <span className="text-gray-200 font-bold text-2xl">{species}</span>
                </div>
                <div className="flex items-center ml-3 mt-4 gap-2 mb-10">
                    <span className="text-gray-300 text-xl font-medium">Gender:</span>
                    <span className="text-gray-200 font-bold text-2xl">{gender}</span>
                </div>
            </div>
        </div>
    )
}

export default Details