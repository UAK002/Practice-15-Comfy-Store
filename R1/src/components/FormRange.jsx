import { formatPrice } from '../utils';
import { useState } from 'react';

const FormRange = ({ label, size, name, price }) => {
  const step = 1000;
  const maxPrice = 100000;

  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span className="">{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        id={name}
        min={0}
        max={maxPrice}
        step={step}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};
export default FormRange;

// - Working in the Filters.jsx
// - Filters.jsx >
// 1. import FormRange comp.
// 2. Fitler comp > after order comment > comment PRICE
// 3. under comment PRICE > render FormRange comp. name="price" label="select price" size ="range-sm"
