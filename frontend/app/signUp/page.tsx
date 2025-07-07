"use client";

import { useRef } from "react";
import Cercels from "../components/Signupomponents/cercels";
import SignUpLeft from "../components/Signupomponents/SignUpLeft";
import SignUpForm1 from "../components/Signupomponents/SignUpForm1";
import Link from "next/link";
import NavButtons from '../components/Signupomponents/NavButtons';
import { useStepStore, StepStore } from "../../stateManagment/stepStor";
import { useSignUpStore } from "../../stateManagment/signupStor";
import { signUp } from "../../actions/signUp";
import { SignUpStore } from "../../stateManagment/signupStor";

export default function LoginPage() {
    const containerRef = useRef(null);
    const { counter, increment, decrement }: StepStore = useStepStore()
    const { Errors } = useSignUpStore();
    const { signUpData } = useSignUpStore() ;

    const scrollToStep = (index: number) => {
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

                </div>
                <NavButtons />
                <p className="text-center text-sm mt-6 text-gray-500">
                    Avez-vous déjà un compte ?{" "}
                    <Link href="register" className="text-blue-600 hover:underline">
                        Cliquez ici!
                    </Link>
                </p>

                {/* Navigation Buttons */}
                <div className="flex justify-between gap-2 mt-6">
                    <button
                        className={counter !== 0 ? `w-full text-gray-300 border-2 border-gray-300 py-2 rounded-md hover:bg-gray-300 transition flex gap-2 justify-center` : `w-full text-gray-300 border-2 border-gray-300 py-2 rounded-md hover:bg-gray-300 transition flex gap-2 justify-center`}
                        onClick={() => { decrement(); scrollToStep(counter - 1); }}
                        disabled={counter === 0}
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
                        onClick={() => { counter < 2 ? (increment(), scrollToStep(counter + 1)) : signUp(signUpData).then(()=>{}) }}
                        disabled={Object.keys(Errors).length > 0}
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
