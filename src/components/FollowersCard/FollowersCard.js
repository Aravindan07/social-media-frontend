import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NameAvatar from "../NameAvatar/NameAvatar";
import { followUser, unFollowUser } from "../../pages/Profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";

function FollowersCard({ user }) {
	const state = useSelector((state) => state.auth);
	const userProfile = useSelector((state) => state.userProfile);

	let navigate = useNavigate();

	const dispatch = useDispatch();

	const navigateToProfile = () => {
		return navigate(`/${user.userName}`);
	};

	const checkForFollowing = () =>
		userProfile?.following && userProfile?.following?.find((el) => el._id === user._id);

	const addToFollowingHandler = (followingId) => {
		if (checkForFollowing()) {
			return dispatch(unFollowUser({ userId: state.user?._id, followingId }));
		}
		dispatch(followUser({ userId: state.user?._id, followingId }));
	};

	return (
		<>
			{state?.user?._id !== user._id && (
				<>
					<Flex width="100%" p={4}>
						<Box marginRight={4} onClick={navigateToProfile} cursor="pointer">
							<NameAvatar name={user.fullName} />
						</Box>
						<Box w="100%">
							<Flex justifyContent="space-between">
								<Box onClick={navigateToProfile} cursor="pointer">
									<Text>{user.fullName}</Text>
									<Text color="#6e767d" mb={3}>
										@{user.userName}
									</Text>
								</Box>
								<Button
									variant="outline"
									borderRadius="2xl"
									color="#17bf63"
									borderColor="#17bf63"
									fontWeight="bold"
									onClick={() => addToFollowingHandler(user._id)}
								>
									{checkForFollowing() ? "Unfollow" : "Follow"}
								</Button>
							</Flex>
							<Text>{user.bio}</Text>
						</Box>
					</Flex>
					<Divider color="#6e767d" />
				</>
			)}
		</>
	);
}

export default FollowersCard;
