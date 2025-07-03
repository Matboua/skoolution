import Lessons from "../../../components/client/Lessons";
import Sidebar from "../../../components/client/Sidebar";
import Header from "../../../components/guest/Header";

export default function page() {
	return (
		<section className="flex h-dvh overflow-hidden">
			<Sidebar />
			<section className="flex flex-col w-full py-5 pr-[12px] md:pr-5 pl-[72px] md:pl-5 bg-[#fafafa]  overflow-y-scroll">
				<Header />
				<Lessons />
			</section>
		</section>
	);
}
