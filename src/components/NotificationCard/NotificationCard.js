import { Avatar, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

function NotificationCard() {
	return (
		<Link to={`/@aravind33`}>
			<Flex p={4} alignItems="center">
				<Icon as={HiOutlineUser} fill="blue.400" stroke="blue.400" mr={6} />
				<Avatar size="sm" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
				<Text fontWeight="bold" ml={4}>
					Ryan Florence
					<span style={{ fontWeight: "normal", color: "#6e767d" }}> followed you</span>
				</Text>
			</Flex>
			<Divider color="#6e767d" />
		</Link>
	);
}

export default NotificationCard;
