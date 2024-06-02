import React from "react";
import StarWarsHome from "./StarWarsHome.jsx";
import "../../styles/home.css";

export const Home = () => (
	<>
	    <div style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` 
    }}>
		<StarWarsHome />
		</div>
	</>
);