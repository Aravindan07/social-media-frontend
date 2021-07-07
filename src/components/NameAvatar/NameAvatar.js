import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function NameAvatar({ name, width, height }) {
	const color = useColorModeValue("#fff", "#fff");

	const nameAvatar = name && name.split(" ");
	const result = nameAvatar && nameAvatar.map((el) => el[0]).join("");
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="#BF1773"
			borderRadius="full"
			color={color}
			fontSize="lg"
			width={width ? width : "40px"}
			height={height ? height : "40px"}
		>
			{result}
		</Box>
	);
}

export default NameAvatar;
