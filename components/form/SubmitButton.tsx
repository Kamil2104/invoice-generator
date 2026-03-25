interface SubmitButtonProps {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full text-sm md:text-base py-2 md:py-2.5 lg:py-3 rounded-lg bg-primary text-black font-semibold hover:opacity-90 transition cursor-pointer"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
