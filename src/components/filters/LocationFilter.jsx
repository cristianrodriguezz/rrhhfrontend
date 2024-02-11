import { useFecthLocations } from "../../hooks/useFetch";
import { useStoreLocation } from "../../hooks/useStore";

const LocationFilter = () => {
  
  const { setLocation } = useStoreLocation()
  const { locations } = useFecthLocations()

  return (
    <div>
        <select
        id="l.name"
        name="l.name"
        onChange={(e) => setLocation(e.target.value)}
        className='selectfilters bg-slate-600 w-full placeholder-slate-300 text-sm rounded-lg '
      >
        <option hidden defaultValue={undefined}>
          Localidad...
        </option>
        {locations?.map(({ location_id, name }) => (
          <option key={location_id} className='text-slate-300' value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LocationFilter;
