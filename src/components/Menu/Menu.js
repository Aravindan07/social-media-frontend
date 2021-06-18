import {
	useDisclosure,
	Icon,
	useColorModeValue,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Flex,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { RiHome7Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import ModalComponent from "../Modal/Modal";
import { IoMenu } from "react-icons/io5";

function MobileMenu() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const state = useSelector((state) => state.auth);
	const iconColor = useColorModeValue("#000", "#fff");

	const location = useLocation();

	return (
		<>
			<Menu isLazy>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<IoMenu />}
					variant="outline"
				/>
				<MenuList>
					<NavLink to="/home">
						<MenuItem
							role="group"
							_hover={{
								backgroundColor: "rgba(23, 191, 99, 0.2)",
								transition: `backgroundColor 0.3s`,
							}}
						>
							<Flex display="flex" alignItems="center" mt={3} mb={3} w="100%">
								<Icon
									aria-label="Home button"
									as={RiHome7Fill}
									w={6}
									h={6}
									fill={location.pathname === "/home" ? "#17bf63" : iconColor}
									stroke={location.pathname === "/home" ? "#17bf63" : iconColor}
									_groupHover={{
										fill: "#17bf63",
										transition: `fill 0.2s`,
									}}
								/>
								<Flex>
									<Text ml={3}>Home</Text>
								</Flex>
							</Flex>
						</MenuItem>
					</NavLink>

					<NavLink to={`/explore`}>
						<MenuItem
							role="group"
							_hover={{
								backgroundColor: "rgba(23, 191, 99, 0.2)",
								transition: `backgroundColor 0.3s`,
							}}
						>
							<Flex display="flex" alignItems="center" mt={3} mb={3}>
								<Icon
									aria-label="Explore button"
									as={FaHashtag}
									w={6}
									h={6}
									fill={location.pathname === "/explore" ? "#17bf63" : iconColor}
									_groupHover={{ fill: "#17bf63", transition: `fill 0.2s` }}
								/>
								<Flex>
									<Text ml={3}>Explore</Text>
								</Flex>
							</Flex>
						</MenuItem>
					</NavLink>

					<NavLink to="/notifications">
						<MenuItem
							_hover={{
								backgroundColor: "rgba(23, 191, 99, 0.2)",
								transition: `backgroundColor 0.3s`,
							}}
						>
							<Flex
								display="flex"
								alignItems="center"
								mt={3}
								mb={3}
								// p={3}
								role="group"
							>
								<Icon
									aria-label="Notifications button"
									as={IoMdNotifications}
									w={6}
									h={6}
									fill={
										location.pathname === "/notifications"
											? "#17bf63"
											: iconColor
									}
									_groupHover={{ fill: "#17bf63", transition: `fill 0.2s` }}
								/>
								<Flex>
									<Text ml={3}>Notifications</Text>
								</Flex>
							</Flex>
						</MenuItem>
					</NavLink>

					<NavLink to={`/${state.user?.userName}`}>
						<MenuItem
							_hover={{
								backgroundColor: "rgba(23, 191, 99, 0.2)",
								transition: `backgroundColor 0.3s`,
							}}
						>
							<Flex display="flex" alignItems="center" mt={3} mb={3} role="group">
								<Icon
									aria-label="Profile button"
									as={HiOutlineUser}
									w={6}
									h={6}
									fill={
										location.pathname === `/${state.user?.userName}`
											? "#17bf63"
											: iconColor
									}
									stroke={
										location.pathname === `/${state.user?.userName}`
											? "#17bf63"
											: iconColor
									}
									_groupHover={{
										fill: "#17bf63",
										stroke: "#17bf63",
										transition: `fill 0.2s, stroke 0.2s`,
									}}
								/>
								<Flex>
									<Text ml={3}>Profile</Text>
								</Flex>
							</Flex>
						</MenuItem>
					</NavLink>

					<MenuItem
						_hover={{
							backgroundColor: "rgba(23, 191, 99, 0.2)",
							transition: `backgroundColor 0.3s`,
						}}
					>
						<Flex
							display="flex"
							alignItems="center"
							mt={3}
							mb={3}
							role="group"
							onClick={onOpen}
						>
							<Icon
								aria-label="Logout button"
								as={BiLogOut}
								w={6}
								h={6}
								_groupHover={{ fill: "red.500", transition: `fill 0.2s` }}
							/>
							<Flex>
								<Text ml={3}>Logout</Text>
							</Flex>
							<ModalComponent isOpen={isOpen} onClose={onClose} />
						</Flex>
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}

export default MobileMenu;
