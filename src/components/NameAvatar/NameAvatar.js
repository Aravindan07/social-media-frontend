import { Box } from "@chakra-ui/react";
import React from "react";

function NameAvatar({ name, width, height }) {
	const nameAvatar = name && name.split(" ");
	const result = nameAvatar && nameAvatar.map((el) => el[0]).join("");
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="#BF1773"
			borderRadius="full"
			fontSize="lg"
			width={width ? width : "40px"}
			height={height ? height : "40px"}
		>
			{result}
		</Box>
	);
}

export default NameAvatar;
