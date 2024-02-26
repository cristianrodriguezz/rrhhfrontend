import  PropTypes  from 'prop-types'
import Actions from './Actions';
import { formateDate, formateDateInput } from '../utils/formateDate';
import { useFecthAvailabilities, useFecthLocations, useFetchPositions, useFetchUpdateCandidate } from '../hooks/useFetch';
import { getIdToAvailabilty, getIdToLocation, getIdToPosition } from '../utils/getIdSelect';
import { flushSync } from 'react-dom';
import { useEffect } from 'react';
import { useCandidateStore, useStoreDeleteCandidate } from '../hooks/useStore';
import getUserFromLocalStorage from '../utils/getUserLocalStorage';
import Download from './icons/Download';
import CheckOut from './icons/CheckOut';
import CheckIn from './icons/CheckIn';


const TbodyCandidates = ({ candidates, setCandidates }) => {

  const { positions } = useFetchPositions()
  const { availabilities } = useFecthAvailabilities()
  const { locations } = useFecthLocations()
  const { isDeleteId, setIsDeleteId } = useStoreDeleteCandidate()
  const { selectedCandidateId, setSelectedCandidateId } = useCandidateStore()
  const { handleEdit, handleChange, candidatesUpdate } = useFetchUpdateCandidate(candidates, setCandidates)
  const { id } = getUserFromLocalStorage()

  const handleEditClick = (candidateId) => {
    setSelectedCandidateId(candidateId)
  }
  useEffect(()=>{
    
    if (isDeleteId) {
      if(!document.startViewTransition){
        const nuevoArray = candidates.filter(candidate => (candidate.candidate_id !== isDeleteId ));
        setIsDeleteId(null)
        setCandidates(nuevoArray)
      }else{
        
        document.startViewTransition(()=>{
          flushSync(()=>{
            const nuevoArray = candidates.filter(candidate => (candidate.candidate_id !== isDeleteId ));
            setIsDeleteId(null)
            setCandidates(nuevoArray)
          })
        })
      }

    }

  },[isDeleteId, candidatesUpdate, candidates, setIsDeleteId, setCandidates])

  return (
    <>
      {
      candidates?.map((candidate) => (

        <tr style={{viewTransitionName: `name-transition-${candidate.candidate_id}`}} key={candidate.candidate_id} id={`candidate-${candidate.candidate_id}`} className={`border-b hover:bg-gray-700 bg-gray-800 border-gray-700`}>
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input id={`checkbox-table-search-{${candidate.candidate_id}}`} type="checkbox" className="candidatescheckbox w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"/>
              <label htmlFor={`checkbox-table-search-{${candidate.candidate_id}}`} className="sr-only">checkbox</label>
            </div>
          </td>
          <td className={'w-[11%] px-3'}>
            {selectedCandidateId === candidate.candidate_id ? (
              <input
                onChange={handleChange}
                name='first_name'
                defaultValue={candidate.first_name}
                maxLength={50}
                className={`filters candidate-input-${candidate.candidate_id} bg-slate-600 w-full placeholder-slate-300 text-sm rounded`}
              />
            ) : (
              <p className={`candidate-p-${candidate.candidate_id}`}>{candidate.first_name}</p>
            )}

          </td>
          <td className={'w-[8%] px-3'}>
            {selectedCandidateId === candidate.candidate_id ? (
              <input
                onChange={handleChange}
                name='last_name'
                defaultValue={candidate.last_name}
                maxLength={50}
                className={`filters candidate-input-${candidate.candidate_id}  bg-slate-600 w-full placeholder-slate-300 text-sm rounded`}
              />
            ) : (
              <p className={`candidate-p-${candidate.candidate_id} `}>{candidate.last_name}</p>
            )}
          </td>
          <td className={'w-[8%] px-3'}>
            {selectedCandidateId === candidate.candidate_id 
            ? 
            <input
              defaultValue={formateDateInput(candidate.age)}
              onChange={handleChange}
              name='age'
              type='date'
              className={`filters p-0 candidate-input-${candidate.candidate_id}  bg-slate-600 w-9/12 placeholder-slate-300 text-sm rounded`}
            />
            :
            <p className={`candidate-p-${candidate.candidate_id}`}>{formateDate(candidate.age)}</p>
            } 
          </td>
          <td className={'w-[7%] px-3'}>
            {
            selectedCandidateId === candidate.candidate_id ?
            <input
              onChange={handleChange}
              name='phone_number'
              defaultValue={candidate.phone_number}
              maxLength={25}
              className={`filters candidate-input-${candidate.candidate_id}  bg-slate-600 w-full placeholder-slate-300 text-sm rounded`}
            />
            :
            <p className={`candidate-p-${candidate.candidate_id}`}>{candidate.phone_number}</p>
            }
          </td>
          <td className={'w-[9%] px-3'}>
            {
            selectedCandidateId === candidate.candidate_id ?
            <input
              onChange={handleChange}
              name='cuil'
              defaultValue={candidate.cuil}
              maxLength={30}
              className={`filters candidate-input-${candidate.candidate_id}  bg-slate-600 w-full placeholder-slate-300 text-sm rounded`}
            />
            :
            <p className={`candidate-p-${candidate.candidate_id}`}>{candidate.cuil}</p>
            } 
          </td>
          <td className={'w-[3.8%] px-3'}>
            {
            selectedCandidateId === candidate.candidate_id ?
            <input 
              type='checkbox'
              name='has_own_transport'
              defaultChecked={candidate.has_own_transport}
              onChange={handleChange}
            />
              :
              <div>{candidate.has_own_transport ? <CheckIn/>: <CheckOut/>}</div>
            }
          </td>
          <td className={'w-[3.8%] px-3'}>
            {
            selectedCandidateId === candidate.candidate_id 
            ?
            <input 
              type='checkbox'
              name='has_work_experience'
              defaultChecked={candidate.has_work_experience}
              onChange={handleChange}
            />
            :
             <p className={`candidate-p-${candidate.candidate_id}`}>{candidate.has_work_experience ? <CheckIn/>: <CheckOut/>}</p>
            }
          </td>
          <td className={'w-[17%] px-3'}>
          {selectedCandidateId === candidate.candidate_id ? 
            <select 
              defaultValue={getIdToPosition(candidate.current_position,positions)}
              className={`bg-slate-600 border-none w-full p-0  rounded-lg candidate-input-${candidate.candidate_id}`}
              onChange={handleChange}
              name='current_position_id'
            >
              {positions.map(position => (
                <option
                  key={position.current_position_id}
                  value={position.current_position_id}
                  className={`text-slate-300 h-2`}
                >
                  {position.current_position}
                </option>
              ))}
            </select>
            : 
            <p className={`candidate-p-${candidate.candidate_id}`}>{candidate.current_position}</p>
            }
          


          </td>
          <td className={'w-[9.5%] px-3'}>
          {selectedCandidateId === candidate.candidate_id ? 
            <select 
              defaultValue={getIdToAvailabilty(candidate.availability_schedule, availabilities)}
              className={`bg-slate-600 border-none p-0  w-full rounded-lg candidate-input-${candidate.candidate_id}`}
              onChange={handleChange}
              name='availability_id'
            >
              {availabilities.map(availability => (
                <option
                  key={availability.availability_id}
                  value={availability.availability_id}
                  className={`text-slate-300 h-2`}
                >
                  {availability.availability_schedule}
                </option>
              ))}
            </select> 
              :
            <p className={`candidate-p-${candidate.candidate_id}`}>{candidate.availability_schedule}</p>
          }
          </td>
          <td className={'w-[8.5%] px-3'}>
          {selectedCandidateId === candidate.candidate_id ? 
            <select 
              defaultValue={getIdToLocation(candidate.location, locations)}
              className={`bg-slate-600 border-none p-0   w-full rounded-lg candidate-input-${candidate.candidate_id}`}
              onChange={handleChange}
              name='location_id'
            >
              {locations.map(location => (
                <option
                  key={location.location_id}
                  value={location.location_id}
                  className={`text-slate-300 h-2`}
                >
                  {location.name}
                </option>
              ))}
            </select> 
            :
            <p className={`candidate-p-${candidate.candidate_id}`}>{candidate.location}</p>
          }
          </td>
          <td className={'w-[5%] px-3'}>
            {candidate.status}
          </td>
          <td className={'w-[20px]'}>
            {
              selectedCandidateId !== candidate.candidate_id ?
              <Actions onEditClick={() => handleEditClick(candidate.candidate_id)} candidate_id={candidate.candidate_id}/> 
              :
              <button 
                className='w-full text-blue-500' 
                onClick={() => {
                  handleEdit(id , candidate.candidate_id) 
                  setSelectedCandidateId(null)}
                }
              >
                Editar
              </button>
            }
           </td>
        </tr>
      ))
    }
    </>
  )
}
TbodyCandidates.propTypes = {
  candidates: PropTypes.array,
  setCandidates: PropTypes.func
}

export default TbodyCandidates;
