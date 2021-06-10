import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Heading,
	useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/Login/usersSlice";

function ModalComponent({ isOpen, onClose }) {
	const dispatch = useDispatch();
	const toast = useToast();
	const logoutHandler = () => {
		dispatch(logout());
		toast({
			title: "Logged Out",
			position: "top-right",
			description: "You are logged out",
			status: "info",
			duration: 3000,
			isClosable: true,
		});
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Are you sure you want to logout ?</ModalHeader>
				<ModalCloseButton />
				{/* <ModalBody>
					<Heading size="md">Are you sure you want to logout ?</Heading>
				</ModalBody> */}

				<ModalFooter justifyContent="space-between">
					<Button
						variant="ghost"
						bg="#17bf63"
						_hover={{
							opacity: "0.8",
						}}
						onClick={logoutHandler}
					>
						Yes
					</Button>
					<Button colorScheme="red" bg="red.600" color="white" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default ModalComponent;
