import { faSquareRootVariable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Lessons() {
	const testes = [
		{
			href: "/subjects/math/lessons/test1",
			title: "Chapitre 01",
			subtitle: "Test 1",
			degree: 16,
		},
		{
			href: "/subjects/math/lessons/test2",
			title: "Chapitre 02",
			subtitle: "Test 1",
			degree: 0,
		},
		{
			href: "/subjects/math/lessons/test3",
			title: "Chapitre 03",
			subtitle: "Test 1",
			degree: 0,
		},
	];
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
				<div className="grid grid-cols-1 min-[840px]:grid-cols-2 xl:grid-cols-3 gap-8">
					{testes.map((test) => (
						<Link
							key={test.href}
							href={test.href}
							className="flex flex-col min-[465px]:flex-row gap-0 bg-white shadow-[3px_3px_10px_0px_rgba(0,_0,_0,_0.1)]"
						>
							<div className="flex justify-center items-center p-5 bg-skblue/10">
								<FontAwesomeIcon
									icon={faSquareRootVariable}
									className="w-9 text-[#135EA5]"
								/>
							</div>
							<div className="flex flex-col gap-1 p-3 flex-grow-1">
								<p className="font-semibold">{test.title}</p>
								<p className="text-neutral-400 text-xs">{test.subtitle}</p>
								<div>
									<p className="flex justify-end text-xs text-neutral-400">
										{test.degree}/20 Note
									</p>
									<div className="bg-neutral-200 h-3 w-full mt-1">
										<div className="bg-skblue h-3 w-[20%]"></div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
