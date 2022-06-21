import React, { InputHTMLAttributes, useCallback } from "react";

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const handleHours = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 6;
    let value = e.currentTarget.value;
    value = value.replace(/(\d{2})(\d{2})(\d{2})/g, "$1:$2:$3");
    e.currentTarget.value = value;
  }, []);
  return (
    <>
      <input {...props} onKeyUp={handleHours} />
    </>
  );
};
