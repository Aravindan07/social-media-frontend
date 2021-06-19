import React from "react";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiUserUnfollowLine, RiUserFollowLine } from "react-icons/ri";
import { Divider, useColorModeValue } from "@chakra-ui/react";
import { NameAvatar, ReactionsComponent } from "../../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../pages/Profile/profileSlice";

function Post({ post }) {
	const navigate = useNavigate();

	const hoverBg = useColorModeValue("rgba(0,0,0,0.03)", "rgba(255,255,255,0.03)");

	const state = useSelector((state) => state.auth);
	const userProfile = useSelector((state) => state.userProfile);

	const moveToPostPage = (e, el) => {
		e.stopPropagation();
		return navigate(`/${post.userId.userName}/post/${el._id}`, { state: post.userId });
	};

	const checkForFollowing = () =>
		userProfile?.following?.length > 0 &&
		userProfile.following.find((el) => el._id === post?.userId?._id);

	const moveToProfile = (e) => {
		e.stopPropagation();
		return navigate(`/${post.userId.userName}`);
	};

	const dispatch = useDispatch();

	const addToFollowingHandler = (e, followingId) => {
		e.stopPropagation();
		if (checkForFollowing()) {
			return dispatch(unFollowUser({ userId: state.user?._id, followingId }));
		}
		dispatch(followUser({ userId: state.user?._id, followingId }));
	};

	return (
		<>
			{post &&
				post?.posts?.map((el) => (
					<React.Fragment key={el._id}>
						<Flex
							w="100%"
							height="auto"
							p={4}
							cursor="pointer"
							onClick={(e) => moveToPostPage(e, el)}
							_hover={{
								backgroundColor: hoverBg,
							}}
						>
							<Box marginRight={4} mt={1} onClick={(e) => moveToProfile(e)}>
								<NameAvatar name={post?.userId?.fullName} />
							</Box>
							<Box w="100%">
								<Flex flexDirection="column" fontSize="15px">
									<Box
										display="flex"
										alignItems="center"
										justifyContent="space-between"
									>
										<Flex>
											<Text fontWeight="bold" marginRight="5px">
												{post?.userId?.fullName}
											</Text>
											<Text color="#6e767d">@{post?.userId?.userName}</Text>
										</Flex>
										{post?.userId?._id !== state.user?._id && (
											<Menu>
												<MenuButton
													as={Box}
													borderRadius="full"
													padding={3}
													_hover={{
														backgroundColor: "rgba(29,161,242,0.2)",
													}}
													onClick={(e) => e.stopPropagation()}
												>
													<Icon as={FiMoreHorizontal} w={5} h={5} />
												</MenuButton>
												<MenuList>
													{checkForFollowing() ? (
														<MenuItem
															icon={<RiUserUnfollowLine />}
															onClick={(e) =>
																addToFollowingHandler(
																	e,
																	post?.userId?._id
																)
															}
														>
															Unfollow @{post?.userId?.userName}
														</MenuItem>
													) : (
														<MenuItem
															icon={<RiUserFollowLine />}
															onClick={(e) =>
																addToFollowingHandler(
																	e,
																	post?.userId?._id
																)
															}
														>
															Follow @{post?.userId?.userName}
														</MenuItem>
													)}
												</MenuList>
											</Menu>
										)}
									</Box>

									<Text>{el.post}</Text>
									<ReactionsComponent
										data={el}
										postUser={post?.userId?._id}
										noComments={true}
									/>
								</Flex>
							</Box>
						</Flex>
						<Divider color="#6e767d" />
					</React.Fragment>
				))}
		</>
	);
}

export default Post;
