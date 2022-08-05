import React from "react";

const Display = ({array}) => {
	return (
		<div className="display-container">
			{array.map((object) => (
				<div className="display-card">
					<div className="date-time">
						<h3>Date:</h3>
						<p>{object.date}</p>
						<h3>Time:</h3>
						<p>{object.time}</p>
					</div>
					<div className="location">
						<h3>Location</h3>
						<div className="lat-long">
							<p>Latitude: {object.lat}</p>
							<p>Longitude: {object.long}</p>
						</div>
					</div>
					<div className="description">
						<h3>Description:</h3>
						<p>{object.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Display;
