"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Confetti from "react-confetti";
import { Typewriter } from "react-simple-typewriter";

// Updated FormData interface with index signature
interface FormData {
  name: string;
  number: string;
  email: string;
  message: string;
  [key: string]: unknown;
}

const Contact = () => {
  // Fetch environment variables for emailjs
  const template: string | undefined = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const service: string | undefined = process.env.NEXT_PUBLIC_SERVICE_ID;
  const key: string | undefined = process.env.NEXT_PUBLIC_USER_ID;

  // Initialize form handling
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (service && template && key) {
      setLoading(true);
      emailjs
        .send(service, template, data, key)
        .then(() => {
          setLoading(false);
          reset();
          setShowConfetti(true);
          setTimeout(() => {
            setShowConfetti(false);
          }, 3000);
          toast.success("Form Submitted Successfully!");
        })
        .catch((error) => {
          setLoading(false);
          console.error("FAILED...", error);
          toast.error("Form Submission Failed!");
        });
    } else {
      toast.error("Service or API keys are missing!");
    }
  };

  return (
    <section id="Contact" className="text-center py-16 px-5 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Get In <span className="text-[#264845]">Touch</span>
        </h1>
        <div className="flex items-center justify-center my-4">
          <div className="text-black/50 text-3xl font-normal font-Jost leading-[42px]">
            Extend your&nbsp;
          </div>
          <div className="text-black/50 text-3xl font-normal font-Jost leading-[42px]">
            <Typewriter
              words={["Vision", "Creativity", "Inspiration", "Elegance"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>

        <p className="font-Jost text-gray-600 text-sm sm:text-lg md:text-xl mt-12 mb-10 mx-auto max-w-3xl">
          We&apos;d love to hear from you! Reach out to discuss your design needs or any questions you may have.
        </p>
      </div>

      {/* Contact form section */}
      <form
        className="w-[min(100%,38rem)] mt-8 mx-auto font-Jost"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#264845]/15 text-black placeholder-black py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#264845]"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <div className="text-red-500">{errors.name.message}</div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#264845]/15 text-black placeholder-black py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#264845]"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full bg-[#264845]/15 text-black placeholder-black py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#264845]"
          {...register("number", {
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Phone number must be at least 10 digits",
            },
          })}
        />
        {errors.number && (
          <div className="text-red-500">{errors.number.message}</div>
        )}

        <textarea
          placeholder="Message"
          className="w-full bg-[#264845]/15 text-black placeholder-black py-3 px-4 rounded-[10px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#027223]"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 5,
              message: "Message must be at least 5 characters long",
            },
          })}
          rows={4}
        />
        {errors.message && (
          <div className="text-red-500">{errors.message.message}</div>
        )}

        <button
          type="submit"
          className="w-full font-Jakarta bg-[#264845] text-white rounded-lg font-semibold py-3 px-4 focus:scale-105 hover:scale-105 transition cursor-pointer"
          disabled={loading}
        >
          {loading ? (
            <div className="flex justify-center">
              <div
                className="animate-spin inline-block w-8 h-8 border-4 rounded-full border-black"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            "Contact Us"
          )}
        </button>
      </form>

      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed top-0 left-0 justify-center items-center w-full h-full z-50">
          <Confetti />
        </div>
      )}

      {/* Toast Container for notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
