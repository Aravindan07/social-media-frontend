import {
	Box,
	Flex,
	Button,
	Text,
	HStack,
	Icon,
	Link,
	Divider,
	Avatar,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { BsLink } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { PostComponent, ModalComponent } from "../../components";

function Profile() {
	const state = useSelector((state) => state.users);
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box>
			<Box w="100%" height="200px"></Box>
			<Divider color="#6e767d" />
			<Box w="100%" minHeight="250px" padding="12px 16px 0px" mb={4} position="relative">
				<Avatar
					name="Dan Abrahmov"
					src="https://bit.ly/dan-abramov"
					size="2xl"
					position="absolute"
					top="-80px"
					border="5px solid #000"
				/>
				<Flex justifyContent="flex-end">
					<Button
						variant="outline"
						borderRadius="2xl"
						color="#17bf63"
						borderColor="#17bf63"
						fontWeight="bold"
						onClick={onOpen}
					>
						Edit Profile
					</Button>
					<ModalComponent isOpen={isOpen} onClose={onClose} type="edit-profile" data="" />
				</Flex>
				<Flex mt="4px" mb="12px">
					<Box>
						<Text fontWeight="bold" fontSize="lg" letterSpacing="wide">
							{state.user?.fullName}
						</Text>
						<Text color="#6e767d">{state.user?.userName}</Text>
					</Box>
				</Flex>
				<Flex mb={4}>
					<Text>
						Front End Developer • Learning full stack development
						<Link
							href="/@neogcamp"
							style={{ color: "#17bf63", cursor: "pointer", margin: "0 3px" }}
						>
							@neogcamp
						</Link>
						• ReactJS • NodeJS • JavaScript • Blogger • Tweets about web development •
						My work
					</Text>
				</Flex>
				<HStack mb={3}>
					<Flex alignItems="center">
						<Icon
							as={IoLocationOutline}
							mr={2}
							w={5}
							h={5}
							fill="#6e767d"
							stroke="#6e767d"
						/>
						<Text>India</Text>
					</Flex>
					<Flex alignItems="center">
						<Icon as={BsLink} mr={2} w={5} h={5} fill="#6e767d" stroke="#6e767d" />
						<Link
							href="https://aravind-portfolio.netlify.app"
							isExternal
							color="#17bf63"
						>
							aravind-portfolio.netlify.app
						</Link>
					</Flex>
				</HStack>
				<Flex>
					<Link href="/:userName/following">
						<Text mr="20px">
							608
							<span style={{ color: "#6e767d", marginLeft: "3px" }}>Following</span>
						</Text>
					</Link>

					<Link href="/:userName/followers">
						<Text>
							152
							<span style={{ color: "#6e767d", marginLeft: "3px" }}>Followers</span>
						</Text>
					</Link>
				</Flex>
			</Box>
			<Box
				color="#17bf63"
				marginLeft={4}
				fontWeight="bold"
				fontSize="lg"
				borderBottom="5px solid #17bf63"
				borderRadius="5px"
				width="fit-content"
			>
				Tweets
			</Box>
			<Divider color="#6e767d" mt={3} />
			<Box>
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
			</Box>
		</Box>
	);
}

export default Profile;
