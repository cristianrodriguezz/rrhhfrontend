import { useStorePhoneNumber } from "../../hooks/useStore";

const PhoneNumberFilter = () => {
  const {setPhoneNumber} = useStorePhoneNumber()
  return (
    <div>
      <label htmlFor="c.phone_number"></label>
      <input
        type="text"
        id="c.phone_number"
        name="c.phone_number"
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Teléfono..."
        className="filters bg-slate-600 w-full placeholder-slate-300 text-sm  rounded-lg "
      />
    </div>
  );
};

export default PhoneNumberFilter;
