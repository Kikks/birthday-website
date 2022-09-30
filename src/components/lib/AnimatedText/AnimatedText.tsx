import { AnimatePresence, motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

const Text = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 5
		}
	},
	exit: {
		opacity: 0
	}
};

const AnimatedText: FC<
	PropsWithChildren<{
		visible: boolean;
		className?: string;
	}>
> = ({ visible, className, children }) => {
	return (
		<AnimatePresence mode='wait'>
			{visible && (
				<motion.span
					key='child'
					variants={Text}
					initial='initial'
					animate='animate'
					exit='exit'
					className={className}
				>
					{children}
				</motion.span>
			)}
		</AnimatePresence>
	);
};

export default AnimatedText;
