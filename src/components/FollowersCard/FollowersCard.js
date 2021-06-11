import { Avatar, Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function FollowersCard() {
	let navigate = useNavigate();

	const navigateToProfile = () => {
		return navigate("/@parthasam08");
	};

	return (
		<>
			<Flex
				width="100%"
				cursor="pointer"
				onClick={navigateToProfile}
				p={4}
				// borderBottom="1px solid #6e767d"
			>
				<Box marginRight={4}>
					<Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
				</Box>
				<Box w="100%">
					<Flex justifyContent="space-between">
						<Box>
							<Text>Partha</Text>
							<Text color="#6e767d" mb={3}>
								@parthasam08
							</Text>
						</Box>
						<Button
							variant="outline"
							borderRadius="2xl"
							color="#17bf63"
							borderColor="#17bf63"
							fontWeight="bold"
						>
							Follow
						</Button>
					</Flex>
					<Text>Ordinary Oddball. El Talentino @unacademy</Text>
				</Box>
			</Flex>
			<Divider color="#6e767d" />
		</>
	);
}

export default FollowersCard;
