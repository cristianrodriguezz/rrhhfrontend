import { useState } from 'react';

const DropDown = () => {
  const [selectedRadio, setSelectedRadio] = useState('')

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);

  };


  return (
    <div className="z-10 absolute w-48 divide-y rounded-lg shadow border border-gray-600 bg-gray-700 divide-gray-600">
      <ul className="p-3 space-y-1 text-sm text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
        <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-600">
            <input
              id="default-radio-4"
              type="radio"
              value="default-radio-4"
              name="default-radio"
              checked={selectedRadio === 'default-radio-4'}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="default-radio-4"
              className="w-full ms-2 text-sm font-medium rounded text-gray-300"
            >
              Default radio
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-600">
            <input
              id="default-radio-5"
              type="radio"
              value="default-radio-5"
              name="default-radio"
              checked={selectedRadio === 'default-radio-5'}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="default-radio-5"
              className="w-full ms-2 text-sm font-medium rounded text-gray-300"
            >
              Checked state
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center p-2 rounded hover:bg-gray-600">
            <input
              id="default-radio-6"
              type="radio"
              value="default-radio-6"
              name="default-radio"
              checked={selectedRadio === 'default-radio-6'}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="default-radio-6"
              className="w-full ms-2 text-sm font-medium rounded text-gray-300"
            >
              Default radio
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
