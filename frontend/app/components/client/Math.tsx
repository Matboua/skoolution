// Start Health Icons

// End Health Icons

import { faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	ICertificatePaperOutline,
	IExamMultipleChoiceOutline,
	IExamQualificationOutline,
} from "healthicons-react";
import { Brain } from "lucide-react";
import Link from "next/link";

export default function Math() {
	return (
		<section className="px-0 md:px-5 py-5 flex flex-col gap-6">
			{/* Title + Cards */}
			<div className="flex flex-col gap-6">
				{/* Titles */}
				<div className="flex flex-col gap-1.5">
					<h1 className="flex gap-1 font-bold text-3xl">
						Mathématiques{" "}
						<FontAwesomeIcon icon={faSquareRootVariable} className="w-8" />
					</h1>
					<p className="text-neutral-500 text-[13px] sm:text-sm">
						Défie-toi avec des exercices et des quiz adaptés.
					</p>
				</div>
				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Card One */}
					<Link
						href={`/subjects/math/competences`}
						className="flex flex-col flex-grow-1 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-xs overflow-hidden"
					>
						<div className="bg-white flex justify-center items-center h-[160px]">
							<Brain size={90} strokeWidth={1.5} className="text-[#007655]" />
						</div>
						<div className="bg-[#007655] text-white p-3 py-5 flex flex-col gap-0.5">
							<h3 className="font-semibold">Competences</h3>
							<p className="text-sm text-neutral-200">52 Competence</p>
						</div>
					</Link>
					{/* Card Two */}
					<Link
						href={`/subjects/math/lessons`}
						className="flex flex-col flex-grow-1 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-xs overflow-hidden"
					>
						<div className="bg-white flex justify-center items-center h-[160px]">
							<IExamMultipleChoiceOutline
								width={90}
								height={90}
								className="text-[#4000A6]"
							/>
						</div>
						<div className="bg-[#4000A6] text-white p-3 py-5 flex flex-col gap-0.5">
							<h3 className="font-semibold">Leçons</h3>
							<p className="text-sm text-neutral-200">12 Leçon</p>
						</div>
					</Link>
					{/* Card Three */}
					<Link
						href={`#`}
						className="flex flex-col flex-grow-1 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-xs overflow-hidden"
					>
						<div className="bg-white flex justify-center items-center h-[160px]">
							<IExamQualificationOutline
								width={90}
								height={90}
								className="text-[#455A64]"
							/>
						</div>
						<div className="bg-[#455A64] text-white p-3 py-5 flex flex-col gap-0.5">
							<h3 className="font-semibold">Contrôles S1</h3>
							<p className="text-sm text-neutral-200">18 Contrôle</p>
						</div>
					</Link>
					{/* Card Four */}
					<Link
						href={`#`}
						className="flex flex-col flex-grow-1 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-xs overflow-hidden"
					>
						<div className="bg-white flex justify-center items-center h-[160px]">
							<IExamQualificationOutline
								width={90}
								height={90}
								className="text-[#273B45]"
							/>
						</div>
						<div className="bg-[#273B45] text-white p-3 py-5 flex flex-col gap-0.5">
							<h3 className="font-semibold">Contrôles S2</h3>
							<p className="text-sm text-neutral-200">18 Contrôle</p>
						</div>
					</Link>
					{/* Card Five */}
					<Link
						href={`#`}
						className="flex flex-col flex-grow-1 shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)] rounded-xs overflow-hidden"
					>
						<div className="bg-white flex justify-center items-center h-[160px]">
							<ICertificatePaperOutline
								width={90}
								height={90}
								className="text-[#306D8B]"
							/>
						</div>
						<div className="bg-[#306D8B] text-white p-3 py-5 flex flex-col gap-0.5">
							<h3 className="font-semibold">Examens national</h3>
							<p className="text-sm text-neutral-200">25 Examen</p>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
