"use client";
import React from 'react';
import { useForm } from "react-hook-form";
import { useStepStore } from '../../../stateManagment/stepStor';
import { useSignUpStore} from "../../../stateManagment/signupStor"

const SignUpForm1 = () => {
    const { counter } = useStepStore();
    const {clearError,Errors,setError }= useSignUpStore()

    const {
        register,
        formState: { errors },
        trigger,
        getFieldState
    } = useForm();

    const handleTelephoneBlur = async () => {
        const isValid = await trigger("telephone");
        const fieldState = getFieldState("telephone");
        if (!isValid && fieldState.error?.message) {
            setError("telephone", fieldState.error.message);
        } else {
            clearError("telephone");
        }
    };

    return (
        <form className="relative w-full h-fit overflow-hidden">
            <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${counter * 33.35}%)`, width: '300%' }}
            >
                {/* Step 1 */}
                <div className="w-full">
                    <div className="space-y-4 mt-5">
                        <div className="relative">
                            <p className="ml-5 text-gray-500">Nom complet</p>
                            <input
                                {...register("nom", { required: "Nom complet est requis" })}
                                onBlur={() => trigger("nom")}
                                placeholder="Ecrivez votre Nom..."
                                className={`w-full border py-2 px-3 focus:outline-none focus:ring-2 ${errors.nom ? "ring-red-500" : "ring-blue-500"
                                    } pl-12`}
                            />
                            {errors.nom && <p className="text-red-500 text-sm ml-5">{errors.nom.message}</p>}
                        </div>

                        <div className="relative">
                            <p className="ml-5 text-gray-500">Numéro de téléphone</p>
                            <input
                                {...register("telephone", {
                                    required: "Numéro requis",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Numéro invalide",
                                    },
                                })}
                                onBlur={() => handleTelephoneBlur()}
                                placeholder="Ecrivez votre numéro..."
                                className={`w-full border py-2 px-3 focus:outline-none focus:ring-2 ${errors.telephone ? "ring-red-500" : "ring-blue-500"
                                    } pl-12`}
                            />
                            {errors.telephone && <p className="text-red-500 text-sm ml-5">{errors.telephone.message}</p>}
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="w-full">
                    <div className="space-y-4 mt-5">
                        <div className="relative">
                            <p className="ml-5 text-gray-500">Lycée</p>
                            <select
                                {...register("lycee", { required: "Lycée est requis" })}
                                onBlur={() => trigger("lycee")}
                                className={`w-full border py-2 px-3 focus:outline-none focus:ring-2 ${errors.lycee ? "ring-red-500" : "ring-blue-500"
                                    } pl-12 appearance-none`}
                            >
                                <option value="">-- Sélectionnez --</option>
                                <option value="lycee1">Lycée 1</option>
                                <option value="lycee2">Lycée 2</option>
                            </select>
                            {errors.lycee && <p className="text-red-500 text-sm ml-5">{errors.lycee.message}</p>}
                        </div>

                        <div className="relative">
                            <p className="ml-5 text-gray-500">Niveau</p>
                            <select
                                {...register("niveau", { required: "Niveau est requis" })}
                                onBlur={() => trigger("niveau")}
                                className={`w-full border py-2 px-3 focus:outline-none focus:ring-2 ${errors.niveau ? "ring-red-500" : "ring-blue-500"
                                    } pl-12 appearance-none`}
                            >
                                <option value="">-- Sélectionnez --</option>
                                <option value="niveau1">Niveau 1</option>
                                <option value="niveau2">Niveau 2</option>
                            </select>
                            {errors.niveau && <p className="text-red-500 text-sm ml-5">{errors.niveau.message}</p>}
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="w-full">
                    <div className="space-y-4 mt-5">
                        <div className="relative">
                            <p className="ml-5 text-gray-500">Adresse email</p>
                            <input
                                {...register("email", {
                                    required: "Email requis",
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                                        message: "Email invalide",
                                    },
                                })}
                                onBlur={() => trigger("email")}
                                placeholder="Ecrivez votre adresse email..."
                                className={`w-full border py-2 px-3 focus:outline-none focus:ring-2 ${errors.email ? "ring-red-500" : "ring-blue-500"
                                    } pl-12`}
                            />
                            {errors.email && <p className="text-red-500 text-sm ml-5">{errors.email.message}</p>}
                        </div>

                        <div className="relative">
                            <p className="ml-5 text-gray-500">Mot de passe</p>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Mot de passe requis",
                                    minLength: { value: 6, message: "Au moins 6 caractères" },
                                })}
                                onBlur={() => trigger("password")}
                                placeholder="Ecrivez votre mot de passe"
                                className={`w-full border py-2 px-3 focus:outline-none focus:ring-2 ${errors.password ? "ring-red-500" : "ring-blue-500"
                                    } pl-12`}
                            />
                            {errors.password && <p className="text-red-500 text-sm ml-5">{errors.password.message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm1;
