"use client";

import { useRef } from "react";
import Cercels from "../components/Signupomponents/cercels";
import SignUpLeft from "../components/Signupomponents/SignUpLeft";
import SignUpForm1 from "../components/Signupomponents/SignUpForm1";
import SignUpForm2 from "../components/Signupomponents/SignUpForm2";
import SignUpForm3 from "../components/Signupomponents/SignupForm3";

export default function LoginPage() {
    const containerRef = useRef(null);

    const scrollToStep = (index) => {
        if (containerRef.current) {
            const scrollWidth = containerRef.current.clientWidth;
            containerRef.current.scrollTo({
                left: scrollWidth * index,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row h-screen">
            <SignUpLeft />

            <div className="w-full max-w-md mx-auto p-4 md:p-1 mt-30">
                <h1 className="sm:text-4xl md:text-5xl text-5xl font-bold mb-2 text-center md:text-left">
                    S’inscrire
                </h1>
                <p className="text-sm text-center md:text-left text-gray-500">
                    Veuillez entrer vos informations!
                </p>

                <Cercels />

                <div
                    ref={containerRef}
                    className="flex flex-nowrap w-full overflow-x-hidden no-scrollbar touch-none"
                >
                    <div className="min-w-full">
                        <SignUpForm1 />
                    </div>
                    <div className="min-w-full">
                        <SignUpForm2 />
                    </div>
                    <div className="min-w-full">
                        <SignUpForm3 />
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-2 mt-6">
                    <button
                        className="w-full text-[#054BB4] border-2 border-[#054BB4] py-2 rounded-md hover:bg-gray-300 transition flex gap-2 justify-center"
                        onClick={() => scrollToStep(0)}
                    >
                        <div className="w-6 px-1 rounded-full border-2 border-[#054BB4] flex items-center justify-center">
                            <svg
                                className="rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="#054BB4"
                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                />
                            </svg>
                        </div>
                        Précédent
                    </button>

                    <button
                        className="w-full text-white bg-[#054BB4] py-2 rounded-md hover:bg-blue-600 transition flex gap-2 justify-center"
                        onClick={() => scrollToStep(1)}
                    >
                        Suivant
                        <div className="w-6 px-1 rounded-full border-2 border-white flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="#ffffff"
                                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
