import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/Login/usersSlice";
import LogoutModal from "./LogoutModal";
import EditProfileModal from "./EditProfileModal";
import AddReplyModal from "./AddReplyModal";

function ModalComponent({ isOpen, onClose, type, data }) {
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
	const showModal = () => {
		if (type === "edit-profile") {
			return <EditProfileModal isOpen={isOpen} onClose={onClose} />;
		}
		if (type === "add-reply") {
			return <AddReplyModal isOpen={isOpen} onClose={onClose} />;
		}
		return <LogoutModal isOpen={isOpen} onClose={onClose} logoutHandler={logoutHandler} />;
	};
	return <>{showModal()}</>;
}

export default ModalComponent;
