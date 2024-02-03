import PropTypes from 'prop-types'

const Loading = ({ className }) => {
  return (
    <div className={className}>
      <div className="loader"></div>
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string
}

export default Loading