import {
	Box,
	Divider,
	Flex,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { ReactionsComponent } from "..";
import NameAvatar from "../NameAvatar/NameAvatar";

function UserPost({ post, user }) {
	const state = useSelector((state) => state.auth);
	const userProfile = useSelector((state) => state.userProfile);

	const { userName } = useParams();

	const navigate = useNavigate();

	const moveToPostPage = (el) => {
		return navigate(`/${user.userName}/post/${post._id}`, { state: user });
	};

	const checkForFollowing = () =>
		userProfile?.following?.length > 0 &&
		userProfile.following.find((el) => el === post?.userId?._id);

	return (
		<React.Fragment key={post._id}>
			<Flex w="100%" height="auto" p={4} cursor="pointer" onClick={moveToPostPage}>
				<Box marginRight={4} mt={1}>
					<NameAvatar name={user?.fullName} />
				</Box>
				<Box w="100%">
					<Flex flexDirection="column" fontSize="15px">
						<Box display="flex" alignItems="center" justifyContent="space-between">
							<Flex>
								<Text fontWeight="bold" marginRight="5px">
									{user?.fullName}
								</Text>
								<Text color="#6e767d">@{user?.userName}</Text>
							</Flex>
							{state.user.userName !== userName && (
								<Menu>
									<MenuButton
										as={Box}
										borderRadius="full"
										padding={3}
										_hover={{ backgroundColor: "rgba(29,161,242,0.2)" }}
									>
										<Icon as={FiMoreHorizontal} w={5} h={5} />
									</MenuButton>
									{user?._id !== state.user?._id && (
										<MenuList>
											{checkForFollowing() ? (
												<MenuItem icon={<RiUserUnfollowLine />}>
													Unfollow @{user?.userName}
												</MenuItem>
											) : (
												<MenuItem icon={<RiUserFollowLine />}>
													Follow @{user?.userName}
												</MenuItem>
											)}
										</MenuList>
									)}
								</Menu>
							)}
						</Box>

						<Text>{post.post}</Text>
						{/* <ReactionsComponent data={post} postUser={user?._id} noComments={true} /> */}
					</Flex>
				</Box>
			</Flex>
			<Divider color="#6e767d" />
		</React.Fragment>
	);
}

export default UserPost;
