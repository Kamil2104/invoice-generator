import { ReactNode } from "react";

interface AuthShellProps {
  children: ReactNode;
}

const AuthShell = ({ children }: AuthShellProps) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-background via-background to-primary/15">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-foreground/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-12 py-20">
        {children}
      </div>
    </section>
  );
};

export default AuthShell;
