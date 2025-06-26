"use client"
import React from 'react'
import Link from "next/link";
import NavButtons from './NavButtons';

const SignUpForm2 = () => {
    return (
        <form className="space-y-4 mt-5">
            <div className=" relative">
                <p className="ml-5 text-gray-500"> Lycée</p>
                <select
                    className='w-full border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12 appearance-none'
                >
                    <option value="" disabled selected>Sélectionnez votre lycée</option>
                    <option value="lycee1">Lycée 1</option>
                    <option value="lycee2">Lycée 2</option>
                    <option value="lycee3">Lycée 3</option>
                    <option value="lycee4">Lycée 4</option>
                    <option value="lycee5">Lycée 5</option>
                    <option value="lycee6">Lycée 6</option>
                </select>
                <div className='absolute right-4 top-[60%]'>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M12.7369 1H2.26307C1.73438 1 1.42685 1.59759 1.73415 2.02781L6.97107 9.3595C7.23031 9.72243 7.76969 9.72243 8.02893 9.3595L13.2659 2.0278C13.5731 1.59759 13.2656 1 12.7369 1Z" fill="#878787" stroke="#878787" stroke-width="1.3" />
                    </svg>
                </div>

            </div>

            <div className="relative">
                <p className="ml-5 text-gray-500">Niveau</p>
                <select
                    className='w-full border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12 appearance-none'
                    placeholder="Sélectionnez votre lycée"
                >
                    <option value="" disabled selected> Sélectionnez votre Niveau </option>
                    <option value="lycee1">Niveau 1</option>
                    <option value="lycee2">Niveau 2</option>
                    <option value="lycee3">Niveau 3</option>
                    <option value="lycee4">Niveau 4</option>
                    <option value="lycee5">Niveau 5</option>
                    <option value="lycee6">Niveau 6</option>
                </select>
                <div className='absolute right-4 top-[60%]'>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M12.7369 1H2.26307C1.73438 1 1.42685 1.59759 1.73415 2.02781L6.97107 9.3595C7.23031 9.72243 7.76969 9.72243 8.02893 9.3595L13.2659 2.0278C13.5731 1.59759 13.2656 1 12.7369 1Z" fill="#878787" stroke="#878787" stroke-width="1.3" />
                    </svg>
                </div>
            </div>

            <div className=" flex justify-between gap-1">
                <button
                    className="w-full text-[#054BB4] border-2  border-[#054BB4] border-[#054BB4 py-2 rounded-md hover:bg-gray-300 transition flex gap-2 justify-center"
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
            <NavButtons />
            <p className="text-center text-sm mt-6 text-gray-500">
                Avez-vous déjà un compte ?{" "}
                <Link href="register" className="text-blue-600 hover:underline">
                    Cliquez ici!
                </Link>
            </p>
        </form>
    )
}

export default SignUpForm2