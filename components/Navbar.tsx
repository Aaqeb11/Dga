"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../public/logo.png";
import { gsap } from "gsap";
import { Router, useRouter } from "next/router";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBodyLocked, setIsBodyLocked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const items = [
    { item: "HOME", id: "home" },
    { item: "ABOUT US", id: "companies" },
    { item: "CONTACT", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (targetSectionId?: string) => {
    setIsMenuOpen((prev) => !prev);
    setIsBodyLocked((prev) => !prev);

    if (targetSectionId) {
      scrollToSection(targetSectionId);
    }
  };

  const scrollToSection = (targetSectionId: string) => {
    const section = document.getElementById(targetSectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuItemsRef.current, {
        xPercent: 200,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(menuItemsRef.current, {
        xPercent: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isBodyLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBodyLocked]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-[70px] lg:h-[110px] md:shadow-md transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-[#4d4d4d]'
      }`}
    >
      <div className="px-2 md:px-4 lg:px-6 h-full flex items-center justify-between lg:justify-start">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => toggleMenu()}
            className={`text-2xl p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Logo */}
        <div className={`flex-none lg:w-[190px] lg:border-r-[0.5px] ${
          isScrolled ? 'lg:border-gray-200' : 'lg:border-white'
        } h-full items-center justify-center flex`}>
          <Link href="/" passHref>
            <div className="inline-block">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="object-cover hover:cursor-pointer"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-center">
          <div className="flex items-center gap-[2vw] xl:gap-[4vw]">
            {items.map((item, index) => (
              <button
                key={index}
                className={`text-[14px] xl:text-[16px] font-medium nav-font transition-colors tracking-wider ${
                  isScrolled
                    ? index === 0 
                      ? 'text-[#69bf06]' 
                      : 'text-gray-800 hover:text-[#69bf06]'
                    : index === 0 
                      ? 'text-[#69bf06]' 
                      : 'text-white hover:text-[#69bf06]'
                }`}
                onClick={() => scrollToSection(item.id.toLowerCase())}
              >
                {item.item}
              </button>
            ))}
          </div>
        </div>

        {/* Book Call Button - Desktop Only */}
        <div className={`hidden lg:flex lg:w-[190px] lg:border-l-[0.5px] ${
          isScrolled ? 'lg:border-gray-200' : 'lg:border-white'
        } h-full items-center justify-center`}>
          <button
            className={`border px-4 xl:px-6 py-2 rounded-md text-sm xl:text-md font-medium transition duration-300 whitespace-nowrap ${
              isScrolled
                ? 'bg-[#69bf06] text-white border-gray-300 hover:bg-white hover:text-[#69bf06] hover:border-[#69bf06]'
                : 'bg-[#69bf06] text-white border-gray-300 hover:bg-white hover:text-[#69bf06] hover:border-[#69bf06]'
            }`}
            onClick={() => scrollToSection("contact")}
          >
            Book Call
          </button>
        </div>

        {/* Empty div for mobile layout balance */}
        <div className="w-10 lg:hidden"></div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => toggleMenu()}
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-end p-4">
            <button
              onClick={() => toggleMenu()}
              className="text-2xl"
              aria-label="Close menu"
            >
              <IoMdClose className="text-[#69bf06] text-4xl" />
            </button>
          </div>
          <div className="flex flex-col gap-14 p-4 overflow-scroll overflow-x-hidden">
            {items.map((item, index) => (
              <div className="relative" key={index}>
                <div
                  className="bg-[#69bf06] absolute top-0 left-0 w-full h-full z-10 rounded-xl"
                  ref={(el) => {
                    menuItemsRef.current[index] = el;
                  }}
                ></div>
                <button
                  className="text-left border-gray-400 text-xl text-black border px-4 rounded-xl shadow-lg py-1 font-bold bg-white w-full"
                  onClick={() => toggleMenu(item.id.toLowerCase())}
                >
                  {item.item}
                </button>
              </div>
            ))}
          </div>
          <div className="p-4">
            <button
              className="w-full bg-[#69bf06] border border-gray-300 py-3 rounded-xl text-lg font-medium text-white font-bold hover:border-[#69bf06] hover:bg-white hover:text-[#69bf06] transition duration-300"
              onClick={() => toggleMenu("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;