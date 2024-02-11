import { useStoreFilterBackend } from "../hooks/useStore";
import FiltersAdd from "./FiltersAdd";


const FiltersAddContainer = () => {

  const { myFilter } = useStoreFilterBackend()
  

  return (
    <div className="flex gap-4 my-2">
      {myFilter['c.phone_number'] ? <FiltersAdd properyFilter={'c.phone_number'} filter={myFilter['c.phone_number']} id='c.phone_number'/> : null }
      {myFilter['c.cuil'] ? <FiltersAdd properyFilter={'c.cuil'} filter={myFilter['c.cuil']} id='c.cuil'/> : null }
      {myFilter['l.name'] ? <FiltersAdd properyFilter={'l.name'} filter={myFilter['l.name']} id='l.name'/> : null }
    </div>
  )
}

export default FiltersAddContainer