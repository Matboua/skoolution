"use client"
import React from 'react'
import bgImage from "@/public/assets/signInImage2.png";


const SignUpLeft = () => {
    return (
        <>
            <div className="md:w-1/2 h-64 md:h-auto bg-blue-800 flex flex-col justify-center relative text-2xl bg-center bg-cover "
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                {/* Bienvenue */}
                <p
                    className="text-white mt-10 md:mt-30 max-auto md:ml-[130px] text-2xl leading-[normal]
        flex flex-col justify-between md:mb-30 font-min text-center md:text-left 
          font-extralight"
                >
                    Bienvenue à
                </p>

                {/* SKOOLUTION */}
                <div
                    className="flex items-center font-bold text-[30px] sm:text-[40px] md:text-[50px] mx-auto md:ml-[130px]
          md:w-auto mt-10 sm:mt-5 md:mt-20 text-center md:text-left ml-22  "
                >
                    <span className="bg-white text-blue-800 px-2">SK</span>
                    <span className="text-white ml-0.5">OOLUTION</span>
                </div>

                {/* La plateforme d'éducation */}
                <p
                    className=" whitespace-nowrap text-xs text-white mb-17 w-1/5 
         mr-53 sm:mt-4 md:mb-100 mx-auto md:ml-[130px] text-center md:text-left font-extralight"
                >
                    La plateforme d’éducation n°1 au Maroc.
                </p>
            </div>
        </>
    )
}

export default SignUpLeft