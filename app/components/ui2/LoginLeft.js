import Image from 'next/image';

export default function LoginForm() {
    return (
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-6">
        <div>
          <h1 className="text-5xl font-bold text-center md:text-left">Se Connecter</h1>
          <p className="text-sm mt-4 mb-6 text-center md:text-left text-gray-500">
            Veuillez entrer vos informations!
          </p>
  
          <form className="space-y-4">
            {/* email */}
            <div className="relative">
              <p className="ml-5 text-gray-500">Adresse email</p>
              <Image src="/sk/Vector.svg" alt="email" width={24} height={24} className="absolute ml-5 mt-3  w-6" />
              <input
                type="email"
                placeholder="| Ecrivez votre email ici..."
                className="w-full border py-2 px-3 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* password */}
            <div className="relative">
              <p className="ml-5 text-gray-500">Mot de passe</p>
              <Image src="/sk/Vector2.svg" alt="password" width={24} height={24} className="absolute ml-5 mt-2 w-[20px]" />
              <input
                type="password"
                placeholder="| Ecrivez votre mot de passe ici..."
                className="w-full border py-2 px-3 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 rounded accent-blue-500" />
                <span className="text-gray-500">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">Mot de passe oublié ?</a>
            </div>
  
            <button type="submit" className="w-full bg-[#0047BA] text-white py-2 rounded-md hover:bg-gray-300 transition">
              Se Connecter
            </button>
          </form>
        </div>
           {/* social loginn */}
        {/* social login */}
        <div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">Ou</span>
            <hr className="flex-grow border-gray-300" />
          </div>
  
          <div className="flex justify-center space-x-4 mb-4">
            <Image src="/sk/Group 1000004178.svg" alt="google" width={40} height={40} className="hover:scale-105 transition" />
            <Image src="/sk/Group 1000004177.svg" alt="facebook" width={40} height={40} className="hover:scale-105 transition" />
            <Image src="/sk/Group 1000004179.svg" alt="tiktok" width={40} height={40} className="hover:scale-105 transition" />
          </div>
  
          <p className="text-center text-sm text-gray-500">
            Vous n'avez pas de compte ? <a href="#" className="text-blue-600 hover:underline">Cliquez ici!</a>
          </p>
        </div>
      </div>
    );
  }
  