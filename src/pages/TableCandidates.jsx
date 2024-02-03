import  { useState } from "react"
import Pagination from "../components/Pagination"
import { useFetchCandidates } from "../hooks/useFetch"
import { useDebounce } from "../hooks/useDebounce"
import Search from "../components/Search"
import Table from "../components/Table"

const TableCandidates = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [inputName, setInputName] = useState("")
  const [asd, asdd] = useState("")
  const { debouncedValue, loadingDebounce } = useDebounce(inputName, 500)
  const { candidates, totalPages, loading, error } = useFetchCandidates({
    user_id: 1,
    limit: currentPage,
    offset: 20,
    q: debouncedValue,
  })

  const handlePageChange = (paginationData) => {
    setCurrentPage(paginationData.currentPage)
  }

  const handleSearchNameInputChange = (value) => {
    setInputName(value);
  }
  const handleSearch = (value) => {
    asdd(value);
  }
  console.log(asd);

  if (!loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="relative overflow-x-auto m-28">
      <Search onInputChange={handleSearchNameInputChange} loading={loadingDebounce} type='text' placeholder='Buscar por nombre y apellido...'/>
      {/* <Search onInputChange={handleSearch} loading={loadingDebounce} type='text' placeholder='Buscar por nombre y apellido...'/> */}
      <Table candidates={candidates} className='px-3 py-2'/>
      <Pagination
        totalRecords={totalPages}
        pageLimit={1}
        pageNeighbours={1}
        onPageChanged={handlePageChange}
        className="inline-flex -space-x-px text-sm"
      />
    </div>
  )
}

export default TableCandidates
