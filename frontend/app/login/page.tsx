import bgImage from "../../public/assets/signInImage1.png";
import LogInForm from "../components/login/logInForm";
import { useForm } from "react-hook-form";

export default function LoginPage() {
	return (
		<div className="min-h-screen flex flex-col md:flex-row h-screen">
			{/* Login Form */}
			<div className="md:w-1/2 h-64 md:h-auto bg-blue-800 flex flex-col justify-center relative text-2xl bg-center bg-cover "
				style={{ backgroundImage: `url(${bgImage.src})` }}
			>
				{/* Bienvenue */}
				<p
					className="text-white mt-10 md:mt-30  max-auto md:ml-[130px] text-2xl leading-[normal]
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
			{/* Login Left */}
			<div className="w-full max-w-md mx-auto p-4 md:p-1 mt-30">
				<h1
					className="sm:text-6xl md:text-7xl g:text-10xl text-5xl font-bold mb-2 whitespace-nowrap
            text-center md:text-left md:mr-0 "
				>
					Se Connecter
				</h1>
				<p className="text-sm mb-6 text-center md:text-left mt-5 pt-5 text-gray-500  ">
					Veuillez entrer vos informations!
				</p>

				<LogInForm />
			</div>
		</div>
	);
}
