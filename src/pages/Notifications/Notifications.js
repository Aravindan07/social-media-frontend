import { Box, Divider, Text } from "@chakra-ui/react";
import { NotificationCard } from "../../components";

function Notifications() {
	return (
		<>
			<Box p={4}>
				<Text fontWeight="800" fontSize="20px" lineHeight="24px" letterSpacing="wide">
					Notifications
				</Text>
			</Box>
			<Divider color="#6e767d" />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
			<NotificationCard />
		</>
	);
}

export default Notifications;
