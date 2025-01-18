import React, { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

import Snackbar from "./Snackbar.jsx";

const ContactForm = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  })

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        reset();
        setShowSnackbar(true);
      }, 5000);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <div className="rounded-xl bg-[--color-white] p-6 w-auto sm:p-8 sm:w-[40rem]">
        <h1 className="text-[--color-green-900] text-2xl font-bold py-2 sm:text-3xl">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="gap-4">
            <div className="flex flex-col items-start sm:flex-row sm:items-start sm:gap-4">
              <div className={`mt-5 w-full text-[--color-grey-900] ${errors.firstName ? 'error' : ''}`}>
                <label htmlFor="firstName" className="relative text-sm font-medium items-center">
                  First Name
                  <span className="absolute -right-2 text-[--color-green-600]">*</span>
                </label>
                <input
                  id="firstName"
                  className={`mt-1 block w-full rounded-md border px-2 py-2 outline-none transition-colors sm:px-4 ${
                    errors.firstName
                      ? 'border-[--color-red] focus:border-[--color-red]'
                      : 'border-[--color-grey-500] hover:border-[--color-green-600]'
                  }`}
                  type="text"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                <span role="alert" className={`mt-1 block min-h-6 text-xs text-[--color-red] opacity-100 transition-all sm:mt-2 sm:text-sm ${!errors.firstName ? 'hidden' : ''}`}>
                  {errors.firstName?.message}
                </span>
              </div>
              <div className={`mt-5 w-full text-[--color-grey-900] ${errors.lastName ? 'error' : ''}`}>
                <label htmlFor="lastName" className="relative text-sm font-medium">
                  Last Name
                  <span className="absolute -right-2 text-[--color-green-600]">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  className={`mt-1 block w-full rounded-md border px-2 py-2 outline-none transition-colors sm:px-4 ${
                    errors.lastName
                      ? 'border-[--color-red] focus:border-[--color-red]'
                      : 'border-[--color-grey-500] hover:border-[--color-green-600]'
                  }`}
                  {...register("lastName", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
                <span role="alert" className={`mt-1 block min-h-6 text-xs text-[--color-red] opacity-100 transition-all sm:mt-2 sm:text-sm ${!errors.lastName ? 'hidden' : ''}`}>
                  {errors.lastName?.message}
                </span>
              </div>
            </div>
            <div className={`mt-5 w-full text-[--color-gray-500]] ${errors.email ? 'error' : ''}`}>
              <label htmlFor="email" className="relative text-sm font-medium">
                Email Address
                <span className="absolute -right-2 text-[--color-green-600]">*</span>
              </label>
              <input
                id="email"
                type="text"
                className={`mt-1 block w-full rounded-md border px-2 py-2 outline-none transition-colors sm:px-4 ${
                  errors.email
                    ? 'border-[--color-red] focus:border-[--color-red]'
                    : 'border-[--color-grey-500] hover:border-[--color-green-600]'
                }`}
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  validate: (value) =>
                    validator.isEmail(value) || "Please enter a valid email address",
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              <span role="alert" className={`mt-1 block min-h-6 text-xs text-[--color-red] opacity-100 transition-all sm:mt-2 sm:text-sm ${!errors.email ? 'hidden' : ''}`}>
                {errors.email?.message}
              </span>
            </div>
            <fieldset className={`mt-5 w-full text-[--color-gray-500] ${errors.queryType ? 'error' : ''}`}>
              <legend className="relative text-sm font-medium">Query Type
                <span className="absolute -right-2 text-[--color-green-600]">*</span>
              </legend>
              <div className="mt-1 flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                <div
                  className={`flex items-center gap-x-2 mt-1 w-full cursor-pointer rounded-md border border-[--color-grey-500] px-2 py-2 transition-colors hover:border-[--color-green-600] sm:px-4  ${watch("queryType") === "general-enquiry" ? 'border-[--color-green-600] bg-[--color-green-200]' : ''}`}
                  onClick={() => setValue("queryType", "general-enquiry")}
                >
                  <input
                    id="generalEnquiry"
                    type="radio"
                    {...register("queryType", {
                      required: {
                        value: true,
                        message: "Please select a query type",
                      },
                    })}
                    value="general-enquiry"
                    className="h-4 w-4 cursor-pointer accent-[--color-green-600]"
                  />
                  <label htmlFor="generalEnquiry" className="cursor-pointer text-sm h-6 flex items-center">
                    General Enquiry
                  </label>
                </div>
                <div
                  className={`flex items-center gap-x-2 mt-1 w-full cursor-pointer rounded-md border border-[--color-grey-500] px-2 py-2 transition-colors hover:border-[--color-green-600] sm:px-4  ${watch("queryType") === "support-request" ? 'border-[--color-green-600] bg-[--color-green-200]' : ''}`}
                  onClick={() => setValue("queryType", "support-request")}
                >
                  <input
                    id="supportRequest"
                    type="radio"
                    {...register("queryType", {
                      required: {
                        value: true,
                        message: "Please select a query type",
                      },
                    })}
                    value="support-request"
                    className="h-4 w-4 cursor-pointer accent-[--color-green-600]"
                  />
                  <label htmlFor="supportRequest" className="cursor-pointer text-sm h-6 flex items-center">
                    Support Request
                  </label>
                </div>
              </div>
              <span role="alert" className={`mt-1 block min-h-6 text-xs text-[--color-red] opacity-100 transition-all sm:mt-2 sm:text-sm ${!errors.queryType ? 'hidden' : ''}`}>
                {errors.queryType?.message}
              </span>
            </fieldset>
            <div className={`mt-5 w-full text-[--color-gray-500] ${errors.message ? 'error' : ''}`}>
              <label htmlFor="message" className="relative text-sm font-medium">
                Message
                <span className="absolute -right-2 text-[--color-green-600]">*</span>
              </label>
              <textarea
                id="message"
                className={`mt-1 h-48 block w-full rounded-md border px-2 py-2 outline-none transition-colors sm:h-24 sm:px-4 ${
                  errors.message
                    ? 'border-[--color-red] focus:border-[--color-red]'
                    : 'border-[--color-grey-500] hover:border-[--color-green-600]'
                }`}
                rows={3}
                {...register("message", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              <span role="alert" className={`mt-1 block min-h-6 text-xs text-[--color-red] opacity-100 transition-all sm:mt-2 sm:text-sm ${!errors.message ? 'hidden' : ''}`}>
                {errors.message?.message}
              </span>
            </div>
            <div className={`mt-8 w-full text-[--color-gray-500] flex items-center gap-4 ${errors.consent ? 'error' : ''}`}>
              <input
                id="consent"
                type="checkbox"
                {...register("consent", {
                  required: {
                    value: true,
                    message: "To submit this form, please consent to being contacted",
                  },
                })}
                className="cursor-pointer h-4 w-4 accent-[--color-green-600]"
                aria-invalid={errors.consent ? "true" : "false"}
              />
              <label htmlFor="consent" className="cursor-pointer transition-colors">
                I consent to being contacted by the team &nbsp;
                <span className="text-[--color-green-600]">*</span>
              </label>
            </div>
            <span role="alert" className={`mt-1 block min-h-6 text-xs text-[--color-red] opacity-100 transition-all sm:mt-2 sm:text-sm ${!errors.consent ? 'hidden' : ''}`}>
                {errors.consent?.message}
              </span>
          </div>
          <button disabled={loading} type="submit" className="mt-8 h-[2.625rem] w-full rounded-md bg-[--color-green-600] py-2 text-sm text-[--color-white] transition-colors hover:bg-[--color-green-900] disabled:cursor-not-allowed disabled:bg-[--color-grey-500]">
            Submit
          </button>
        </form>
      </div>
      {showSnackbar && (
        <Snackbar
          title="Message Sent!"
          description="Thanks for completing the form. We'll be in touch soon!"
          show={showSnackbar}
          close={() => setShowSnackbar(false)}
        />
      )}
    </main>
  );
};

export default ContactForm;
