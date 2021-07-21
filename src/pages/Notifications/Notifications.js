import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NotificationCard } from "../../components";
import axios from "axios";
import { useSelector } from "react-redux";
import { TokenConfig } from "../Home/postApi";

const { REACT_APP_BACKEND_URL } = process.env;

function Notifications() {
	const [notifications, setNotifications] = useState([]);
	const state = useSelector((state) => state.auth);
	useEffect(() => {
		(async () => {
			if (state.status === "success") {
				try {
					const { data } = await axios.get(
						`${REACT_APP_BACKEND_URL}/users/${state?.user?._id}/get-notifications`,
						TokenConfig()
					);
					setNotifications(data.notifications.notifications);
				} catch (error) {
					console.log("error", error.response.status);
					if (error.response.status === 404) {
						console.log("Inside 404");
						return setNotifications([]);
					}
					console.error(error);
				}
			}
		})();
	}, [state.status, state?.user?._id]);

	return (
		<>
			<Box p={4}>
				<Text fontWeight="800" fontSize="20px" lineHeight="24px" letterSpacing="wide">
					Notifications
				</Text>
			</Box>
			<Divider color="#6e767d" />
			{notifications.length > 0 ? (
				<NotificationCard data={notifications} />
			) : (
				<Heading fontSize="lg" mt={5} textAlign="center">
					No notifications
				</Heading>
			)}
		</>
	);
}

export default Notifications;
