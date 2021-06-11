import { Box, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { FollowersCard } from "../../components";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function FollowersPage() {
	const navigate = useNavigate();

	const goBackHandler = () => {
		return navigate(-1);
	};
	return (
		<Box>
			<Box p={4}>
				<Flex>
					<Box
						padding={4}
						display="flex"
						alignItems="center"
						justifyContent="center"
						borderRadius="full"
						cursor="pointer"
						_hover={{
							backgroundColor: "rgba(23, 191, 99, 0.1)",
						}}
						onClick={goBackHandler}
					>
						<Icon as={IoArrowBackOutline} stroke="#17bf63" w={5} h={5} />
					</Box>
					<Box ml={3}>
						<Text fontWeight="bold">Aravindan</Text>
						<Text color="#6e767d">@aravind33</Text>
					</Box>
				</Flex>
			</Box>
			<Text color="#6e767d" ml={12} fontWeight="bold" mb={3}>
				Followers
			</Text>
			<Divider color="#6e767d" />
			<FollowersCard />
			<FollowersCard />
			<FollowersCard />
			<FollowersCard />
			<FollowersCard />
		</Box>
	);
}

export default FollowersPage;
