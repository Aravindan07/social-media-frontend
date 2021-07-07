import { Divider, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { BsFillHeartFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import NameAvatar from "../NameAvatar/NameAvatar";

function NotificationCard({ data }) {
	const iconToShow = (isLiked, isFollowing, isCommented) => {
		if (isLiked) {
			return BsFillHeartFill;
		}
		if (isFollowing) {
			return HiOutlineUser;
		}
		if (isCommented) {
			return BiComment;
		}
	};

	const findName = (data, isLiked, isFollowing, isCommented) => {
		let slicedData = data;
		if (isLiked) {
			slicedData = data.slice(0, data.indexOf("liked"));
			return slicedData.join(" ");
		}
		if (isCommented) {
			slicedData = data.slice(0, data.indexOf("commented"));
			return slicedData.join(" ");
		}
		if (isFollowing) {
			slicedData = data.slice(0, data.indexOf("following") - 2);
			return slicedData.join(" ");
		}
	};

	return (
		<>
			{data.map((el, index) => {
				const text = el.split(" ");
				const isLiked = text.includes("liked");
				const isFollowing = text.includes("following");
				const isCommented = text.includes("commented");
				return (
					<React.Fragment key={index}>
						<Flex p={4} alignItems="center">
							<Icon
								as={iconToShow(isLiked, isFollowing, isCommented)}
								fill={isLiked ? "rgb(224,36,94)" : "blue.400"}
								stroke="blue.400"
								mr={6}
							/>
							<NameAvatar name={findName(text, isLiked, isFollowing, isCommented)} />
							<Text fontWeight="bold" ml={4}>
								{el}
							</Text>
						</Flex>
						<Divider color="#6e767d" />
					</React.Fragment>
				);
			})}
		</>
	);
}

export default NotificationCard;
