const Pagination = ({ page, setPage }) => {
    return (
        <div className="flex justify-between items-center mb-5">
            <button onClick={() => { page > 1 && setPage(page - 1) }} className="bg-gray-200 w-10 h-7 rounded-lg text-gray-700 font-medium">{page == 1 ? "-" : (page - 1)}</button>
            <button onClick={() => { setPage(page + 1) }} className="bg-gray-200 w-10 h-7 rounded-lg text-gray-700 font-medium">{page + 1} </button>
        </div>
    )
}

export default Pagination