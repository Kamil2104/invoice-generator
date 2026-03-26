"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import AuthCard from "@/components/auth/AuthCard";
import AuthHero from "@/components/auth/AuthHero";
import AuthShell from "@/components/auth/AuthShell";
import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";

const loginSchema = z.object({
  login: z
    .string()
    .min(2, "Login must be at least 2 characters long")
    .max(100, "Login must be at most 100 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Confirm Password must be at least 6 characters long"),
});

type LoginForm = z.infer<typeof loginSchema>;

type AuthCredentialsFormProps = {
  mode: "register" | "changePassword";
};

const AuthCredientalsForm = ({ mode }: AuthCredentialsFormProps) => {
  const {
    register: rhfRegister, // alias to avoid confusion with /register route
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Form data:", data);

    // API call to create a new user would go here
  };

  return (
    <AuthShell>
      <div className="grid w-full gap-10 lg:grid-cols-[1fr_1.1fr] items-center justify-items-center lg:justify-items-stretch">
        <AuthHero
          title={mode === "register" ? "Create your account" : "Change your password"}
          subtitle={mode === "register" ? "Join us and start generating invoices in seconds!" : "Set up your new password to keep your account secure."}
          pillLabel={mode === "register" ? "Step 1 / 3" : "Set up your new password"}
          pillNote="Profile → Company → Billing"
        />

        <AuthCard
            title={mode === "register" ? "Create your account" : "Change password"}
            meta="Takes ~2 minutes">
          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="md:col-span-1">
              <Input
                {...rhfRegister("login")}
                type="text"
                placeholder="Login"
                errorMsg={errors.login?.message}
              />
            </div>

            <div className="md:col-span-1">
              <Input
                {...rhfRegister("password")}
                type="password"
                placeholder={mode === "register" ? "Password" : "New Password"}
                errorMsg={errors.password?.message}
              />
            </div>

            <div className="md:col-span-2">
              <Input
                {...rhfRegister("confirmPassword")}
                type="password"
                placeholder={mode === "register" ? "Confirm Password" : "Confirm New Password"}
                errorMsg={errors.confirmPassword?.message}
              />
            </div>

            <p className="text-xs text-foreground/60 md:col-span-2">
              Use at least 6 characters. We recommend mixing letters and numbers.
            </p>

            <div className="md:col-span-2">
              <SubmitButton text={mode === "register" ? "Create account" : "Change password"} />
            </div>
          </form>
        </AuthCard>
      </div>
    </AuthShell>
  );
};

export default AuthCredientalsForm;
