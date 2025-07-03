"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { useRef } from 'react';
import { useStepStore } from '../../../stateManagment/stepStor';

const SignUpForm1 = () => {
    const containerRef = useRef(null);
    const {counter} = useStepStore()
    console.log(counter);
    
    return (
        <form ref={containerRef}
            className="relative w-full h-fit overflow-hidden">
            <div className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${(counter ) * 33}%)`, width: '300%' }}>
                <div className='w-full'>
                    <div className="space-y-4 mt-5 ">
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
                    </div>
                </div>
                <div className='w-full'>
                    <div className="space-y-4 mt-5 ">
                        <div className=" relative">
                            <p className="ml-5 text-gray-500"> Lycée</p>
                            <select
                                className='w-full border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12 appearance-none'
                            >
                                <option value="lycee1">Lycée 1</option>
                                <option value="lycee2">Lycée 2</option>
                                <option value="lycee3">Lycée 3</option>
                                <option value="lycee4">Lycée 4</option>
                                <option value="lycee5">Lycée 5</option>
                                <option value="lycee6">Lycée 6</option>
                            </select>
                            <div className='absolute right-4 top-[60%]'>
                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M12.7369 1H2.26307C1.73438 1 1.42685 1.59759 1.73415 2.02781L6.97107 9.3595C7.23031 9.72243 7.76969 9.72243 8.02893 9.3595L13.2659 2.0278C13.5731 1.59759 13.2656 1 12.7369 1Z" fill="#878787" stroke="#878787" strokeWidth="1.3" />
                                </svg>
                            </div>

                        </div>

                        <div className="relative">
                            <p className="ml-5 text-gray-500">Niveau</p>
                            <select
                                className='w-full border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12 appearance-none'
                            >
                                {/* <option value="" disabled selected> Sélectionnez votre Niveau </option> */}
                                <option value="lycee1">Niveau 1</option>
                                <option value="lycee2">Niveau 2</option>
                                <option value="lycee3">Niveau 3</option>
                                <option value="lycee4">Niveau 4</option>
                                <option value="lycee5">Niveau 5</option>
                                <option value="lycee6">Niveau 6</option>
                            </select>
                            <div className='absolute right-4 top-[60%]'>
                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M12.7369 1H2.26307C1.73438 1 1.42685 1.59759 1.73415 2.02781L6.97107 9.3595C7.23031 9.72243 7.76969 9.72243 8.02893 9.3595L13.2659 2.0278C13.5731 1.59759 13.2656 1 12.7369 1Z" fill="#878787" stroke="#878787" strokeWidth="1.3" />
                                </svg>
                            </div>
                        </div>



                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-gray-300" />
                            <span className="px-2 text-gray-500 text-sm">Ou</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                    </div>
                </div>
                <div className='w-full'>
                    <div className="space-y-4 mt-5 ">
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

                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm1