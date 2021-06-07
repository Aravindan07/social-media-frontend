import Icon from "@chakra-ui/icon";
import { Box, Divider, VStack } from "@chakra-ui/layout";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";

function Sidebar() {
	return (
		<VStack
			position="fixed"
			left="0"
			top="0"
			w="200px"
			height="100%"
			p={4}
			marginTop="70px"
			overflow="auto"
		>
			<Box
				width="100%"
				height="90%"
				display="flex"
				flexDirection="column"
				alignItems="flex-end"
				cursor="pointer"
			>
				<Box
					borderRadius="50%"
					display="flex"
					alignItems="center"
					mt={3}
					mb={3}
					p={3}
					_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
				>
					<Icon
						aria-label="Home button"
						as={BsHouseDoorFill}
						w={7}
						h={7}
						fill="#17bf63"
					/>
				</Box>
				<Box
					borderRadius="50%"
					display="flex"
					alignItems="center"
					mt={3}
					mb={3}
					p={3}
					_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
				>
					<Icon aria-label="Home button" as={FaHashtag} w={7} h={7} />
				</Box>
				<Box
					borderRadius="50%"
					display="flex"
					alignItems="center"
					mt={3}
					mb={3}
					p={3}
					_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
				>
					<Icon aria-label="Home button" as={IoMdNotifications} w={7} h={7} />
				</Box>
				<Box
					borderRadius="50%"
					display="flex"
					alignItems="center"
					mt={3}
					mb={3}
					p={3}
					_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
				>
					<Icon aria-label="Home button" as={HiOutlineUser} w={7} h={7} />
				</Box>
				<Box
					borderRadius="50%"
					display="flex"
					alignItems="center"
					mt={3}
					mb={3}
					p={3}
					_hover={{ bgColor: "rgba(23,191,99,0.2)" }}
				>
					<Icon aria-label="Home button" as={BiLogOut} w={7} h={7} />
				</Box>
			</Box>
			<Divider orientation="vertical" height="100%" position="fixed" top="-2" left="200px" />
		</VStack>
	);
}

export default Sidebar;
