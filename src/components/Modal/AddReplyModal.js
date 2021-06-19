import {
	Button,
	Divider,
	FormControl,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToPost } from "../../pages/Home/postSlice";

function AddReplyModal({ isOpen, onClose, data }) {
	const [comment, setComment] = useState("");

	const onChangeHandler = (e) => {
		e.preventDefault();
		return setComment(e.target.value);
	};

	const state = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const addComments = async () => {
		if (comment === "") {
			return null;
		}
		//postUserId,postId, commentedUserId, comment;
		await dispatch(
			addCommentToPost({
				postUserId: data.postUserId,
				postId: data.postId,
				commentedUserId: state?.user?._id,
				comment,
			})
		);
		return onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add a comment</ModalHeader>
				<Divider color="#6e767d" />
				<ModalCloseButton />
				<ModalBody>
					<Text color="#6e767d">
						{/* Replying to <span style={{ color: "#17bf6e" }}>@aravind33</span> */}
						Replying
					</Text>
					<FormControl id="name" my={4} isRequired>
						<Textarea
							placeholder="Tell them what you think"
							size="lg"
							height="200px"
							borderColor="#6e767d"
							isRequired
							_focus={{ border: "2px solid #17bf6e" }}
							_hover={{ borderWidth: "2px" }}
							value={comment}
							onChange={(e) => onChangeHandler(e)}
						/>
					</FormControl>
				</ModalBody>

				<ModalFooter justifyContent="space-between">
					<Button colorScheme="red" bg="red.600" color="white" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button
						variant="ghost"
						bg="#17bf63"
						color="#fff"
						_hover={{
							opacity: "0.8",
						}}
						onClick={addComments}
					>
						Comment
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default AddReplyModal;
