import { useRef, useEffect } from "react";

const TopButton = () => {
	const ref = useRef(null);

	useEffect(() => {
		//Runs only on the first render
		const mybutton = document.getElementById("myBtn");
		const mybutton2 = ref.current;
	}, []);

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
			ref.current.style.display = "block";
		} else {
			ref.current.style.display = "none";
		}
	};

	// When the user clicks on the button, scroll to the top of the document
	const topFunction = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};
	return (
		<div>
			<button
				ref={ref}
				type="button"
				id="myBtn"
				className="btn btn-outline-info"
				onClick={() => topFunction()}
				title="Go to top"
			>
				TOP
			</button>
			{window.onscroll}
		</div>
	);
};

export default TopButton;
