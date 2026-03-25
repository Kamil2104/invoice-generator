interface SocialMediaSubmitButtonProps {
  icon: React.ReactNode;
  bgClass?: string;
  textClass?: string;
  platform: string;
}

const SocialMediaSubmitButton = ({
  icon,
  bgClass = "",
  textClass = "",
  platform,
}: SocialMediaSubmitButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-1.5 md:gap-2 lg:gap-3 w-full text-sm md:text-base py-2 md:py-2.5 lg:py-3 rounded-lg font-medium hover:opacity-90 transition cursor-pointer ${bgClass} ${textClass}`}
    >
      {icon}
      Continue with {platform}
    </button>
  );
};

export default SocialMediaSubmitButton;
