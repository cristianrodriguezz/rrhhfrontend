import PropTypes from 'prop-types'
import { useStoreCheckbox, useStoreResetCheckBoxAll } from '../hooks/useStore';

const TheadCandidates = ({ tableHeader, className }) => {
  const { checkboxIds, toggleCheckbox, resetCheckboxes } = useStoreCheckbox()
  const { checkbox, checkboxAdd, resetCheckbox } = useStoreResetCheckBoxAll()

  const handleChangeCheckbox = (e) => {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    let isCheckedBoxAll = document.getElementById('checkbox-all-search').checked

    if (e.target.checked) {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = true
        const idValue = parseInt(checkbox.id.split(/\{|\}/)[1])
        
        toggleCheckbox(idValue)
      })
      checkboxAdd(isCheckedBoxAll)
    } else {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false
      })
      resetCheckboxes()
      resetCheckbox()
    }
  }

  console.log(checkboxIds)

  return (
    <tr className='rounded-t-lg'>
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
      {tableHeader.map((label) => (
        <th key={label} scope="col" className={className}>
          {label}
        </th>
      ))}
    </tr>
  );
};

TheadCandidates.propTypes = {
  tableHeader: PropTypes.array,
  className: PropTypes.string,
};

export default TheadCandidates;
