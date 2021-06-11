import { Avatar } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiUserUnfollowLine, RiUserFollowLine } from "react-icons/ri";
import { Divider } from "@chakra-ui/react";
import Reactions from "../Reactions/Reactions";

function Post() {
	return (
		<>
			<Flex w="100%" height="auto" p={4} cursor="pointer">
				<Box marginRight={4}>
					<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
				</Box>
				<Box>
					<Flex flexDirection="column" fontSize="15px">
						<Box display="flex" alignItems="center" justifyContent="space-between">
							<Flex>
								<Text fontWeight="bold" marginRight="5px">
									Aravind
								</Text>
								<Text color="#6e767d">@aravind33</Text>
								<Box
									fontWeight="400"
									fontSize="15px"
									backgroundColor="#6e767d"
									w="3px"
									h="3px"
									borderRadius="full"
									mt="10px"
									mx="5px"
								></Box>
								<Text color="#6e767d" marginRight="5px">
									5m
								</Text>
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
										Unfollow @aravind33
									</MenuItem>
									<MenuItem icon={<RiUserFollowLine />}>
										Follow @aravind33
									</MenuItem>
								</MenuList>
							</Menu>
						</Box>

						<Text>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
							architecto quis libero quam itaque tempore reiciendis quaerat, earum
							natus explicabo cupiditate consequatur veniam autem aut voluptatibus
							nulla porro dicta suscipit!
						</Text>
						<Reactions />
					</Flex>
				</Box>
			</Flex>
			<Divider color="#6e767d" />
		</>
	);
}

export default Post;
