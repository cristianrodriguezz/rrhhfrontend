import PropTypes from 'prop-types';

const HasOwnExperience = ({ formik, className }) => {
  return (
    <>
      <label htmlFor="has_work_experience">¿Tiene experiencia?</label>
      <input
        type="checkbox"
        id="has_work_experience"
        name="has_work_experience"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.has_work_experience}
        className={className}
        />
    </>
  )
}
HasOwnExperience.propTypes = {
  formik: PropTypes.object, 
}
export default HasOwnExperience