import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import TbodyCandidates from "../components/TbodyCandidates"
import TheadCandidates from "../components/TheadCandidates";
import { tableHeader } from "../constants/tableHeader";
import { useFetchCandidates } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import Loading from "../components/Loading";


const TableCandidates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const {debouncedValue, loadings} = useDebounce(inputValue, 500);
  const {candidates, loading, error} = useFetchCandidates({ user_id: 1, limit: currentPage , offset: 5, q: debouncedValue })

  const handlePageChange = (paginationData) => {
    setCurrentPage(paginationData.currentPage);
    
  };
  console.log(currentPage);


  
  if (!loading)  return <p>Cargando...</p>
  if (error)  return <p>Error: {error}</p>

  return (

    <div className="relative overflow-x-auto m-28">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <TheadCandidates tableHeader={tableHeader}/>
            </thead>
            <tbody>
              <TbodyCandidates candidates={candidates}/>
            </tbody>
        </table>
        <Pagination
          totalRecords={10}
          pageLimit={1}
          pageNeighbours={1}
          onPageChanged={handlePageChange}
          className='inline-flex -space-x-px text-sm'
        />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe algo..."
        />
        {loadings && <Loading/>}
    </div>

  )
}

export default TableCandidates