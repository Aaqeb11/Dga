"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  number: string;
  email: string;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // Form handling using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  // Submit handler
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    console.log("Form Data Submitted: ", data);

    // Simulate submission (replace this logic with EmailJS or API call)
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully!");
      reset();
    }, 2000);
  };

  return (
    <section className="py-10 px-5 sm:px-10 lg:px-20 ">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl mb-20 font-bold text-center mb-8 text-gray-800">
          Get In <span className="text-[#69BF06]">Touch</span>
        </h1>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 shadow-lg rounded-lg"
        >
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-semibold mb-1"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Jonathan"
              {...register("firstName", { required: "First Name is required" })}
              className="w-full bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-[#69BF06] py-2 px-4"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-semibold mb-1"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Myers"
              {...register("lastName", { required: "Last Name is required" })}
              className="w-full bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-[#69BF06] py-2 px-4"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="number"
              className="block text-gray-700 font-semibold mb-1"
            >
              Phone Number
            </label>
            <input
              id="number"
              type="tel"
              placeholder="+1 1122334455"
              {...register("number", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
              })}
              className="w-full bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-[#69BF06] py-2 px-4"
            />
            {errors.number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.number.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="myers@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-[#69BF06] py-2 px-4"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#69BF06] hover:bg-gray-300 text-white font-semibold rounded-md py-2 px-6 transition duration-200 w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
