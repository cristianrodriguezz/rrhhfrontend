import { useStoreCuil, useStoreFilterBackend, useStoreLocation, useStorePhoneNumber } from "../hooks/useStore";
import PhoneNumberFilter from "./filters/PhoneNumberFilter";
import CuilFilter from "./filters/CuilFilter";
import PropTypes from 'prop-types'
import LocationFilter from "./filters/LocationFilter";


const Filters = ( { setCurrentPage } ) => {
  const { addPropertyToMyFilter, myFilter, deleteFilters, deletePropertyFromMyFilter } = useStoreFilterBackend();

  const {phoneNumber, setPhoneNumber} = useStorePhoneNumber()
  const {cuil, setCuil} = useStoreCuil()
  const {location, setLocation} = useStoreLocation()

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
      if(location){
        addPropertyToMyFilter('l.name', location)
      }else{
        deletePropertyFromMyFilter('l.name')
      }
    }
    const handleClickResetFilter = () => {
      const inputs = document.getElementsByClassName('filters')
      const selectfilters = document.getElementsByClassName('selectfilters')

      Array.from(selectfilters).forEach( input => {
        input.selectedIndex = 0;
      })

      Array.from(inputs).forEach( input => {
        input.value = ''
      })
      setPhoneNumber(null)
      setCuil(null)
      setLocation(null)
      deleteFilters()
    }

    const isEmpty = (obj) => {
      return Object.keys(obj).length === 0;
    }

  return (
    <section>
      <aside className="flex gap-5">
        <form onSubmit={handleFilter} className="flex gap-2">
          <PhoneNumberFilter  />
          <CuilFilter/>
          <LocationFilter/>
          <button type="submit" className="bg-slate-700 px-3 rounded-xl">Filtrar</button>
        </form>
        {
          !isEmpty(myFilter) ? <button className="flex gap-3 items-center justify-center border-dashed border px-3 rounded-xl" onClick={handleClickResetFilter}>Reset <span>x</span></button> : null
        }

      </aside>
    </section>
  );
}

Filters.propTypes = {
  setCurrentPage: PropTypes.func,
}


export default Filters;
