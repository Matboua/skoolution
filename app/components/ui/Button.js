export default function Button({ text, color, bg, href, addStyle }) {
	return (
		<div>
			<a
				href={href}
				className={`flex justify-center items-center text-base ${color} ${bg} px-5 sm:px-7 lg:px-3 xl:px-7 h-[40px] font-semibold text-nowrap rounded-xs ${addStyle}`}
			>
				{text}
			</a>
		</div>
	);
}
