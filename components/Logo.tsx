import { oswald } from "@/app/layout";

interface LogoProps {
  size: "small" | "medium" | "large";
}

const Logo = ({ size }: LogoProps) => {
  const sizeMap = {
    small: "text-xl md:text-2xl lg:text-3xl",
    medium: "text-3xl md:text-4xl lg:text-5xl",
    large: "text-5xl md:text-6xl lg:text-7xl",
  };

  return (
    <h1
      className={`${sizeMap[size]} ${oswald.className} text-primary tracking-tight`}
    >
      Nivo
    </h1>
  );
};

export default Logo;
