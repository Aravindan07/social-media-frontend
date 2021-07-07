import {
	Box,
	Button,
	Divider,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NameAvatar from "../NameAvatar/NameAvatar";

function LikedUsersModal({ isOpen, onClose, data }) {
	const state = useSelector((state) => state.auth);

	const navigate = useNavigate();

	const navigateToProfile = (user) => {
		return navigate(`/${user.userName}`);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Liked By</ModalHeader>
				<Divider color="#6e767d" />
				<ModalCloseButton />
				<ModalBody>
					{data?.map((user) => (
						<React.Fragment key={user._id}>
							<Flex width="100%" p={4}>
								<Box marginRight={4}>
									<NameAvatar
										name={user.fullName}
										onClick={() => navigateToProfile(user)}
									/>
								</Box>
								<Box w="100%">
									<Flex justifyContent="space-between">
										<Box
											onClick={() => navigateToProfile(user)}
											cursor="pointer"
										>
											<Text>{user.fullName}</Text>
											<Text color="#6e767d" mb={3}>
												@{user.userName}
											</Text>
										</Box>
										{/* {user._id !== state.user?._id && (
											<Button
												variant="outline"
												borderRadius="2xl"
												color="#17bf63"
												borderColor="#17bf63"
												fontWeight="bold"
												cursor="pointer"
											>
												Follow
											</Button>
										)} */}
									</Flex>
									<Text>{user.bio}</Text>
								</Box>
							</Flex>
							<Divider color="#6e767d" />
						</React.Fragment>
					))}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}

export default LikedUsersModal;
