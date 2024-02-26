import  PropTypes  from 'prop-types'
import Delete from './icons/Delete'
import { deleteCandidate } from '../services/deleteCandidate'
import { useStoreDeleteCandidate } from '../hooks/useStore'


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

  return (
    <ul className={`*:p-2 *:cursor-pointer *:rounded-md origin-bottom-right flex flex-col p-3 absolute right-20 -top-[90px] ${show ? 'animate-open' : 'animate-close'} z-10 bg-slate-900 p-3 rounded-md `}>
      <li className='hover:bg-slate-700' onClick={handleClickEdit}>Editar</li>
      <li className="hover:bg-slate-700" onClick={handleClickDelete} aria-label="Borrar"><Delete/></li>
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