import {
	Box,
	Flex,
	Button,
	Text,
	HStack,
	Icon,
	Link,
	Divider,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsLink } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { ModalComponent, NameAvatar, UserPostComponent } from "../../components";
import { fetchProfile, fetchFollowingAndFollowers, unFollowUser, followUser } from "./profileSlice";
import { useParams } from "react-router-dom";
import FollowingDetails from "../../components/FollowingDetails/FollowingDetails";
import FollowersDetails from "../../components/FollowingDetails/FollowersDetails";

function Profile() {
	const state = useSelector((state) => state.auth);
	const userProfile = useSelector((state) => state.userProfile);
	const dispatch = useDispatch((state) => state.posts);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [followersCount, setFollowersCount] = useState(0);

	const { userName } = useParams();

	useEffect(() => {
		(async () => {
			if (state.status === "success" && isOpen === false) {
				await dispatch(fetchProfile(userName));
				userProfile.profile?._id &&
					(await dispatch(fetchFollowingAndFollowers(userProfile.profile?._id)));
				setFollowersCount(userProfile?.profile?.followers);
			}
		})();
		window.scrollTo(0, 0);
	}, [
		dispatch,
		state.status,
		userName,
		isOpen,
		onClose,
		userProfile?.profile?.followers,
		userProfile?.profile?._id,
		// userProfile.status,
	]);

	// const checkForFollowing = () =>
	// 	userProfile?.following?.length > 0 &&
	// 	userProfile.following.find((el) => el._id === userProfile?.profile?._id);

	const checkForFollowers = () =>
		userProfile?.followers?.length > 0 &&
		userProfile.followers.find((el) => el._id === state?.user?._id);

	const addToFollowingHandler = async (e, followingId) => {
		e.stopPropagation();
		if (checkForFollowers()) {
			await dispatch(unFollowUser({ userId: state.user?._id, followingId }));
			return setFollowersCount((prevState) => prevState - 1);
		}
		dispatch(followUser({ userId: state.user?._id, followingId }));
		return setFollowersCount((prevState) => prevState + 1);
	};

	const onOpenHandler = (e) => {
		e.stopPropagation();
		e.preventDefault();
		return onOpen();
	};

	return (
		<Box minHeight="100vh">
			<Box w="100%" height="200px"></Box>
			<Divider color="#6e767d" />
			<Box w="100%" minHeight="250px" padding="12px 16px 0px" mb={4} position="relative">
				<Box position="absolute" top="-80px" mb={4}>
					<NameAvatar
						name={userProfile?.profile?.fullName || ""}
						width="150px"
						height="150px"
					/>
				</Box>
				{state.user?.userName === userName ? (
					<Flex justifyContent="flex-end">
						<Button
							variant="outline"
							borderRadius="2xl"
							color="#17bf63"
							borderColor="#17bf63"
							fontWeight="bold"
							onClick={(e) => onOpenHandler(e)}
						>
							Edit Profile
						</Button>
						<ModalComponent
							isOpen={isOpen}
							onClose={onClose}
							type="edit-profile"
							data={{
								userId: state.user?._id,
								fullName: state.user?.fullName,
								bio: state.user?.bio,
								location: state.user?.location,
								website: state.user?.website,
							}}
						/>
					</Flex>
				) : (
					<Flex justifyContent="flex-end">
						<Button
							variant="outline"
							borderRadius="2xl"
							color="#17bf63"
							borderColor="#17bf63"
							fontWeight="bold"
							onClick={(e) => addToFollowingHandler(e, userProfile?.profile?._id)}
						>
							{!checkForFollowers() ? "Follow" : "Unfollow"}
						</Button>
					</Flex>
				)}
				<Flex mb="12px" mt="20px">
					<Box>
						<Text fontWeight="bold" fontSize="lg" letterSpacing="wide">
							{userProfile?.profile?.fullName}
						</Text>
						<Text color="#6e767d">{userProfile?.profile?.userName}</Text>
					</Box>
				</Flex>
				<Flex mb={4}>
					<Text>{userProfile?.profile?.bio}</Text>
				</Flex>

				<HStack mb={3}>
					{userProfile?.profile?.location && (
						<Flex alignItems="center">
							<Icon
								as={IoLocationOutline}
								mr={2}
								w={5}
								h={5}
								fill="#6e767d"
								stroke="#6e767d"
							/>
							<Text>{userProfile?.profile?.location}</Text>
						</Flex>
					)}
					{userProfile?.profile?.website && (
						<Flex alignItems="center">
							<Icon as={BsLink} mr={2} w={5} h={5} fill="#6e767d" stroke="#6e767d" />
							<Link
								href={`https://${userProfile.profile.website}`}
								isExternal
								color="#17bf63"
							>
								{userProfile?.profile?.website}
							</Link>
						</Flex>
					)}
				</HStack>
				<Flex>
					<FollowingDetails />
					<FollowersDetails followersCount={followersCount} />
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
				{userProfile?.profile?.posts?.posts?.length > 0 ? (
					userProfile?.profile?.posts?.posts?.length > 0 &&
					userProfile?.profile?.posts?.posts?.map((post) => (
						<UserPostComponent key={post._id} post={post} user={userProfile?.profile} />
					))
				) : (
					<Text mt={5} mb={8} textAlign="center">
						No posts yet
					</Text>
				)}
			</Box>
		</Box>
	);
}

export default Profile;
