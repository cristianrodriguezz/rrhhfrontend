import  { useState } from "react"
import Pagination from "../components/Pagination"
import { useFetchCandidates } from "../hooks/useFetch"
import { useDebounce } from "../hooks/useDebounce"
import Table from "../components/Table"
import Filters from "../components/Filters"
import FiltersAddContainer from "../components/FiltersAddContainer"
import getUserFromLocalStorage from "../utils/getUserLocalStorage"
import Search from "../components/filters/Search"
import { ToastContainer } from "react-toastify"
import { useStoreCheckbox } from "../hooks/useStore"

import Export from "../components/icons/Export"
import { handleClickExportExcel } from "../utils/handleClickExportExcel"

const TableCandidates = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [inputName, setInputName] = useState('')
  const user = getUserFromLocalStorage()

  const { checkboxIds } = useStoreCheckbox()


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
      <div className="h-11 flex min-w-[1146.2px]">
      {
        checkboxIds.length !== 0 &&
        (
        <div className="flex size-full items-center  bg-gray-700 border-b border-slate-600 rounded-t-lg">
          <button onClick={() => handleClickExportExcel(checkboxIds)} className="flex gap-2 ml-4 p-1 rounded-lg text-slate-300 bg-slate-800">Exportar excel <Export/></button>
        </div>
        )
      }

      </div>

      <Table candidates={candidates} setCandidates={setCandidates}/>

      <Pagination
        totalRecords={totalPages}
        pageLimit={1}
        pageNeighbours={1}
        onPageChanged={handlePageChange}
        className="inline-flex -space-x-px text-sm"
      />
        <ToastContainer
          position="top-center"
          autoClose={955}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  )
}

export default TableCandidates
