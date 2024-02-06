import { nameFilterFormater } from "../constants/nameFilterFormater";
import { useStoreCuil, useStoreFilterBackend, useStorePhoneNumber } from "../hooks/useStore";


const FiltersAdd = ( { filter, properyFilter, id } ) => {

  const { deletePropertyFromMyFilter } = useStoreFilterBackend();
  const {setPhoneNumber} = useStorePhoneNumber()
  const {setCuil} = useStoreCuil()

  const handleClickResetFilter = () => {
    let input = document.getElementById(id)
    input.value = ''
    deletePropertyFromMyFilter(properyFilter)
    setPhoneNumber(null)
    setCuil(null)
  }

  const name = id.split('.')[1];
  const nameFilter = nameFilterFormater(name)


  return (
    <div className="w-auto border border-gray-800 flex text-slate-400 rounded-xl">
      <span className="p-2">{nameFilter}: {filter}</span>
      <button onClick={handleClickResetFilter} className="bg-black p-2 rounded-r-xl">X</button>
    </div>
  )
}

export default FiltersAdd