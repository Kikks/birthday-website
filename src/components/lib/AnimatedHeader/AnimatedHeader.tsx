import { AnimatePresence, motion } from "framer-motion";

const headerVariant = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1
		}
	},
	exit: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1
		}
	}
};

const letterVariant = {
	initial: {
		y: 200,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1
		}
	},
	exit: {
		y: -200,
		opacity: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1
		}
	}
};

const AnimatedHeader = ({
	title,
	visible,
	className
}: {
	title: string;
	visible: boolean;
	className?: string;
}) => {
	return (
		<AnimatePresence>
			{visible && (
				<motion.h1
					key={title}
					variants={headerVariant}
					initial='initial'
					animate='animate'
					exit='exit'
					className={`absolute top-0 left-0 h-full overflow-hidden ${className}`}
				>
					{title.split("").map((letter, index) => (
						<motion.span
							variants={letterVariant}
							key={index}
							className={className}
						>
							{letter === " " ? <>&nbsp;</> : letter}
						</motion.span>
					))}
				</motion.h1>
			)}
		</AnimatePresence>
	);
};

export default AnimatedHeader;
