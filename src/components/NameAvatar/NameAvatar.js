import { Box } from "@chakra-ui/react";
import React from "react";

function NameAvatar({ name }) {
	const nameAvatar = name.split(" ");
	const result = nameAvatar.map((el) => el[0]).join("");
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="#BF1773"
			borderRadius="full"
			fontSize="lg"
			minWidth="40px"
			minHeight="40px"
		>
			{result}
		</Box>
	);
}

export default NameAvatar;
