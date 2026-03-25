interface AuthDividerProps {
  label?: string;
}

const AuthDivider = ({ label = "or continue with" }: AuthDividerProps) => (
  <div className="my-6 flex items-center w-full gap-3">
    <div className="flex-1 h-1 bg-foreground/10"></div>
    <span className="text-sm text-foreground/60">{label}</span>
    <div className="flex-1 h-1 bg-foreground/10"></div>
  </div>
);

export default AuthDivider;
