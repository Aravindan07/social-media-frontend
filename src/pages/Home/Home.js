import { Flex, VStack } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Compose, PostComponent } from "../../components";
import { fetchPosts } from "../../components/Post/postSlice";

function Home() {
	const state = useSelector((state) => state.users);
	const posts = useSelector((state) => state.posts);
	console.log("posts", posts);
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			if (state.status === "success") {
				dispatch(fetchPosts(state.user?._id));
			}
		})();
	}, [dispatch, state.status, state.user, state.user?._id]);
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
