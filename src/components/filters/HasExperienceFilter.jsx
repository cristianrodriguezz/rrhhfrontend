

const HasExperienceFilter = ({ state, handleChange }) => {
  return (
    <div>
      <label htmlFor="has_work_experience">Experiencia: </label>
      <input
        type="checkbox"
        id="has_work_experience"
        name="has_work_experience"
        value={state.has_work_experience}
        onChange={handleChange}
      />
    </div>
  )
}

export default HasExperienceFilter