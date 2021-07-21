import React, { useEffect } from "react";
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
	useDisclosure,
} from "@chakra-ui/react";
import { ModalComponent, NameAvatar, ReactionsComponent } from "../../components";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";
import { useLocation, useParams } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Home/postSlice";

function PostPage() {
	const state = useSelector((state) => state.auth);
	const userProfile = useSelector((state) => state.userProfile);
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const location = useLocation();

	const posts = useSelector((state) => state.posts);

	const { userName, postId } = useParams();

	const currentPost = posts.posts?.map((el) => el.posts.find((post) => post._id === postId));

	const postUser = posts.posts?.find((el) => el.userId.userName === userName);

	useEffect(() => {
		(async () => {
			if (state.status === "success" && posts.status === "idle") {
				dispatch(fetchPosts(state.user?._id));
			}
		})();
		window.scrollTo(0, 0);
	}, [dispatch, postId, userName, state.status, state.user?._id, posts.status]);

	const checkForFollowing = () =>
		userProfile?.following?.length > 0 &&
		userProfile.following.find((el) =>
			el._id === location?.state?._id ? location?.state?._id : postUser.userId._id
		);

	return (
		<>
			{currentPost?.map((post) => (
				<React.Fragment key={post ? post._id : "1"}>
					{post && (
						<>
							<Flex w="100%" height="auto" p={4}>
								<Box marginRight={4} mt={1}>
									<NameAvatar
										name={
											location?.state?.fullName
												? location?.state?.fullName
												: postUser.userId.fullName
										}
									/>
								</Box>
								<Box w="100%">
									<Flex flexDirection="column" fontSize="15px">
										<Box
											display="flex"
											alignItems="center"
											justifyContent="space-between"
										>
											<Box>
												<Text fontWeight="bold" marginRight="5px">
													{location?.state?.fullName
														? location?.state?.fullName
														: postUser.userId.fullName}
												</Text>
												<Text color="#6e767d">
													@
													{location?.state?.userName
														? location?.state?.userName
														: postUser.userId.userName}
												</Text>
											</Box>
											{location.state?._id === state.user?._id ||
												(postUser.userId._id !== state.user?._id && (
													<Menu>
														<MenuButton
															as={Box}
															borderRadius="full"
															padding={3}
															cursor="pointer"
															_hover={{
																backgroundColor:
																	"rgba(29,161,242,0.2)",
															}}
														>
															<Icon
																as={FiMoreHorizontal}
																w={5}
																h={5}
															/>
														</MenuButton>
														{location.state?._id === state.user?._id ||
															(postUser.userId?._id !==
																state.user?._id && (
																<MenuList>
																	{checkForFollowing() ? (
																		<MenuItem
																			icon={
																				<RiUserUnfollowLine />
																			}
																		>
																			Unfollow @
																			{location?.state
																				?.userName
																				? location?.state
																						?.userName
																				: postUser.userId
																						.userName}
																		</MenuItem>
																	) : (
																		<MenuItem
																			icon={
																				<RiUserFollowLine />
																			}
																		>
																			Follow @
																			{location?.state
																				?.userName
																				? location?.state
																						?.userName
																				: postUser.userId
																						.userName}
																		</MenuItem>
																	)}
																</MenuList>
															))}
													</Menu>
												))}
										</Box>

										<Text mt={4} mb={4} fontSize="lg">
											{post?.post}
										</Text>
										<ReactionsComponent
											data={post}
											postUser={
												location?.state?._id
													? location?.state?._id
													: postUser.userId._id
											}
											noComments={true}
										/>
									</Flex>
								</Box>
							</Flex>
							<Divider color="#6e767d" />

							<Box p={5}>
								{post && (
									<Flex mt={5} mb={5}>
										<Flex>
											{post?.likes?.length}
											<Text
												ml={1}
												fontWeight="medium"
												letterSpacing="wide"
												color="#6e767d"
												cursor="pointer"
												textDecoration="underline"
												onClick={post?.likes?.length > 0 ? onOpen : null}
											>
												Likes
											</Text>
										</Flex>
										<ModalComponent
											isOpen={isOpen}
											onClose={onClose}
											type="liked-by"
											data={post?.likes}
										/>
									</Flex>
								)}

								{post && <Divider color="#6e767d" />}

								{post?.comments.map((comment) => (
									<Box mt={5} key={comment._id}>
										<Flex mb={4}>
											<Box marginRight={4} mt={1}>
												<NameAvatar name={comment.users.fullName} />
											</Box>
											<Box>
												<Flex>
													<Text fontWeight="bold" marginRight="5px">
														{comment.users.fullName}
													</Text>
													<Text color="#6e767d">
														@{comment.users.userName}
													</Text>
												</Flex>
												<Text color="#6e767d">
													replying to{" "}
													<span style={{ color: "#17bf63" }}>
														@
														{location?.state?.userName
															? location?.state?.userName
															: postUser.userId.userName}
													</span>
												</Text>
												<Text mt={3} mb={3}>
													{comment.comment}
												</Text>
												<ReactionsComponent
													data={comment}
													noComments={false}
													type="comment"
													postUser={
														location?.state?._id
															? location?.state?._id
															: postUser.userId._id
													}
													postId={post?._id}
												/>
											</Box>
										</Flex>
										<Divider color="#6e767d" />
									</Box>
								))}
							</Box>
						</>
					)}
				</React.Fragment>
			))}
		</>
	);
}

export default PostPage;
