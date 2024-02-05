import { useState } from "react";
import { useStoreFilterBackend } from "../hooks/useStore";
import PhoneNumberFilter from "./filters/PhoneNumberFilter";
import CuilFilter from "./filters/CuilFilter";
import PropTypes from 'prop-types'


const Filters = ( { setCurrentPage } ) => {
  const { addPropertyToMyFilter, myFilter, deleteFilters, deletePropertyFromMyFilter } = useStoreFilterBackend();

  const [phoneNumber, setPhoneNumber] = useState(null)
  const [cuil, setCuil] = useState(null)

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleChangeFilterCuil = (e) => {
    setCuil(e.target.value)
  }
  

  console.log(myFilter);

  const handleFilter = (event) => {
    event.preventDefault()
    setCurrentPage(0)

      if (phoneNumber) { 
        addPropertyToMyFilter(`c.phone_number`, phoneNumber);
      }else{
        deletePropertyFromMyFilter('c.phone_number')
      }
      if(cuil){
        addPropertyToMyFilter('c.cuil', cuil)
      }else{
        deletePropertyFromMyFilter('c.cuil')
      }
    }
    const handleClickResetFilter = () => {
      const inputs = document.getElementsByClassName('filters')

      Array.from(inputs).forEach( input => {
        input.value = ''
      })
      setPhoneNumber(null)
      setCuil(null)
      deleteFilters()
    }
  

  return (
    <section>
      <aside className="flex gap-5">
        <form onSubmit={handleFilter} className="flex gap-2">
          <PhoneNumberFilter handleChange={handleChangePhoneNumber} />
          <CuilFilter handleChange={handleChangeFilterCuil}/>
          <button type="submit">Filtrar</button>
        </form>
        <button onClick={handleClickResetFilter}>Reset</button>
      </aside>
    </section>
  );
}

Filters.propTypes = {
  setCurrentPage: PropTypes.func,
}


export default Filters;
