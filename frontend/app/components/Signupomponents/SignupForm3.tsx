"use client"
import React from 'react'
import Link from "next/link";
import NavButtons from './NavButtons';

const SignUpForm3 = () => {
    return (
        <div className="space-y-4 mt-5">
            <div className=" relative">
                <p className="ml-5 text-gray-500">Adresse email</p>
                <input
                    type="email"
                    placeholder="Ecrivez votre adresse email..."
                    className="w-full border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                />
            </div>

            <div className="relative">
                <p className="ml-5 text-gray-500">Mot de  passe</p>
                <input
                    type="password"
                    placeholder="Ecrivez votre mot de  passe"
                    className="w-full border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                />
            </div>

            

            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-500 text-sm">Ou</span>
                <hr className="flex-grow border-gray-300" />
            </div>
            <NavButtons />
            <p className="text-center text-sm mt-6 text-gray-500">
                Avez-vous déjà un compte ?{" "}
                <Link href="register" className="text-blue-600 hover:underline">
                    Cliquez ici!
                </Link>
            </p>
        </div>
    )
}

export default SignUpForm3