import {
	Button,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function LogoutModal({ isOpen, onClose, logoutHandler }) {
	const color = useColorModeValue("#fff", "#fff");

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Are you sure you want to logout ?</ModalHeader>
				<ModalCloseButton />
				<ModalFooter justifyContent="space-between">
					<Button
						variant="ghost"
						bg="#17bf63"
						color={color}
						letterSpacing="wider"
						_hover={{
							opacity: "0.8",
						}}
						onClick={logoutHandler}
					>
						Yes
					</Button>
					<Button colorScheme="red" bg="red.600" color={color} mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default LogoutModal;
