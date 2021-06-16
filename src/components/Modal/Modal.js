import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/Login/usersSlice";
import LogoutModal from "./LogoutModal";
import EditProfileModal from "./EditProfileModal";
import AddReplyModal from "./AddReplyModal";
import LikedUsersModal from "./LikedUsersModal";
import FollowingModal from "./FollowingModal";
import FollowersModal from "./FollowersModal";

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
		switch (type) {
			case "edit-profile":
				return <EditProfileModal isOpen={isOpen} onClose={onClose} data={data} />;
			case "add-reply":
				return <AddReplyModal isOpen={isOpen} onClose={onClose} data={data} />;
			case "liked-by":
				return <LikedUsersModal isOpen={isOpen} onClose={onClose} data={data} />;

			case "show-following":
				return <FollowingModal isOpen={isOpen} onClose={onClose} data={data} />;

			case "show-followers":
				return <FollowersModal isOpen={isOpen} onClose={onClose} data={data} />;

			default:
				return (
					<LogoutModal isOpen={isOpen} onClose={onClose} logoutHandler={logoutHandler} />
				);
		}
	};
	return <>{showModal()}</>;
}

export default ModalComponent;
