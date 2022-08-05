import React from "react";
import Popup from "reactjs-popup";
import Button from "../Button";
import Input from "../Input";


const PopUpForm = (dateValue, timeValue, timeOnChange, dateOnChange) => (
  <Popup trigger={<button>Report a Fire</button>} position="top left">
    {close => (
      <div>
        Date: <Input value={dateValue} onChange={dateOnChange} placeholder="date"></Input>
        Time: <Input value={timeValue} onChange={timeOnChange} placeholder="time"></Input>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
);

// const PopUpForm = ({
// 	handleClick,
// 	dateValue,
// 	dateHandleChange,
// 	timeValue,
// 	timeHandleChange,
// }) => (
// 	<Popup trigger={<button> Report a Fire </button>} position="right center">
// 		<div className="popUp-bg">
// 			<div>
			// 	Date:
			// 	<Input
			// 		placeholder={"Date"}
			// 		value={dateValue}
			// 		handleChange={dateHandleChange}
			// 	></Input>
			// </div>
			// <div>
			// 	Time:
			// 	<Input
			// 		placeholder={"Time"}
			// 		value={timeValue}
			// 		handleChange={timeHandleChange}
			// 	></Input>
			// </div>
			// <div>
			// 	<Button handleClick={handleClick} buttonText={"Submit"}></Button>
			// </div>
// 			<a className="close" onClick={close}>
// 				&times;
// 			</a>
// 		</div>
// 	</Popup>
// );

export default PopUpForm;

// // Renders PopupBox for user input, facilitates submission of user input and closing of PopupBox
// const PopupBox = ({
// 	nameValue,
// 	roomValue,
// 	questionValue,
// 	nameHandleChange,
// 	roomHandleChange,
// 	questionHandleChange,
// 	keywordsHandleChange,
// 	buttonHandleClick,
// }) => (
// 	<Popup
// 		trigger={<button className="q-button ask-position">Ask</button>}
// 		position="top left"
// 	>
// 		{(close) => {
// 			function closeAndComplete() {
// 				close();
// 				buttonHandleClick();
// 			}
// 			return (
// 				<div className="popUp-bg">
// 					<div>
// 						Name:
// 						<Input
// 							placeholder={"Name"}
// 							value={nameValue}
// 							handleChange={nameHandleChange}
// 						></Input>
// 					</div>
// 					<div>
// 						Room Number:
// 						<Input
// 							placeholder={"Room number"}
// 							value={roomValue}
// 							handleChange={roomHandleChange}
// 						></Input>
// 					</div>
// 					<div className="w80">
// 						Question:
// 						<Input
// 							placeholder={"Enter question..."}
// 							value={questionValue}
// 							handleChange={questionHandleChange}
// 						></Input>
// 					</div>
// 					<Keywords handleChange={keywordsHandleChange}></Keywords>
// 					<div className="center-row">
// 						<Button
// 							handleClick={closeAndComplete}
// 							buttonText={"Submit"}
// 						></Button>
// 					</div>
// 					<a className="close closeBtn" onClick={close}>
// 						&times;
// 					</a>
// 				</div>
// 			);
// 		}}
// 	</Popup>
// );

// export default PopupBox;

// //created with: https://react-popup.elazizi.com/getting-started
