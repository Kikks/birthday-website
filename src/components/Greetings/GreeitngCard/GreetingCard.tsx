const colors = [
	"bg-red-400",
	"bg-cyan-700",
	"bg-amber-600",
	"bg-purple-800",
	"bg-green-800",
	"bg-orange-800",
	"bg-blue-500",
	"bg-emerald-900",
	"bg-fuchsia-500",
	"bg-indigo-800",
	"bg-sky-400",
	"bg-lime-400",
	"bg-amber-900",
	"bg-neutral-900",
	"bg-red-700",
	"bg-slate-600",
	"bg-teal-500",
	"bg-violet-500",
	"bg-yellow-400"
];

const GreetingCard = ({
	message,
	name,
	index
}: {
	message: string;
	name: string;
	index?: number;
}) => {
	return (
		<div className='flex w-full flex-col gap-5 self-stretch rounded-2xl bg-white p-5 shadow-lg md:gap-5'>
			<span className='flex-1 text-xs md:text-sm'>{message}</span>

			<div className='flex items-center gap-2'>
				<div
					className={`flex h-10 w-10 items-center justify-center rounded-full text-sm text-white ${
						colors[index ? index % colors.length : 0]
					}`}
				>
					{name
						.split(" ")
						.splice(0, 2)
						.map(item => item.charAt(0).toUpperCase())}
				</div>
				<span className='font-medium'>{name}</span>
			</div>
		</div>
	);
};

export default GreetingCard;
