"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import Link from "next/link";

import Logo from "@/components/Logo";
import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import SocialMediaSubmitButton from "@/components/form/SocialMediaSubmitButton";

const loginSchema = z.object({
  login: z.string().min(2, "Login must be at least 2 characters long").max(100, "Login must be at most 100 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
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

    // API call to authenticate user would go here
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-background via-background to-primary/15">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-3xl lg:max-w-5xl items-center px-12 py-20">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_1.1fr] items-center">
          <div className="space-y-4 text-left">
            <Logo size="large" />
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
              Welcome back
            </h1>
            <p className="text-sm text-foreground/70 max-w-md">
              Log in to keep your invoices synced across devices and pick up where you left off.
            </p>
            <div className="flex items-center gap-3 text-xs text-foreground/60">
              <span className="inline-flex h-8 items-center rounded-full border border-foreground/10 bg-foreground/5 px-3">
                Secure login
              </span>
              <span>2-step ready · Encrypted</span>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-foreground/10 bg-background/70 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-medium text-foreground">Log in</h2>
              <span className="text-xs text-foreground/60">Takes ~30 seconds</span>
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

              <div className="md:col-span-2 flex flex-col gap-2">
                <label
                  htmlFor="remember"
                  className="flex items-center gap-2 text-sm text-foreground/80 select-none cursor-pointer w-fit"
                >
                  <input
                    id="remember"
                    type="checkbox"
                    className="cursor-pointer peer relative h-4 w-4 appearance-none rounded border border-primary/70 bg-background transition
                    checked:bg-primary checked:border-primary
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                    hover:border-primary/80
                    after:pointer-events-none after:absolute after:left-1.25 after:top-0.5 after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-black after:opacity-0 after:transition-opacity
                    checked:after:opacity-100"
                  />
                  <span className="transition-colors peer-checked:text-foreground">Remember me</span>
                </label>

                <p className="text-xs md:text-sm text-foreground/70">
                  Forgot password?{" "}
                  <Link href="/newPassword" className="text-primary hover:underline">
                    Set a new one
                  </Link>
                </p>
              </div>

              <div className="md:col-span-2">
                <SubmitButton text="Log in" />
              </div>
            </form>

            <div className="my-6 flex items-center w-full gap-3">
              <div className="flex-1 h-1 bg-foreground/10"></div>
              <span className="text-sm text-foreground/60">or continue with</span>
              <div className="flex-1 h-1 bg-foreground/10"></div>
            </div>

            <div className="flex flex-col w-full gap-3">
              <SocialMediaSubmitButton
                icon={<FcGoogle size={22} />}
                bgClass="bg-white"
                textClass="text-black"
                platform="Google"
              />

              <SocialMediaSubmitButton
                icon={<FaFacebook size={20} />}
                bgClass="bg-[#1877F2]"
                textClass="text-white"
                platform="Facebook"
              />
            </div>

            <p className="mt-6 text-xs md:text-sm text-foreground/70 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
