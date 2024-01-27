
import PropTypes from 'prop-types';

const Pdf = ({ name, size }) => {
  const sizeInMegabytes = Math.round((size / 1024 / 1024) * 100) / 100;

  return (
    <div className="group rounded-xl bg-slate-300 w-1/2 p-5 transition-all duration-300 ease-in-out transform hover:overflow-visible text-blue-700">
      <p className="overflow-hidden group-hover:overflow-visible">{name}</p>
      <p className='font-bold'>{sizeInMegabytes} <span className='font-normal'>MB</span></p>
    </div>
  );
};

Pdf.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Pdf;
