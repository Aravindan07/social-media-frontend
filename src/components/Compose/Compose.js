import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NameAvatar } from "../index";
import { addPost } from "../../pages/Home/postSlice";

function Compose() {
	const state = useSelector((state) => state.auth);

	const [post, setPost] = useState("");

	const onChangeHandler = (e) => {
		e.preventDefault();
		setPost(e.target.value);
	};

	const dispatch = useDispatch();

	const addPostHandler = () => {
		if (post === "") {
			return null;
		}
		return dispatch(addPost({ userId: state?.user?._id, post }));
	};

	return (
		<>
			<VStack
				minHeight="200px"
				width="100%"
				paddingLeft={4}
				paddingTop={4}
				paddingRight={4}
				alignItems="center"
				justifyContent="space-evenly"
			>
				<HStack width={["100%", "100%", "80%"]} alignSelf="center">
					<Flex
						alignItems="center"
						justifyContent="center"
						marginRight={4}
						cursor="pointer"
					>
						<Link to={`/${state.user?.userName}`}>
							<NameAvatar name={state?.user?.fullName || ""} />
						</Link>
					</Flex>
					<Textarea
						width="100%"
						size="xl"
						variant="flushed"
						resize="vertical"
						placeholder="What's on your mind?"
						fontSize="lg"
						_focus={{
							borderBottom: "2px solid #17bf63",
						}}
						value={post}
						onChange={(e) => onChangeHandler(e)}
					></Textarea>
				</HStack>
				<Flex width={["100%", "100%", "80%"]} justifyContent="flex-end">
					<Button
						bg="#17bf63"
						letterSpacing="wide"
						borderRadius="3xl"
						color="white"
						fontWeight="bold"
						fontSize="lg"
						_hover={{
							opacity: 0.8,
						}}
						onClick={addPostHandler}
						isDisabled={post === ""}
					>
						Tweet
					</Button>
				</Flex>
			</VStack>
			<Divider color="#6e767d" />
		</>
	);
}

export default Compose;
