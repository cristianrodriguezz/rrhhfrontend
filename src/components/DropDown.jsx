import  PropTypes  from 'prop-types'
import Delete from './icons/Delete'
import { deleteCandidate } from '../services/deleteCandidate'
import { useStoreDeleteCandidate } from '../hooks/useStore'
import Download from './icons/Download'
import Edit from './icons/Edit'
import { getCvById } from '../services/getCv'


const DropDown = ({ show, candidate_id, user_id, onEditClick  }) => {

  const { setIsDeleteId } = useStoreDeleteCandidate()

  const handleClickEdit = () => {
    onEditClick()
  }
  const handleClickDelete = () => {
    const confirmed = confirm("¿Estás seguro de que deseas eliminar este candidato?");
    if (confirmed) {
      deleteCandidate(user_id,candidate_id)
      setIsDeleteId(candidate_id)
    }
  }
  const handleClickOpenCv = () => {
    getCvById(candidate_id)
  }

  return (
    <ul className={`*:p-1 *:cursor-pointer *:rounded-md p-2 origin-bottom-right flex flex-col  absolute right-[85%] -top-[100px] border border-slate-500 ${show ? 'animate-open' : 'animate-close'} z-10 bg-slate-900  rounded-md `}>
      <li className='hover:bg-slate-700 flex gap-2 items-center' onClick={handleClickOpenCv}><Download/>CV</li>
      <li className='hover:bg-slate-700 flex gap-2  items-center' onClick={handleClickEdit}><Edit/>Editar</li>
      <li className="hover:bg-slate-700 flex gap-2  items-center" onClick={handleClickDelete} aria-label="Borrar"><Delete/>Eliminar</li>
    </ul>
  )
}
DropDown.propTypes = {
  candidate_id: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  onEditClick: PropTypes.func
}

export default DropDown