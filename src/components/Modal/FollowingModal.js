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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unFollowUser } from "../../pages/Profile/profileSlice";
import NameAvatar from "../NameAvatar/NameAvatar";

function FollowingModal({ isOpen, onClose, data }) {
	const navigate = useNavigate();

	const state = useSelector((state) => state.auth);

	const navigateToProfile = (user) => {
		return navigate(`/${user.userName}`);
	};

	const dispatch = useDispatch();

	const addToFollowingHandler = async (e, followingId) => {
		e.stopPropagation();
		await dispatch(unFollowUser({ userId: state.user?._id, followingId }));
		return onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Following</ModalHeader>
				<Divider color="#6e767d" />
				<ModalCloseButton />
				<ModalBody>
					{data?.map((user) => (
						<React.Fragment key={user._id}>
							<Flex
								width="100%"
								p={4}
								// borderBottom="1px solid #6e767d"
							>
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

										<Button
											variant="outline"
											borderRadius="2xl"
											color="#17bf63"
											borderColor="#17bf63"
											fontWeight="bold"
											cursor="pointer"
											onClick={(e) => addToFollowingHandler(e, user._id)}
										>
											UnFollow
										</Button>
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

export default FollowingModal;
