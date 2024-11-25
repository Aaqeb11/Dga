'use client'
import React, { useState } from 'react';
import { GoOrganization } from "react-icons/go";

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { button: 'Organization', icon: <GoOrganization /> },
        { button: 'Settings', icon: <GoOrganization /> },
        { button: 'Dashboard', icon: <GoOrganization /> },
        { button: 'Profile', icon: <GoOrganization /> },
    ];

    return (
        <div className="flex flex-col ">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="text-black z-50 p-2 w-14"
            >
                {isOpen ? 'Close' : 'Open'}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-20 left-0 h-screen bg-gray-200 z-50 transition-all duration-300 ${
                    isOpen ? 'w-64' : 'w-16'
                }`}
            >
                <ul className="space-y-4 p-4">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            {/* Icon Always Visible */}
                            <button className="text-3xl">{item.icon}</button>
                            {/* Conditionally Render Text */}
                            <span
                                className={`text-xl whitespace-nowrap transition-transform duration-300 ${
                                    isOpen ? ' opacity-100' : ' opacity-0'
                                }`}
                            >
                                {item.button}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Page;
