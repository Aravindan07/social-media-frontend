import React from "react";
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
import { NameAvatar, ReactionsComponent } from "../../components";
import { RiUserFollowLine, RiUserUnfollowLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";

function PostPage() {
	const location = useLocation();
	console.log("location.state", location.state);
	return (
		<React.Fragment>
			<Flex w="100%" height="auto" p={4}>
				<Box marginRight={4} mt={1}>
					<NameAvatar name={location.state?.fullName} />
				</Box>
				<Box w="100%">
					<Flex flexDirection="column" fontSize="15px">
						<Box display="flex" alignItems="center" justifyContent="space-between">
							<Box>
								<Text fontWeight="bold" marginRight="5px">
									{location.state?.fullName}
								</Text>
								<Text color="#6e767d">@{location.state?.userName}</Text>
							</Box>
							<Menu>
								<MenuButton
									as={Box}
									borderRadius="full"
									padding={3}
									cursor="pointer"
									_hover={{ backgroundColor: "rgba(29,161,242,0.2)" }}
								>
									<Icon as={FiMoreHorizontal} w={5} h={5} />
								</MenuButton>
								<MenuList>
									<MenuItem icon={<RiUserUnfollowLine />}>
										Unfollow @{location.state?.userName}
									</MenuItem>
									<MenuItem icon={<RiUserFollowLine />}>
										Follow @{location.state?.userName}
									</MenuItem>
								</MenuList>
							</Menu>
						</Box>

						<Text mt={4} mb={4} fontSize="lg">
							{location.state?.data.post}
						</Text>
						<ReactionsComponent data={location.state.data} />
					</Flex>
				</Box>
			</Flex>
			<Divider color="#6e767d" />
			<Box p={5}>
				<Flex mt={5} mb={5}>
					<Flex>
						15
						<Text
							ml={1}
							fontWeight="medium"
							letterSpacing="wide"
							color="#6e767d"
							cursor="pointer"
							textDecoration="underline"
						>
							Likes
						</Text>
					</Flex>
				</Flex>
				<Divider color="#6e767d" />
				<Box mt={5}>
					<Flex mb={4}>
						<Box marginRight={4} mt={1}>
							<NameAvatar name={location.state.fullName} />
						</Box>
						<Box>
							<Flex>
								<Text fontWeight="bold" marginRight="5px">
									{location.state.fullName}
								</Text>
								<Text color="#6e767d">@{location.state.userName}</Text>
							</Flex>
							<Text color="#6e767d">
								replying to <span style={{ color: "#17bf63" }}>@ms_yogii</span>
							</Text>
							<Text mt={3} mb={3}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
								temporibus exercitationem minus distinctio quasi! Possimus pariatur,
								vitae voluptates voluptas sequi voluptate incidunt ipsum sunt soluta
								minus dolorem dicta illo corrupti?
							</Text>
							<ReactionsComponent data={location.state.data} noComments />
						</Box>
					</Flex>
					<Divider color="#6e767d" />
				</Box>
			</Box>
		</React.Fragment>
	);
}

export default PostPage;
