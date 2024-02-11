import { useStoreCuil } from "../../hooks/useStore"


const CuilFilter = () => {
  const {setCuil} = useStoreCuil()
  return (
    <div>
      <label htmlFor="c.cuil"></label>
      <input
        type="text"
        id="c.cuil"
        name="c.cuil"
        className="filters bg-slate-600 w-full placeholder-slate-300 text-sm rounded-lg "
        placeholder="Cuil..."
        onChange={(e) => setCuil(e.target.value)}
      />
    </div>
  )
}

export default CuilFilter