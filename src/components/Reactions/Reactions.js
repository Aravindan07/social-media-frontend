import {
	Box,
	Flex,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { ModalComponent } from "../../components";

function Reactions() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box display="flex" justifyContent="space-between" width="80%" mt={4}>
			<Flex alignItems="center" role="group">
				<Box
					p={3}
					borderRadius="full"
					display="flex"
					alignItems="center"
					justifyContent="center"
					_hover={{ backgroundColor: "rgba(29,161,242,0.1)" }}
					onClick={onOpen}
				>
					<Icon
						as={FaRegComment}
						w={4}
						h={4}
						fill="#6e767d"
						stroke="#6e767d"
						_groupHover={{
							fill: "rgb(29,161,242)",
							stroke: "rgb(29,161,242)",
						}}
					/>
					<ModalComponent isOpen={isOpen} onClose={onClose} type="add-reply" data="" />
				</Box>
				<Text
					fontSize="14px"
					color="#6e767d"
					marginLeft={1}
					_groupHover={{ color: "rgb(29,161,242)" }}
				>
					27
				</Text>
			</Flex>
			<Flex alignItems="center" role="group">
				<Box
					p={3}
					borderRadius="full"
					display="flex"
					alignItems="center"
					justifyContent="center"
					_hover={{ backgroundColor: "rgba(23,191,99,0.1)" }}
				>
					<Icon
						as={AiOutlineRetweet}
						w={4}
						h={4}
						fill="#6e767d"
						stroke="#6e767d"
						_groupHover={{
							fill: "rgb(23,191,99)",
							stroke: "rgb(23,191,99)",
						}}
					/>
				</Box>
				<Text
					fontSize="14px"
					color="#6e767d"
					marginLeft={1}
					_groupHover={{
						color: "rgb(23,191,99)",
					}}
				>
					4
				</Text>
			</Flex>
			<Flex alignItems="center" role="group">
				<Box
					p={3}
					borderRadius="full"
					display="flex"
					alignItems="center"
					justifyContent="center"
					_hover={{ backgroundColor: "rgba(224,36,94,0.1)" }}
				>
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
						_groupHover={{
							fill: "rgb(224,36,94)",
							stroke: "rgb(224,36,94)",
						}}
					/>
				</Box>
				<Text
					fontSize="14px"
					color="#6e767d"
					marginLeft={1}
					_groupHover={{
						color: "rgb(224,36,94)",
					}}
				>
					127
				</Text>
			</Flex>
			<Menu>
				<MenuButton as={Box} role="group">
					<Box
						p={3}
						borderRadius="full"
						display="flex"
						alignItems="center"
						justifyContent="center"
						_groupHover={{ backgroundColor: "rgba(29,161,242,0.1)" }}
					>
						<Icon
							as={FiShare}
							w={4}
							h={4}
							stroke="#6e767d"
							_groupHover={{
								stroke: "rgb(29,161,242)",
							}}
						/>
					</Box>
				</MenuButton>
				<MenuList>
					<MenuItem icon={<BsLink />}>Copy link to this tweet</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
}

export default Reactions;
