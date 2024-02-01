import  PropTypes  from 'prop-types'

const TbodyCandidates = ({ candidates }) => {
  
  return (
    <>
      {candidates.map((candidate) => (
        <tr key={candidate.candidate_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="px-6 py-4">{candidate.first_name}</td>
          <td className="px-6 py-4">{candidate.last_name}</td>
          <td className="px-6 py-4">{candidate.age}</td>
          <td className="px-6 py-4">{candidate.phone_number}</td>
          <td className="px-6 py-4">{candidate.has_own_transport ? 'Sí' : 'No'}</td>
          <td className="px-6 py-4">{candidate.work_experience ? 'Sí' : 'No'}</td>
          <td className="px-6 py-4">{candidate.current_position}</td>
          <td className="px-6 py-4">{candidate.availability_id}</td>
          <td className="px-6 py-4">{candidate.location_id}</td>
        </tr>
      ))}
    </>
  )
}
TbodyCandidates.propTypes = {
  candidates: PropTypes.array,
}

export default TbodyCandidates;
