import { Spinner } from "@chakra-ui/react";
import "./loader.css";

function Loader({ page }) {
	return (
		<div className={`${page === "login" ? "loader-div-login" : "loader-div"}`}>
			<Spinner thickness="3px" speed="0.65s" emptyColor="#6e767d" color="#17bf63" size="xl" />
		</div>
	);
}

export default Loader;
