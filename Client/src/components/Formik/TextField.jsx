import React from "react";
import { ErrorMessage, useField } from "formik";
const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={field.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white  ${
          meta.touched && meta.error && "border-red-500"
        }`}
      />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
        <ErrorMessage name={field.name} />
      </span>
    </>
  );
};

export default TextField;
