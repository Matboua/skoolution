"use client"
import React from 'react'
import Link from "next/link";
import NavButtons from './NavButtons';
import { scrollLeft , scrollRight } from '../../../helpers/scrole'; 

const SignUpForm1 = () => {
    return (
        <div className="space-y-4 mt-5 w-full">
            <div className=" relative">
                <p className="ml-5 text-gray-500"> Nom complet</p>
                <input
                    type="email"
                    placeholder="Ecrivez votre Nom..."
                    className="w-full border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                />
            </div>

            <div className="relative">
                <p className="ml-5 text-gray-500">Numéro de téléphone</p>
                <input
                    type="password"
                    placeholder="Ecrivez votre numéro..."
                    className="w-full border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                />
            </div>


            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-500 text-sm">Ou</span>
                <hr className="flex-grow border-gray-300" />
            </div>
            <NavButtons/>
            <p className="text-center text-sm mt-6 text-gray-500">
                Avez-vous déjà un compte ?{" "}
                <Link href="register" className="text-blue-600 hover:underline">
                    Cliquez ici!
                </Link>
            </p>
        </div>
    )
}

export default SignUpForm1