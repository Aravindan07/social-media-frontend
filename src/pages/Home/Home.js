import { Flex, VStack } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Compose, PostComponent } from "../../components";
import { fetchFollowingAndFollowers } from "../Profile/profileSlice";
import { fetchPosts } from "./postSlice";

function Home() {
	const state = useSelector((state) => state.auth);
	const posts = useSelector((state) => state.posts);

	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			if (state.status === "success") {
				dispatch(fetchPosts(state.user?._id));
				dispatch(fetchFollowingAndFollowers(state?.user?._id));
			}
		})();
	}, [dispatch, state.status, state.user?._id]);

	return (
		<VStack width="100%">
			<Flex flexDirection="column" width="full" align="center" minHeight="100%" zIndex="base">
				<Compose />
				{posts?.posts?.map((post) => (
					<PostComponent key={post._id} post={post} />
				))}
			</Flex>
		</VStack>
	);
}

export default Home;
