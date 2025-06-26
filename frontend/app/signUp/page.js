import Image from "next/image";
import Link from "next/link";

import Cercels from "../components/Signupomponents/cercels";
import SignUpLeft from "../components/Signupomponents/SignUpLeft";
import SignUpForm1 from "../components/Signupomponents/SignUpForm1";
import SignUpForm2 from "../components/Signupomponents/SignUpForm2";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row h-screen">
            {/* Login Form */}
            <SignUpLeft />
            {/* Login Left */}
            <div className="w-full max-w-md mx-auto p-4 md:p-1 mt-30">
                <h1
                    className="sm:text-4xl md:text-5xl g:text-10xl text-5xl font-bold mb-2 whitespace-nowrap
            text-center md:text-left md:mr-0 "
                >
                    S’inscrire
                </h1>
                <p className="text-sm text-center md:text-left  text-gray-500  ">
                    Veuillez entrer vos informations!
                </p>
                {/* progress cercels */}

                <Cercels />

                <SignUpForm2 />
            </div>
        </div>
    );
}
