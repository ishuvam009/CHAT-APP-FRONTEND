import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";



const Home = () => {
	return (
		<div className='flex h-96 bg-gray-100 rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
			<Sidebar />
			{/* <MessageContainer /> */}
		</div>
	);
};
export default Home;