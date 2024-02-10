import { useState } from "react"
import Loading from "./Loading"
import PropTypes from 'prop-types'
import Lupa from "./icons/Lupa"
import { useStoreCheckbox, useStoreResetCheckBoxAll } from "../hooks/useStore"

const Search = ({ onInputChange, loading, placeholder, type }) => {
  const [inputValue, setInputValue] = useState('')
  const { resetCheckbox } = useStoreResetCheckBoxAll()
  const { resetCheckboxes } = useStoreCheckbox()

  const handleInputChange = (e) => {
    const newValue = e.target.value

    setInputValue(newValue)
    resetCheckboxes()

    if (onInputChange) {
      onInputChange(newValue)
      resetCheckbox()
      resetCheckboxes()
      let checkboxes = document.getElementsByClassName('candidatescheckbox')

      Array.from(checkboxes).forEach(checkbox => {
        checkbox.checked = false
      })
    }
  }
  

  return (
      <section className="flex relative w-72 h-9  text-slate-300">
        <Lupa className="absolute top-1/2 transform -translate-y-1/2"/>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          type={type} 
          className="bg-slate-600 w-full placeholder-slate-300 text-sm border-body rounded-lg px-9"
          />
        { loading && <Loading className='w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2'/> }
      </section>
  )
}

Search.propTypes = {
  onInputChange: PropTypes.func,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default Search
