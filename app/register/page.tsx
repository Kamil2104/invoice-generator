"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Logo from "@/components/Logo";
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
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-background via-background to-primary/15">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-12 py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
          <div className="space-y-4 text-left">
            <Logo size="large" />
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
              Create your account
            </h1>
            <p className="text-sm text-foreground/70 max-w-md">
              Start generating invoices faster. One account, all devices, instant sync.
            </p>
            <div className="flex items-center gap-3 text-xs text-foreground/60">
              <span className="inline-flex h-8 items-center rounded-full border border-foreground/10 bg-foreground/5 px-3">
                Step 1 / 3
              </span>
              <span>Profile → Company → Billing</span>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-foreground/10 bg-background/70 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-medium text-foreground">Register</h2>
              <span className="text-xs text-foreground/60">Takes ~1 minute</span>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
