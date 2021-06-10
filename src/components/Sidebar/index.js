import Icon from "@chakra-ui/icon";
import { Box, VStack } from "@chakra-ui/layout";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { useDisclosure } from "@chakra-ui/hooks";
import ModalComponent from "../Modal/Modal";

function Sidebar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
			borderRight="1px solid rgb(47, 51, 54)"
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
					onClick={onOpen}
				>
					<Icon aria-label="Home button" as={BiLogOut} w={7} h={7} />
					<ModalComponent isOpen={isOpen} onClose={onClose} />
				</Box>
			</Box>
		</VStack>
	);
}

export default Sidebar;
