import styles from "./Header.module.scss";

import { useEffect, useState } from "react";
import Carousel from "re-carousel";

import AnimatedHeader from "../lib/AnimatedHeader";
import AnimatedText from "../lib/AnimatedText";
import { texts } from "./data";

const IndexTracker = ({
	index,
	setActiveIndex
}: {
	index: number;
	setActiveIndex: (index: number) => void;
}) => {
	useEffect(() => {
		setActiveIndex(index);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

	return <></>;
};

const Header = () => {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<>
			<header className={styles.header}>
				<div className='absolute top-0 left-0 -z-[1] h-full w-full'>
					<Carousel
						auto
						loop
						axis='y'
						interval={10000}
						duration={2000}
						widgets={[
							({ index }) => (
								<IndexTracker index={index} setActiveIndex={setActiveStep} />
							)
						]}
						frames={texts.map(item => item.frame)}
					/>
				</div>

				<div className='container z-20 mx-auto flex h-full w-full flex-col items-start justify-end p-5 py-10 md:justify-center md:p-10'>
					<div className='relative h-20 w-full sm:h-24 lg:h-32'>
						{texts.map((text, index) => (
							<AnimatedHeader
								key={index}
								title={text.title}
								visible={index === activeStep}
								className='inline-block whitespace-nowrap font-chillax text-4xl font-semibold leading-loose text-white drop-shadow-sm sm:text-5xl md:text-7xl lg:text-8xl lg:text-[#222222] '
							/>
						))}
					</div>

					<div className='relative min-h-[200px] w-full max-w-[600px] md:min-h-[150px]'>
						{texts.map((text, index) => (
							<AnimatedText
								key={index}
								visible={index === activeStep}
								className='absolute top-0 left-0 w-full text-white drop-shadow-sm md:text-xl lg:text-lg lg:text-[#222222]'
							>
								{text.subtitle}
							</AnimatedText>
						))}
					</div>
				</div>

				<img
					src='/assets/svg/wave.svg'
					alt=''
					className='undraggable absolute bottom-0 left-0 w-full lg:bottom-[-10%]'
				/>
			</header>
		</>
	);
};

export default Header;
