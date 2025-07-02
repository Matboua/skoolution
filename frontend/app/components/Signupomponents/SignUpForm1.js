"use client"
import React from 'react'
import Link from "next/link";
import NavButtons from './NavButtons';
import { scrollLeft } from '@/helpers/scrole';
import { scrollRight } from '@/helpers/scrole';

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

            <div className=" flex justify-between gap-1">
                <button
                    className="w-full text-[#054BB4] border-2  border-[#054BB4] border-[#054BB4 py-2 rounded-md hover:bg-gray-300 transition flex gap-2 justify-center"
                    onClick={()=>{scrollLeft(ref,0)}}
                >
                    <div className="w-6 px-1 rounded-full border-2 border-[#054BB4] flex items-center justify-center">
                        <svg className="rotate-180 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#054BB4" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </div>
                    Précédent
                </button>
                <button
                    className="w-full text-white bg-[#054BB4] border-[#054BB4 py-2 rounded-md hover:bg-gray-300 transition flex gap-2 justify-center"
                    onClick={()=>{scrollRight(ref,0)}}
                >
                    Suivant
                    <div className="w-6 px-1 rounded-full border-2 border-[#ffffff] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </div>
                </button>
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