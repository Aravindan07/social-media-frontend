import { Avatar } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FiMoreHorizontal, FiShare } from "react-icons/fi";
import { RiUserUnfollowLine, RiUserFollowLine } from "react-icons/ri";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsLink } from "react-icons/bs";

function Post() {
	return (
		<Flex
			borderBottom="1px solid rgb(47, 51, 54)"
			w="100%"
			height="auto"
			p={4}
			cursor="pointer"
		>
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
								<MenuItem icon={<RiUserFollowLine />}>Follow @aravind33</MenuItem>
							</MenuList>
						</Menu>
					</Box>

					<Text>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
						architecto quis libero quam itaque tempore reiciendis quaerat, earum natus
						explicabo cupiditate consequatur veniam autem aut voluptatibus nulla porro
						dicta suscipit!
					</Text>
				</Flex>
				<Box display="flex" justifyContent="space-between" width="80%" mt={4}>
					<Flex alignItems="center">
						<Icon
							as={FaRegComment}
							w={4}
							h={4}
							fill="#6e767d"
							stroke="#6e767d"
							_hover={{
								fill: "rgba(29,161,242)",
								stroke: "rgba(29,161,242)",
							}}
						/>
						<Text fontSize="14px" color="#6e767d" marginLeft={3}>
							27
						</Text>
					</Flex>
					<Flex alignItems="center">
						<Icon
							as={AiOutlineRetweet}
							w={4}
							h={4}
							fill="#6e767d"
							stroke="#6e767d"
							_hover={{
								fill: "rgb(23,191,99)",
								stroke: "rgb(23,191,99)",
							}}
						/>
						<Text fontSize="14px" color="#6e767d" marginLeft={3}>
							4
						</Text>
					</Flex>
					<Flex alignItems="center">
						<Icon
							as={FaRegHeart}
							w={4}
							h={4}
							fill="#6e767d"
							stroke="#6e767d"
							_hover={{
								fill: "rgb(224,36,94)",
								stroke: "rgb(224,36,94)",
							}}
						/>
						<Text fontSize="14px" color="#6e767d" marginLeft={3}>
							127
						</Text>
					</Flex>
					<Menu>
						<MenuButton as={Box}>
							<Icon
								as={FiShare}
								w={4}
								h={4}
								stroke="#6e767d"
								_hover={{
									stroke: "rgba(29,161,242)",
								}}
							/>
						</MenuButton>
						<MenuList>
							<MenuItem icon={<BsLink />}>Copy link to this tweet</MenuItem>
						</MenuList>
					</Menu>
				</Box>
			</Box>
		</Flex>
	);
}

export default Post;
