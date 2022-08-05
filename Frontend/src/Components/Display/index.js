import React from "react";

const Display = ({array}) => {
	return (
		<div className="display-container">
			{array.map((object) => (
				<div className="display-card">
					<h3>Date:</h3>
					<p>{object.date}</p>
					<h3>Time:</h3>
					<p>{object.time}</p>
					<h3>Location</h3>
					<p>Latitude: {object.lat}</p>
					<p>Longitude: {object.long}</p>
					<h3>Description:</h3>
					<p>{object.description}</p>
				</div>
            ))}
		</div>
	);
};

export default Display;
