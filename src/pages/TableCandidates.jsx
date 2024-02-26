import  { useState } from "react"
import Pagination from "../components/Pagination"
import { useFetchCandidates } from "../hooks/useFetch"
import { useDebounce } from "../hooks/useDebounce"
import Table from "../components/Table"
import Filters from "../components/Filters"
import FiltersAddContainer from "../components/FiltersAddContainer"
import getUserFromLocalStorage from "../utils/getUserLocalStorage"
import Search from "../components/filters/Search"

const TableCandidates = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [inputName, setInputName] = useState('')
  const user = getUserFromLocalStorage()

  const { debouncedValue, loadingDebounce } = useDebounce(inputName, 500)
  const { candidates, totalPages, loading, error, setCandidates } = useFetchCandidates({
    user_id : user.id && user.id,
    limit: 40,
    currentPage,
    q: debouncedValue,
  })

  const handlePageChange = (paginationData) => {
    setCurrentPage(paginationData.currentPage)
  }

  const handleSearchNameInputChange = (value) => {
    setInputName(value)
  }

  if (!loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="relative overflow-x-auto p-5 min-h-screen bg-slate-900">
      <div className="flex gap-2 text-gray-200">
        <Search onInputChange={handleSearchNameInputChange} loading={loadingDebounce} type='search' placeholder='Buscar por nombre y apellido...'/>
        <Filters setCurrentPage={setCurrentPage}/>
      </div>
      <FiltersAddContainer/>
      <Table candidates={candidates} setCandidates={setCandidates}/>

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
