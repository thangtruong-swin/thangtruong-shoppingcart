import { useEffect } from "react";

function TopButton() {
	var mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = () => {
		ScrollFunction();
	};

	const ScrollFunction = () => {
		console.log("Body: " + document.documentElement.scrollTop);
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	};

	// When the user clicks on the button, scroll to the top of the document
	const topFunction = () => {
		// alert("You Clicked");
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	return (
		<div>
			<button
				type="button"
				className="btn btn-outline-info"
				onClick={() => topFunction()}
				id="myBtn"
				title="Go to top"
			>
				TOP
			</button>
		</div>
	);
}

export default TopButton;
