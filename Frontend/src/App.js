import "./App.css";
import Input from "./Components/Input";
import { useState, useEffect } from "react";
import Button from "./Components/Button";
import TextArea from "./Components/TextArea";
import Display from "./Components/Display";

function App() {
	const [dateValue, setDateValue] = useState("");
	const [timeValue, setTimeValue] = useState("");
	const [location, setLocation] = useState("");
	const [lat, setLat] = useState("");
	const [long, setLong] = useState("");
	const [descriptionValue, setDescriptionValue] = useState("");
	const [backendData, setBackendData] = useState([]);
	const [stateCount, setStateCount] = useState(0);

	function dateOnChange(e) {
		setDateValue(e.target.value);
	}

	function timeOnChange(e) {
		setTimeValue(e.target.value);
	}

	function descriptionOnChange(e) {
		setDescriptionValue(e.target.value);
	}

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			setLocation("Geolocation is not supported by this browser.");
		}
		console.log(location);
	}

	function showPosition(position) {
		setLat(position.coords.latitude);
		setLong(position.coords.longitude);
	}

	useEffect(() => {
		fetch(`http://localhost:3001/fires`)
			.then((res) => res.json())
			.then((data) => {
				setBackendData(data);
			});
	}, []);

	const fireData = {
		date: dateValue,
		time: timeValue,
		lat: lat,
		long: long,
		description: descriptionValue,
	};

	async function onClick() {
		fetch(`http://localhost:3001/fires`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(fireData),
		}).then(() => {
			setStateCount((c) => c + 1);
		});
		setDateValue("");
		setTimeValue("");
		setDescriptionValue("");
	}

	useEffect(() => {
		fetch(`http://localhost:3001/fires`)
			.then((res) => res.json())
			.then((data) => {
				setBackendData(data);
			});
	}, [stateCount]);

	getLocation();
	console.log(backendData);

	return (
		<div className="App">
			<h1>Moors Fires</h1>
			<h2>Tracking fires in the Moors</h2>
			<p className="input-title">Date:</p>
			<Input
				value={dateValue}
				onChange={dateOnChange}
				placeholder="Date"
			></Input>
			<p className="input-title">Time:</p>
			<Input
				value={timeValue}
				onChange={timeOnChange}
				placeholder="Time"
			></Input>
			<p className="input-title">Description:</p>
			<TextArea
				descriptionValue={descriptionValue}
				descriptionOnChange={descriptionOnChange}
			/>
			<Button text="Report a Fire" onClick={onClick}></Button>
			<Display array={backendData} />
		</div>
	);
}

export default App;
