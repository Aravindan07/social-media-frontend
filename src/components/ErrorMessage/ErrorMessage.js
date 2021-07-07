import { AlertIcon } from "@chakra-ui/alert";
import { AlertDescription } from "@chakra-ui/alert";
import { Alert } from "@chakra-ui/alert";
import { Box } from "@chakra-ui/layout";
import React from "react";

function ErrorMessage({ message }) {
	return (
		<Box my={4}>
			<Alert status="error" borderRadius={4}>
				<AlertIcon />
				<AlertDescription>{message}</AlertDescription>
			</Alert>
		</Box>
	);
}

export default ErrorMessage;
