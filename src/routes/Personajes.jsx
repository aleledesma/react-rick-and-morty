import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import Error from "../components/Error"
import Pagination from "../components/Pagination"
import Personaje from "../components/Personaje"
import Search from "../components/Search"

const Personajes = () => {
    const [search, setSearch] = useState('')
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
        const URL = `https://rickandmortyapi.com/api/character?name=${search}&page=${page}`
        setCharacters([])
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    const { results } = data
                    setCharacters(results)
                }
            })
    }, [search, page])
    return (
        <div className="w-2/3 mx-auto">
            <Search setSearch={setSearch} />
            <Pagination page={page} setPage={setPage} />
            <div className="w-full mx-auto flex flex-wrap justify-center items-center gap-7 m-10">
                {characters.length > 0 ? (characters.map(item => <Personaje key={item.id} data={item} />)) : <Error search={search} />}
            </div>
            {characters.length > 0 && (<Pagination page={page} setPage={setPage} />)}
        </div>
    )
}

export default Personajes