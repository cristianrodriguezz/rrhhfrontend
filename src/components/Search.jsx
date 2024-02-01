import { useState } from "react"
import Loading from "./Loading"
import PropTypes from 'prop-types'

const Search = ({ onInputChange, loading }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    const newValue = e.target.value

    setInputValue(newValue)

    if (onInputChange) {
      onInputChange(newValue)
    }
  }
  

  return (
    <div className="flex">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar por nombre o apellido"
      />
      { loading && <Loading/> }
    </div>
  )
}

Search.propTypes = {
  onInputChange: PropTypes.func,
  loading: PropTypes.bool
}

export default Search
