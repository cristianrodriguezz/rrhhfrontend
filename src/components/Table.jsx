import { tableHeader } from "../constants/tableHeader"
import TbodyCandidates from "./TbodyCandidates"
import TheadCandidates from "./TheadCandidates"
import PropTypes from 'prop-types'


const Table = ( { candidates, setCandidates } ) => {



  return (
    <table className="w-full text-sm  text-left rtl:text-right text-gray-400 ">
      <thead className="text-xs font-normal rounded-t-lg uppercase  bg-gray-700 text-gray-200">
        <TheadCandidates tableHeader={tableHeader} className='px-3 py-3'/>
      </thead>
      <tbody>
        <TbodyCandidates candidates={candidates} setCandidates={setCandidates}/>
      </tbody>
    </table>
  )
}

Table.propTypes = {
  candidates: PropTypes.array,
  setCandidates: PropTypes.func
}

export default Table