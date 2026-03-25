import { InputHTMLAttributes } from "react";

import InputError from "./InputError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMsg?: string;
}

const Input = ({ errorMsg, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <input
        {...props}
        className="w-full px-3 py-2 md:px-3.5 lg:px-4 md:py-2.5 lg:py-3 md:text-md lg:text-lg rounded-lg bg-background border border-foreground/15 focus:border-primary outline-none transition"
      />
      {errorMsg && <InputError msg={errorMsg} />}
    </div>
  );
};

export default Input;
