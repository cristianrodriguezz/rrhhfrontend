

const HasTransportFilter = ({ state, handleChange }) => {
  return (
    <div>
    <label htmlFor="has_own_transport">Transporte</label>
    <input
      type="checkbox"
      id="has_own_transport"
      name="has_own_transport"
      value={state.has_own_transport}
      onChange={handleChange}
    />
  </div>
  )
}

export default HasTransportFilter