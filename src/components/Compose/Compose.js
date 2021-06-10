import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";

function Compose() {
	return (
		<VStack
			borderBottom="1px solid rgb(47, 51, 54)"
			minHeight="200px"
			width="100%"
			paddingLeft={4}
			paddingTop={4}
			alignItems="center"
			justifyContent="space-evenly"
		>
			<HStack width="80%" alignSelf="center">
				<Flex alignItems="center" justifyContent="center" marginRight={4}>
					<Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
				</Flex>
				<Textarea
					width="100%"
					size="xl"
					variant="flushed"
					resize="vertical"
					placeholder="What's on your mind?"
					fontSize="lg"
					_focus={{
						borderBottom: "2px solid #17bf63",
					}}
				></Textarea>
			</HStack>
			<Flex width="80%" justifyContent="flex-end">
				<Button
					bg="#17bf63"
					letterSpacing="wide"
					borderRadius="3xl"
					color="white"
					fontWeight="bold"
					fontSize="lg"
					_hover={{
						opacity: 0.8,
					}}
				>
					Tweet
				</Button>
			</Flex>
		</VStack>
	);
}

export default Compose;
