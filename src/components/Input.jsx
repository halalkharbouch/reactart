export default function CustomInputs({ label, invalid, ...props }) {
  let labelClasess =
    "block mb-2 text-xs font-bold tracking-wide text-stone-300 uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasess += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-500";
  } else {
    labelClasess += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelClasess}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
