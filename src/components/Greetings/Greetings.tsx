import GreeitngCard from "./GreeitngCard";

const Greetings = () => {
	return (
		<section className='mt-16 w-full'>
			<div className='container mx-auto w-full p-5 md:p-10'>
				<div className='grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-10'>
					<GreeitngCard
						index={0}
						message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt modi iusto ducimus, laborum recusandae eaque. Nihil reprehenderit adipisci ratione consectetur, iure voluptatum vero iste unde dignissimos, non accusamus consequuntur voluptate!'
						name='John Doe'
					/>

					<GreeitngCard
						index={1}
						message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt modi iusto ducimus, laborum recusandae eaque. Nihil reprehenderit adipisci ratione consectetur, iure voluptatum vero iste unde dignissimos, non accusamus consequuntur voluptate!'
						name='John Doe'
					/>

					<GreeitngCard
						index={2}
						message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis harum facere aspernatur eum officia modi temporibus deserunt blanditiis est!'
						name='John Doe'
					/>

					<GreeitngCard
						index={3}
						message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt modi iusto ducimus, laborum recusandae eaque. Nihil reprehenderit adipisci ratione consectetur, iure voluptatum vero iste unde dignissimos, non accusamus consequuntur voluptate!'
						name='John Doe'
					/>

					<GreeitngCard
						index={4}
						message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis harum facere aspernatur eum officia modi temporibus deserunt blanditiis est!'
						name='John Doe'
					/>

					<GreeitngCard
						index={5}
						message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis harum facere aspernatur eum officia modi temporibus deserunt blanditiis est!'
						name='John Doe'
					/>
					<GreeitngCard
						index={6}
						message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt modi iusto ducimus, laborum recusandae eaque. Nihil reprehenderit adipisci ratione consectetur, iure voluptatum vero iste unde dignissimos, non accusamus consequuntur voluptate!'
						name='John Doe'
					/>
					<GreeitngCard
						index={7}
						message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt modi iusto ducimus, laborum recusandae eaque. Nihil reprehenderit adipisci ratione consectetur, iure voluptatum vero iste unde dignissimos, non accusamus consequuntur voluptate!'
						name='John Doe'
					/>

					<GreeitngCard
						index={8}
						message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis harum facere aspernatur eum officia modi temporibus deserunt blanditiis est!'
						name='John Doe'
					/>

					<GreeitngCard
						index={9}
						message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis harum facere aspernatur eum officia modi temporibus deserunt blanditiis est!'
						name='John Doe'
					/>
					<GreeitngCard
						index={10}
						message='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt modi iusto ducimus, laborum recusandae eaque. Nihil reprehenderit adipisci ratione consectetur, iure voluptatum vero iste unde dignissimos, non accusamus consequuntur voluptate!'
						name='John Doe'
					/>

					<GreeitngCard
						index={11}
						message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis harum facere aspernatur eum officia modi temporibus deserunt blanditiis est!'
						name='John Doe'
					/>
				</div>
			</div>
		</section>
	);
};

export default Greetings;
