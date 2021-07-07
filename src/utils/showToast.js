import { useToast } from "@chakra-ui/toast";

export const useShowToast = (status, title, description) => {
	const toast = useToast();
	return toast({
		title: title,
		description: description,
		status: status,
		duration: 5000,
		isClosable: true,
		position: "top-right",
	});
};
