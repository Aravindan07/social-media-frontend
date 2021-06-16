import { Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import ModalComponent from "../Modal/Modal";

function FollowersDetails({ followersCount }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const userProfile = useSelector((state) => state.userProfile);

	const onOpenHandler = (e) => {
		e.stopPropagation();
		e.preventDefault();
		return onOpen();
	};
	return (
		<>
			<Text
				cursor="pointer"
				textDecoration="underline"
				textDecorationColor="#6e767d"
				onClick={(e) => onOpenHandler(e)}
			>
				{followersCount && followersCount}
				<span
					style={{
						color: "#6e767d",
						marginLeft: "3px",
					}}
				>
					Followers
				</span>
			</Text>
			{userProfile?.profile?.followers > 0 && (
				<ModalComponent
					isOpen={isOpen}
					onClose={onClose}
					type="show-followers"
					data={userProfile?.followers}
				/>
			)}
		</>
	);
}

export default FollowersDetails;
