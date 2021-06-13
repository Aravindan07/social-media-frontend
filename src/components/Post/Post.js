import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiUserUnfollowLine, RiUserFollowLine } from "react-icons/ri";
import { Divider } from "@chakra-ui/react";
import { NameAvatar, ReactionsComponent } from "../../components";
// import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Post({ post }) {
	console.log("post in post", post);
	const addPosts = post.posts
		? post.posts.posts.map((el) => {
				if (el.posts) {
					return el.posts;
				}
				return el;
		  })
		: null;

	console.log("addPosts", addPosts);

	const navigate = useNavigate();

	const moveToPostPage = (el) => {
		return navigate(`/${post.userName}/post/${el._id}`, {
			state: { fullName: post?.fullName, userName: post?.userName, data: el },
		});
	};

	return (
		<>
			{addPosts &&
				addPosts.map((el) => (
					<React.Fragment key={el._id}>
						<Flex
							w="100%"
							height="auto"
							p={4}
							cursor="pointer"
							onClick={() => moveToPostPage(el)}
						>
							<Box marginRight={4} mt={1}>
								<NameAvatar name={post?.fullName} />
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
												{post.fullName}
											</Text>
											<Text color="#6e767d">@{post.userName}</Text>
										</Flex>
										<Menu>
											<MenuButton
												as={Box}
												borderRadius="full"
												padding={3}
												_hover={{ backgroundColor: "rgba(29,161,242,0.2)" }}
											>
												<Icon as={FiMoreHorizontal} w={5} h={5} />
											</MenuButton>
											<MenuList>
												<MenuItem icon={<RiUserUnfollowLine />}>
													Unfollow @{post.userName}
												</MenuItem>
												<MenuItem icon={<RiUserFollowLine />}>
													Follow @{post.userName}
												</MenuItem>
											</MenuList>
										</Menu>
									</Box>

									<Text>{el.post}</Text>
									<ReactionsComponent data={el} />
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
