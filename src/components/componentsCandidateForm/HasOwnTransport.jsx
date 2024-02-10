import PropTypes from 'prop-types';

const HasOwnTransport = ({ formik }) => {
  return (
      <label htmlFor="has_own_transport" className='flex items-center justify-center  gap-2 bg-white w-full text-slate-900 font-medium  border-body rounded-lg'>¿Tiene transporte propio?
        <input
          type="checkbox"
          id="has_own_transport"
          name="has_own_transport"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.has_own_transport}
          className="size-4 text-pink-500 rounded border-none bg-pink-300 "
          />
      </label>
  )
}
HasOwnTransport.propTypes = {
  formik: PropTypes.object, 
}
export default HasOwnTransport