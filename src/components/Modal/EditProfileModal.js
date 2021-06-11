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
} from "@chakra-ui/react";
import React from "react";

function EditProfileModal({ isOpen, onClose }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Edit Profile</ModalHeader>
				<Divider color="#6e767d" />
				<ModalCloseButton />
				<ModalBody>
					<FormControl id="name" my={4} isRequired>
						<FormLabel>Name</FormLabel>
						<Input
							type="text"
							borderColor="#6e767d"
							_focus={{ border: "2px solid #17bf6e" }}
						/>
					</FormControl>
					<FormControl id="bio" my={4} isRequired>
						<FormLabel>Bio</FormLabel>
						<Input
							type="text"
							borderColor="#6e767d"
							_focus={{ border: "2px solid #17bf6e" }}
						/>
					</FormControl>
					<FormControl id="location" my={4} isRequired>
						<FormLabel>Location</FormLabel>
						<Input
							type="text"
							borderColor="#6e767d"
							_focus={{ border: "2px solid #17bf6e" }}
						/>
					</FormControl>
					<FormControl id="website" my={4}>
						<FormLabel>Website</FormLabel>
						<Input
							type="text"
							borderColor="#6e767d"
							_focus={{ border: "2px solid #17bf6e" }}
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
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default EditProfileModal;
