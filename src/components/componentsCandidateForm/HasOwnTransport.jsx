import PropTypes from 'prop-types';

const HasOwnTransport = ({ formik }) => {
  return (
    <>
      <label htmlFor="has_own_transport">¿Tiene transporte propio?</label>
      <input
        type="checkbox"
        id="has_own_transport"
        name="has_own_transport"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.has_own_transport}
        />
    </>
  )
}
HasOwnTransport.propTypes = {
  formik: PropTypes.object, 
}
export default HasOwnTransport