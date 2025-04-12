export default function OffreSK() {
	return (
		<section
			className="
			w-full px-5 py-10 xl:px-0 lg:w-11/12 xl:w-10/12 max-w-[1260px]  flex flex-col-reverse gap-3 sm:gap-10 md:gap-24 sm:flex-row 
			justify-center sm:justify-between items-center"
		>
			{/* Left Section */}
			<div className="sm:w-1/2 flex flex-col jutify-center gap-5 sm:gap-3 md:gap-6 lg:gap-16">
				<h2 className="text-4xl md:text-5xl font-bold flex flex-col gap-2">
					<p className="text-nowrap">Ce que vous offre</p>
					<p className="text-skblue">Skoolution</p>
				</h2>
				<p className="text-skblack-second leading-7">
					Skoolution vous offre un tableau de bord personnalisé, des tests
					interactifs en cours et des rapports de progression détaillés pour un
					suivi optimal.
				</p>
			</div>
			{/* Right Section */}
			<div className="w-full min-[500px]:w-2/3 sm:w-1/2  flex flex-row-reverse justify-center sm:justify-start">
				<img src="/SK/student_3.png" alt="Student" className="w-full" />
			</div>
		</section>
	);
}
