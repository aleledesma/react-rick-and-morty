const Search = ({ setSearch }) => {
    const handleChange = e => {
        setSearch(e.target.value)
    }
    return (
        <div className="h-14 flex justify-center items-center mt-5">
            <input onChange={handleChange} type="text" name="search" placeholder="Buscar" className=" h-10 w-96 border-2 border-gray-400 rounded-lg p-1.5 text-gray-900 text-sm outline-none" />
        </div>
    )
}

export default Search