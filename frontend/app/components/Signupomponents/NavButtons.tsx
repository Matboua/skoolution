import React from 'react'
import Image from "next/image";

const NavButtons = () => {
    return (
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
    )
}

export default NavButtons