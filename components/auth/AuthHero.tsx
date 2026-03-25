import Logo from "@/components/Logo";
import { ReactNode } from "react";

interface AuthHeroProps {
  title: string;
  subtitle: string;
  pillLabel: string;
  pillNote: string;
  align?: "left" | "center"; // kept for backwards compatibility; we now center on mobile, left on large
  extra?: ReactNode;
}

const AuthHero = ({
  title,
  subtitle,
  pillLabel,
  pillNote,
  align = "left",
  extra,
}: AuthHeroProps) => {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-center lg:text-left items-center lg:items-start";

  return (
    <div className={`space-y-4 ${alignment}`}>
      <Logo size="large" />
      <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
        {title}
      </h1>
      <p className="text-sm text-foreground/70 max-w-md mx-auto lg:mx-0">
        {subtitle}
      </p>
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-foreground/60">
        <span className="inline-flex h-8 items-center rounded-full border border-foreground/10 bg-foreground/5 px-3">
          {pillLabel}
        </span>
        <span>{pillNote}</span>
      </div>
      {extra}
    </div>
  );
};

export default AuthHero;
