

const CuilFilter = ( { handleChange }) => {
  return (
    <div>
      <label htmlFor="cuil"></label>
      <input
        type="text"
        id="c.cuil"
        name="cuil"
        className="filters bg-slate-600 w-full placeholder-slate-300 text-sm border-body rounded-lg "
        placeholder="Cuil"
        onChange={handleChange}
      />
    </div>
  )
}

export default CuilFilter