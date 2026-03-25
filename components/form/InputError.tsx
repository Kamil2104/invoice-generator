interface InputErrorProps {
  msg: string;
}

const InputError = ({ msg }: InputErrorProps) => {
  return <p className="text-red-500 text-xs lg:text-sm mt-1">{msg}</p>;
};

export default InputError;
