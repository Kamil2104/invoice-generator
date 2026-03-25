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

const Page = () => {
  const {
    register,
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
          title="Create your account"
          subtitle="Start generating invoices faster. One account, all devices, instant sync."
          pillLabel="Step 1 / 3"
          pillNote="Profile → Company → Billing"
        />

        <AuthCard title="Register" meta="Takes ~1 minute">
          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="md:col-span-1">
              <Input
                {...register("login")}
                type="text"
                placeholder="Login"
                errorMsg={errors.login?.message}
              />
            </div>

            <div className="md:col-span-1">
              <Input
                {...register("password")}
                type="password"
                placeholder="Password"
                errorMsg={errors.password?.message}
              />
            </div>

            <div className="md:col-span-2">
              <Input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm Password"
                errorMsg={errors.confirmPassword?.message}
              />
            </div>

            <p className="text-xs text-foreground/60 md:col-span-2">
              Use at least 6 characters. We recommend mixing letters and numbers.
            </p>

            <div className="md:col-span-2">
              <SubmitButton text="Create account" />
            </div>
          </form>
        </AuthCard>
      </div>
    </AuthShell>
  );
};

export default Page;
