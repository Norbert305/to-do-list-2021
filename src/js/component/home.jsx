import React from "react";
import { MyList } from "./list";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5 box">
			<h5>MyList</h5> <MyList />
		</div>
	);
};

export default Home;
