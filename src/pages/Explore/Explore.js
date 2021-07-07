import { Box, Divider, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FollowersCard } from "../../components";
import { fetchAllUsers } from "./exploreSlice";
import { fetchFollowingAndFollowers } from "../Profile/profileSlice";

function Explore() {
	const dispatch = useDispatch();
	const allUsers = useSelector((state) => state.allUsers);
	const state = useSelector((state) => state.auth);

	useEffect(() => {
		if (state.status === "success") {
			dispatch(fetchAllUsers());
			dispatch(fetchFollowingAndFollowers(state?.user?._id));
		}
	}, [dispatch, state?.user?._id, state.status]);

	return (
		<Box>
			<Box p={4}>
				<Text fontWeight="800" fontSize="20px" lineHeight="24px" letterSpacing="wide">
					Who to follow
				</Text>
			</Box>
			<Divider color="#6e767d" />
			{allUsers?.users?.map((el) => (
				<FollowersCard key={el._id} user={el} />
			))}
		</Box>
	);
}

export default Explore;
