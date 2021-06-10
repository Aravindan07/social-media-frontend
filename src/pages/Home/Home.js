import { Flex, VStack } from "@chakra-ui/layout";
import { Compose, PostComponent } from "../../components";

function Home() {
	return (
		<VStack width="100%">
			<Flex flexDirection="column" width="full" align="center" minHeight="100%" zIndex="base">
				<Compose />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
				<PostComponent />
			</Flex>
		</VStack>
	);
}

export default Home;
