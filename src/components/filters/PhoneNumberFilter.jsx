
const PhoneNumberFilter = ({  handleChange }) => {
  return (
    <div>
      <label htmlFor="phone_number"></label>
      <input
        type="text"
        id="c.phone_number"
        name="phone_number"
        onChange={handleChange}
        placeholder="Teléfono"
        className="filters bg-slate-600 w-full placeholder-slate-300 text-sm border-body rounded-lg "
      />
    </div>
  );
};

export default PhoneNumberFilter;
