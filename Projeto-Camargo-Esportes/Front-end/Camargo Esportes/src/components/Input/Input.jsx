function Input({label, id, type, placeholder, func, value}) {

    

  return (
    <>
      <label htmlFor={id} className=" text-gray-600 font-semibold">
        {label}
      </label>
      <input
      
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => func(e.target.value)}
      />
    </>
  );
}

export default Input;
