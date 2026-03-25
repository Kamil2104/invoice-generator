import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  meta?: string;
  children: ReactNode;
  maxWidth?: string;
}

const AuthCard = ({
  title,
  meta,
  children,
  maxWidth = "max-w-xl",
}: AuthCardProps) => {
  return (
    <div
      className={`w-full ${maxWidth} rounded-2xl border border-foreground/10 bg-background/70 p-8 shadow-2xl backdrop-blur-xl md:p-10`}
    >
      <div className="mb-6 flex flex-col gap-1 text-left md:flex-row md:items-center md:justify-between">
        <h2 className="text-lg font-medium text-foreground">{title}</h2>
        {meta && <span className="text-xs text-foreground/60">{meta}</span>}
      </div>
      {children}
    </div>
  );
};

export default AuthCard;
