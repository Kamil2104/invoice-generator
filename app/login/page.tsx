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
    <section className="h-screen w-screen flex justify-center items-center bg-background p-10">
      <div className="flex flex-col items-center py-7 px-10 md:p-10 w-95 bg-background/60 backdrop-blur-xl border border-foreground/10 shadow-xl rounded-2xl gap-6">
        <Logo size="large" />

        <div className="w-full h-1 bg-foreground/10"></div>

        <form
          className="flex flex-col w-full gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("login")}
            type="login"
            placeholder="Login"
            errorMsg={errors.login?.message}
          />

          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            errorMsg={errors.password?.message}
          />

          <label
            htmlFor="remember"
            className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-foreground/80 select-none cursor-pointer w-fit"
          >
            <input
              id="remember"
              type="checkbox"
              className="cursor-pointer peer relative h-3.5 md:h-4 w-3.5 md:w-4 appearance-none rounded border border-primary/70 bg-background transition
              checked:bg-primary checked:border-primary
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background
              hover:border-primary/80
              after:pointer-events-none after:absolute after:left-[4.5px] md:after:left-[4.5px] after:top-[1.5px] md:after:top-px after:h-2 md:after:h-2.5 after:w-1 md:after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-black after:opacity-0 after:transition-opacity
              checked:after:opacity-100"
            />
            <span className="transition-colors peer-checked:text-foreground">Remember me</span>
          </label>

          <p className="mt-0 md:mt-4 text-xs md:text-sm text-foreground/70">
          Forgot password? {" "}
            <Link href="/newPassword" className="text-primary hover:underline">
              Set a new one
            </Link>
          </p>

          <SubmitButton text="Log in" />
        </form>

        <div className="flex items-center w-full gap-3">
          <div className="flex-1 h-1 bg-foreground/10"></div>
          <span className="text-sm text-foreground/60">or</span>
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

        <p className="mt-0 md:mt-4 text-xs md:text-sm  text-foreground/70">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Page;
