import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import ModalComponent from "../Modal/Modal";

function FollowingDetails() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const userProfile = useSelector((state) => state.userProfile);

	const onOpenHandler = (e) => {
		e.stopPropagation();
		e.preventDefault();
		return onOpen();
	};

	return (
		<Flex>
			<Text
				mr="20px"
				cursor="pointer"
				textDecoration="underline"
				textDecorationColor="#6e767d"
				onClick={(e) => onOpenHandler(e)}
			>
				{userProfile?.profile?.following}
				<span style={{ color: "#6e767d", marginLeft: "3px" }}>Following</span>
			</Text>
			{userProfile?.profile?.following && (
				<ModalComponent
					isOpen={isOpen}
					onClose={onClose}
					type="show-following"
					data={userProfile?.following}
				/>
			)}
		</Flex>
	);
}

export default FollowingDetails;
