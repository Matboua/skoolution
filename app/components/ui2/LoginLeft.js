import Image from 'next/image';

export default function LoginForm() {
  return (
    <div className="w-full max-w-md mx-auto p-4 md:p-1 mt-30">
     <h1 className="sm:text-6xl md:text-7xl g:text-10xl text-5xl font-bold mb-2 whitespace-nowrap
      text-center md:text-left md:mr-0 ">Se Connecter</h1>
      <p className="text-sm mb-6 text-center md:text-left mt-5 pt-5 text-gray-500  ">Veuillez entrer vos informations!</p>

      <form className="space-y-4 mt-5">
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
            type="email"
            placeholder=" | Ecrivez votre email ici..."
            className="w-full border  py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
          />
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
            placeholder="| Ecrivez votre mot de passe ici..."
            className="w-full border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-12"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 rounded accent-blue-500" />
            <span className="text-gray-500">Se souvenir de moi</span>
          </label>
          <a href="#" className="text-blue-600 hover:underline">Mot de passe oublié ?</a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0047BA] text-white py-2 rounded-md hover:bg-gray-300 transition"
        >
          Se Connecter
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">Ou</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex justify-center space-x-4">
            <button className=" hover:bg-gray-100">
              <Image src="/sk/Group 1000004178.svg" alt="google"  width={24}
  height={24} className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl" />
            </button>
            <button className=" hover:bg-gray-100">
            <Image src="/sk/Group 1000004177.svg" alt="FACEBOOK"  width={24}
  height={24} className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl" />
            </button>
            <button className=" hover:bg-gray-100">
            <Image src="/sk/Group 1000004179.svg" alt="tiktok"  width={24}
  height={24} className="w-20 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:rounded-xl"/>
            </button>
          </div>
        <p className="text-center text-sm mt-6 text-gray-500">
          Avez-vous déjà un compte ?{' '}
          <a href="#" className="text-blue-600 hover:underline">Cliquez ici!</a>
        </p>
      </form>
    </div>
  );
}

