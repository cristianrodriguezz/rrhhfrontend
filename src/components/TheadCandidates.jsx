import PropTypes from 'prop-types'
import { useStoreCheckbox, useStoreResetCheckBoxAll } from '../hooks/useStore';
import ArrowIcon from './icons/ArrowIcon'
import DropDown from './filters/DropDown';
import { useState } from 'react';

const TheadCandidates = ({ className }) => {
  const { checkboxIds, toggleCheckbox, resetCheckboxes } = useStoreCheckbox()
  const { checkbox, checkboxAdd, resetCheckbox } = useStoreResetCheckBoxAll()

  const handleChangeCheckbox = (e) => {
    let checkboxes = document.getElementsByClassName('candidatescheckbox')
    let isCheckedBoxAll = document.getElementById('checkbox-all-search').checked

    if (e.target.checked) {
      Array.from(checkboxes).forEach(function (checkbox) {
        checkbox.checked = true
        const idValue = parseInt(checkbox.id.split(/\{|\}/)[1])
        
        toggleCheckbox(idValue)
      })
      checkboxAdd(isCheckedBoxAll)
    } else {
      Array.from(checkboxes).forEach(function (checkbox) {
        checkbox.checked = false
      })
      resetCheckboxes()
      resetCheckbox()
    }
  }

  const [mov,setMov] = useState(false)


  const filter = (label) => {

    if(label === 'Mov.' && mov === false){
      setMov(true)
    }else{
      setMov(false)
    }
  }

  return (
    <tr className='rounded-t-lg relative'>
      <th scope="col" className="p-4">
        <div className="flex items-center">
          <input
            id="checkbox-all-search"
            onChange={handleChangeCheckbox}
            type="checkbox"
            checked={checkbox}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
          />
          <label htmlFor="checkbox-all-search" className="sr-only">
            checkbox
          </label>
        </div>
      </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Nombre
          </div>
          
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Apellido
          </div>
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Edad
          </div>
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Teléfono
          </div>
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            CUIL
          </div>
        </th>
        <th onClick={() => filter('Mov.')}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Mov. 
          </div>
          {mov ? <div className='top-12 left-0 absolute'><DropDown/></div>: null}
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Exp.
          </div>
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Posición
          </div>
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Disponibilidad
          </div>
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Localidad
          </div>
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className} relative`}>
          <div className='flex'>
            Estado
          </div>
        </th>
        <th onClick={() => filter()}  scope="col" className={`${className}  w-[20px] relative`}>
          <div className={''}>

          </div>
        </th>

    </tr>
  );
};

TheadCandidates.propTypes = {
  tableHeader: PropTypes.array,
  className: PropTypes.string,
};

export default TheadCandidates;
