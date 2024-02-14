import  PropTypes  from 'prop-types'
import Actions from './Actions';
import { formateDate } from '../utils/formateDate';

const TbodyCandidates = ({ candidates, className }) => {
  
  
  return (
    <>

      {
      candidates 
      ? 
      candidates?.map((candidate) => (
        <tr key={candidate.candidate_id} className=" border-b hover:bg-gray-700 bg-gray-800 border-gray-700">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input id={`checkbox-table-search-{${candidate.candidate_id}}`} type="checkbox" className="candidatescheckbox w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
              <label htmlFor={`checkbox-table-search-{${candidate.candidate_id}}`} className="sr-only">checkbox</label>
            </div>
          </td>
          <td className={className}>{candidate.first_name}</td>
          <td className={className}>{candidate.last_name}</td>
          <td className={className}>{formateDate(candidate.age)}</td>
          <td className={className}>{candidate.phone_number}</td>
          <td className={className}>{candidate.cuil}</td>
          <td className={className}>{candidate.has_own_transport ? 'Sí' : 'No'}</td>
          <td className={className}>{candidate.has_work_experience ? 'Sí' : 'No'}</td>
          <td className={className}>{candidate.current_position}</td>
          <td className={className}>{candidate.availability_schedule}</td>
          <td className={className}>{candidate.location}</td>
          <td className={className}>{candidate.status}</td>
          <td className={className}><Actions/></td>
        </tr>
      ))
      :
      null
      }
    </>
  )
}
TbodyCandidates.propTypes = {
  candidates: PropTypes.array,
  className: PropTypes.string
}

export default TbodyCandidates;
