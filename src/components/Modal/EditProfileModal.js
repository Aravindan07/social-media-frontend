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
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProfile } from "../../pages/Profile/profileSlice";

function EditProfileModal({ isOpen, onClose, data }) {
	const initialState = {
		name: data.fullName || "",
		bio: data.bio || "",
		location: data.location || "",
		website: data.website || "",
	};

	const [{ name, bio, location, website }, setState] = useState(initialState);

	const dispatch = useDispatch();

	const profileChangeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		return setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const editProfileHandler = async () => {
		await dispatch(editProfile({ userId: data.userId, name, bio, location, website }));
		return onClose();
	};

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
							name="name"
							borderColor="#6e767d"
							value={name}
							onChange={(e) => profileChangeHandler(e)}
							_focus={{ border: "2px solid #17bf6e" }}
						/>
					</FormControl>
					<FormControl id="bio" my={4} isRequired>
						<FormLabel>Bio</FormLabel>
						<Textarea
							type="text"
							name="bio"
							borderColor="#6e767d"
							value={bio}
							onChange={(e) => profileChangeHandler(e)}
							_focus={{ border: "2px solid #17bf6e" }}
						></Textarea>
					</FormControl>
					<FormControl id="location" my={4} isRequired>
						<FormLabel>Location</FormLabel>
						<Input
							type="text"
							name="location"
							borderColor="#6e767d"
							value={location}
							onChange={(e) => profileChangeHandler(e)}
							_focus={{ border: "2px solid #17bf6e" }}
						/>
					</FormControl>
					<FormControl id="website" my={4}>
						<FormLabel>Website</FormLabel>
						<Input
							type="text"
							name="website"
							borderColor="#6e767d"
							value={website}
							onChange={(e) => profileChangeHandler(e)}
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
						onClick={editProfileHandler}
					>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default EditProfileModal;
