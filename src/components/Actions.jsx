import getUserFromLocalStorage from "../utils/getUserLocalStorage"
import Dots from "./icons/Dots"
import { useShowDropDown } from "../hooks/useShowDropDown"
import DropDown from "./DropDown"
import  PropTypes  from 'prop-types'

const Actions = ({ candidate_id, onEditClick }) => {

  const { id:user_id } = getUserFromLocalStorage()
  const { showDropDown, handleOpen } = useShowDropDown()
  const handleClickEdit = () => {
    
    onEditClick(); // Llamar al método de manejo de clics proporcionado por el padre
  };
 

  return (
    <div className='relative flex items-center justify-center'>
        <Dots onClick={handleOpen}     
        className={`hover:bg-gray-600 ${showDropDown && 'bg-gray-600'} rounded-2xl flex items-center justify-center`}
        />
      {showDropDown && <DropDown onEditClick={handleClickEdit} candidate_id={candidate_id} user_id={user_id} show={showDropDown} />}
    </div>
  )
}
Actions.propTypes = {
  candidate_id: PropTypes.number.isRequired,
  onEditClick: PropTypes.func
}

export default Actions