import  { useState } from "react"
import Pagination from "../components/Pagination"
import { useFetchCandidates } from "../hooks/useFetch"
import { useDebounce } from "../hooks/useDebounce"
import Search from "../components/Search"
import Table from "../components/Table"
import { useFilters } from "../hooks/useFilter"
import Filters from "../components/Filters"
import FiltersAddContainer from "../components/FiltersAddContainer"

const TableCandidates = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [inputName, setInputName] = useState('')
  const { debouncedValue, loadingDebounce } = useDebounce(inputName, 500)
  const { candidates, totalPages, loading, error } = useFetchCandidates({
    user_id: 1,
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

  const { filterCandidate } = useFilters()
  const candidateFiltered = filterCandidate(candidates);


  if (!loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="relative overflow-x-auto p-5 min-h-screen bg-slate-900">
      <div className="flex gap-6 text-gray-200">
        <Search onInputChange={handleSearchNameInputChange} loading={loadingDebounce} type='text' placeholder='Buscar por nombre y apellido...'/>
        <Filters setCurrentPage={setCurrentPage}/>
      </div>
      <FiltersAddContainer/>
      <Table candidates={candidateFiltered}/>

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
