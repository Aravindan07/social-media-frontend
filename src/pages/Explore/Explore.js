import { Box, Divider, Text } from "@chakra-ui/react";
import { FollowersCard } from "../../components";

function Explore() {
	return (
		<Box>
			<Box p={4}>
				<Text fontWeight="800" fontSize="20px" lineHeight="24px" letterSpacing="wide">
					Who to follow
				</Text>
			</Box>
			<Divider color="#6e767d" />
			<FollowersCard />
			<FollowersCard />
			<FollowersCard />
			<FollowersCard />
			<FollowersCard />
			<FollowersCard />
		</Box>
	);
}

export default Explore;
