import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your name should me at least 3 characters")
      .required("Please enter your name"),
    subject: yup
      .string()
      .min(3, "The subject should me at least 3 characters")
      .max(100, "The subject should not exceed 100 characters")
      .required("Please enter a subject"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    body: yup
      .string()
      .min(3, "The message should me at least 3 characters")
      .max(1000, "The message should not exceed 1000 characters")
      .required("Please enter a message"),
  })
  .required();

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form w-11/12 p-4 m-auto rounded bg-white shadow-md shadow-slate-200 lg:w-1/2 md:w-3/4">
        <p className="contact-phrase font-bold text-xl">Get in touch with us</p>
        <div className="relative my-6">
          <input
            className="peer relative h-12 w-full rounded border border-slate-200 px-4 text- text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            name="full-name"
            placeholder="Alba Andersson"
            {...register("fullName")}
          />
          <label
            htmlFor="full-name"
            className="absolute left-2 -top-2 z-[1]     cursor-text px-2 text-sm text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500
            peer-required:after:content-['\u00a0*'] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
            <span className="text-red-400">*</span>Name
          </label>

          <p className="px-4 pt-1 text-red-400 text-sm">
            {errors.fullName?.message}
          </p>
        </div>
        <div className="relative my-6">
          <input
            className="peer relative h-12 w-full rounded border border-slate-200 px-4 text- text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            name="subject"
            placeholder="Enter a subject"
            {...register("subject")}
          />
          <label
            className="absolute left-2 -top-2 z-[1]     cursor-text px-2 text-sm text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500
            peer-required:after:content-['\u00a0*'] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            htmlFor="subject">
            <span className="text-red-400">*</span>Subject
          </label>
          <p className="px-4 pt-1 text-red-400 text-sm">
            {errors.subject?.message}
          </p>
        </div>
        <div className="relative my-6">
          <input
            className="peer relative h-12 w-full rounded border border-slate-200 px-4 text- text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            name="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <label
            className="absolute left-2 -top-2 z-[1]     cursor-text px-2 text-sm text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500
            peer-required:after:content-['\u00a0*'] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            htmlFor="email">
            <span className="text-red-400">*</span>Email
          </label>
          <p className="px-4 pt-1 text-red-400 text-sm">
            {errors.email?.message}
          </p>
        </div>
        <div className="relative my-6">
          <textarea
            className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            name="body"
            placeholder="Message"
            {...register("body")}
          />
          <label
            className="absolute left-2 -top-2 z-[1]     cursor-text px-2 text-sm text-slate-500 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500
            peer-required:after:content-['\u00a0*'] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            htmlFor="body">
            <span className="text-red-400">*</span> Message
          </label>
          <p className="px-4 pt-1 text-red-400 text-sm">
            {errors.body?.message}
          </p>
        </div>
        <input
          type="submit"
          className="submit flex uppercase h-12 w-4/5 m-auto items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-700 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none"
        />
      </form>
    </div>
  );
}

export default ContactForm;
