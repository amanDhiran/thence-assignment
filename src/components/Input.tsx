import React from "react";

function Input({name , handleChange, placeholder} : {
    name: string,
    handleChange: (e : React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}) {
  return (
    <input
      type="text"
      className="px-9 w-full py-6  rounded-[64px] bg-[#efefef] placeholder:text-xl placeholder:font-medium placeholder:text-[#827A7A] text-xl font-medium"
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default Input;
