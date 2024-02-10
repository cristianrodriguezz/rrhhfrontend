import PropTypes from 'prop-types';

const HasOwnExperience = ({ formik }) => {
  return (
    <>
      <label htmlFor="has_work_experience" className='flex items-center justify-center  text-slate-900 font-medium  gap-2  bg-white w-full  border-body rounded-lg'>¿Tiene experiencia?
        <input
          type="checkbox"
          id="has_work_experience"
          name="has_work_experience"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.has_work_experience}
          className="size-4 text-pink-500 rounded border-none  bg-pink-300 "
          />
        </label>
    </>
  )
}
HasOwnExperience.propTypes = {
  formik: PropTypes.object, 
}
export default HasOwnExperience