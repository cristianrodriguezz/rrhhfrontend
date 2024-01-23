import TbodyCandidates from "../components/TbodyCandidates"
import TheadCandidates from "../components/TheadCandidates";
import { tableHeader } from "../constants/tableHeader";
import { useFetchCandidates } from "../hooks/useFetch";

const TableCandidates = () => {
  const {candidates, loading, error} = useFetchCandidates({ user_id: 1 })

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
    </div>

  )
}

export default TableCandidates