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
import { BsLink } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ModalComponent } from "../../components";
import { dislikePost, likeComment, likePost } from "../../pages/Home/postSlice";

function Reactions({ data, noComments, postUser, postId, type }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const state = useSelector((state) => state.auth);

	const checkLiked = () =>
		data && data.likes.length > 0 && data.likes.find((el) => el._id === state.user?._id);

	// const checkLikedInComments = () => {
	// 	data?.likes?.length > 0 && data.likes.find((el) => el === state.user._id);
	// };

	// console.log("checkLikedInComments", checkLikedInComments());

	const onOpenHandler = (e) => {
		e.stopPropagation();
		return onOpen();
	};

	const dispatch = useDispatch();

	const likeClickHandler = (e) => {
		e.stopPropagation();
		//userPostId, likedUserId, postId
		if (checkLiked()) {
			return dispatch(
				dislikePost({
					userPostId: postUser,
					likedUserId: state?.user?._id,
					postId: data?._id,
				})
			);
		}
		dispatch(
			likePost({ userPostId: postUser, likedUserId: state?.user?._id, postId: data?._id })
		);
	};

	const commentLikeClickHandler = (e) => {
		e.stopPropagation();
		// userPostId, likedUserId, postId, commentId
		dispatch(
			likeComment({
				userPostId: postUser,
				likedUserId: state?.user?._id,
				postId: postId,
				commentId: data?._id,
			})
		);
	};

	const copyLinkForTweet = () => {
		const el = document.createElement("input");
		el.value = window.location.href;
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
	};

	return (
		<>
			<Box display="flex" justifyContent="space-between" width="80%" mt={4}>
				{noComments && (
					<Flex alignItems="center" role="group" cursor="pointer">
						<Box
							p={3}
							borderRadius="full"
							display="flex"
							alignItems="center"
							justifyContent="center"
							_hover={{ backgroundColor: "rgba(29,161,242,0.1)" }}
							onClick={(e) => onOpenHandler(e)}
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
							<ModalComponent
								isOpen={isOpen}
								onClose={onClose}
								type="add-reply"
								data={{ postUserId: postUser, postId: data?._id }}
							/>
						</Box>
						<Text
							fontSize="14px"
							color="#6e767d"
							marginLeft={1}
							_groupHover={{ color: "rgb(29,161,242)" }}
						>
							{data?.comments?.length}
						</Text>
					</Flex>
				)}

				<Flex alignItems="center" role="group" cursor="pointer">
					<Box
						p={3}
						borderRadius="full"
						display="flex"
						alignItems="center"
						justifyContent="center"
						_hover={{ backgroundColor: "rgba(224,36,94,0.1)" }}
						onClick={(e) =>
							type === "comment" ? commentLikeClickHandler(e) : likeClickHandler(e)
						}
					>
						<Icon
							as={BsFillHeartFill}
							w={4}
							h={4}
							fill={`${checkLiked() ? "rgb(224,36,94)" : "#6e767d"}`}
							stroke={`${checkLiked() ? "rgb(224,36,94)" : "#6e767d"}`}
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
						{data?.likes?.length}
					</Text>
				</Flex>
				<Menu>
					<MenuButton as={Box} role="group" cursor="pointer">
						<Box
							p={3}
							borderRadius="full"
							display="flex"
							alignItems="center"
							justifyContent="center"
							cursor="pointer"
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
						<MenuItem icon={<BsLink />} onClick={copyLinkForTweet}>
							Copy link to this tweet
						</MenuItem>
					</MenuList>
				</Menu>
			</Box>
		</>
	);
}

export default Reactions;
