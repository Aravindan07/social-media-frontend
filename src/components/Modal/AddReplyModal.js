import {
	Button,
	Divider,
	FormControl,
	FormLabel,
	Input,
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
import React from "react";

function AddReplyModal({ isOpen, onClose }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Add a comment</ModalHeader>
				<Divider color="#6e767d" />
				<ModalCloseButton />
				<ModalBody>
					<Text color="#6e767d">
						Replying to <span style={{ color: "#17bf6e" }}>@aravind33</span>
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
					>
						Comment
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default AddReplyModal;
