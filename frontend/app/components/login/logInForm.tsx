"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as ReactHookForm from 'react-hook-form';
import { login } from '../../../actions/login';
import { useState } from 'react';
import { setToken } from '../../../helpers/HadelToken';
import { LogInFormData }  from '../../../types/formDatas';

const { useForm } = ReactHookForm;

const LogInForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LogInFormData>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const submith = async (Info: LogInFormData) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await login(Info.email, Info.password);
            await setToken(response?.token);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error?.response.data.error);
            setError(error?.response.data.error || "Une erreur s'est produite lors de la connexion.");
        }
    }
    return (
        <>
            <form className="space-y-4 mt-5" onSubmit={handleSubmit(submith)} >
                <div className=" relative">
                    <p className="ml-5 text-gray-500"> adresse email</p>
                    <Image
                        src="/sk/Vector.svg"
                        alt="email"
                        width={24}
                        height={24}
                        className="absolute ml-5 mt-3 "
                    />
                    <input
                        {...register("email", {
                            required: "L'email est requis",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Format d'email invalide"
                            }
                        })}
                        type="email"
                        placeholder=" | Ecrivez votre email ici..."
                        className="w-full border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                    />
                    <p className='text-red-500 text-xl text-center'>{errors.email?.message}</p>

                </div>

                <div className="relative">
                    <p className="ml-5 text-gray-500">Mot de passe</p>
                    <Image
                        src="/sk/Vector2.svg"
                        alt="password"
                        width={24}
                        height={24}
                        className="absolute ml-5 mt-2 w-5"
                    />
                    <input
                        type="password"
                        {...register("password", {
                            required: "Le mot de passe est requis",
                            minLength: {
                                value: 6,
                                message: "Le mot de passe doit comporter au moins 6 caractères"
                            },
                            maxLength: {
                                value: 20,
                                message: "Le mot de passe ne doit pas dépasser 20 caractères"
                            },
                        })}
                        placeholder="| Ecrivez votre mot de passe ici..."
                        className="w-full border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
                    />
                    <p className='text-red-500 text-xl text-center'>{errors.password?.message}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2 rounded accent-blue-500" />
                        <span className="text-gray-500">Se souvenir de moi</span>
                    </label>
                    <a href="#" className="text-blue-600 hover:underline">
                        Mot de passe oublié ?
                    </a>
                </div>
                {error && (
                    <div className="mt-4 text-red-500 text-center">
                        {error}
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full bg-[#0047BA] text-white py-2 rounded-md hover:bg-gray-300 transition"
                >
                    {isLoading ? (
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-loader-circle-icon lucide-loader-circle animate-spin mx-auto">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>


                    ) : "Se Connecter"}
                </button>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">Ou</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <div className="flex justify-center space-x-4">
                    <button className=" hover:bg-gray-100">
                        <Image
                            src="/sk/Group 1000004178.svg"
                            alt="google"
                            width={24}
                            height={24}
                            className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl"
                        />
                    </button>
                    <button className=" hover:bg-gray-100">
                        <Image
                            src="/sk/Group 1000004177.svg"
                            alt="FACEBOOK"
                            width={24}
                            height={24}
                            className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl"
                        />
                    </button>
                    <button className=" hover:bg-gray-100">
                        <Image
                            src="/sk/Group 1000004179.svg"
                            alt="tiktok"
                            width={24}
                            height={24}
                            className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl"
                        />
                    </button>
                </div>
                <p className="text-center text-sm mt-6 text-gray-500">
                    Avez-vous déjà un compte ?{" "}
                    <Link href="signUp" className="text-blue-600 hover:underline">
                        Cliquez ici!
                    </Link>
                </p>
            </form>

        </>
    )
}

export default LogInForm