import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputRightElement, InputGroup } from "@chakra-ui/input";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { loginUser } from "./usersSlice";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router";
import Icon from "@chakra-ui/icon";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";

function Login() {
	const initialState = {
		email: "",
		password: "",
	};
	const [{ email, password }, setState] = useState(initialState);

	const state = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const toast = useToast();

	const loginFormSubmitHandler = async (e) => {
		e.preventDefault();
		await dispatch(loginUser({ email, password }));
		state.status === "success" &&
			toast({
				title: "Logged In",
				position: "top-right",
				description: "You are successfully logged in",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		return navigate("/home", { replace: true });
	};

	const onChangeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		return setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const [showPassword, setShowPassword] = useState(false);
	const handlePasswordVisibility = () => setShowPassword(!showPassword);

	const useTestCredentials = () => {
		const name1 = "email";
		const name2 = "password";
		setState((prevState) => ({
			...prevState,
			[name1]: "aravindanravi123@gmail.com",
			[name2]: "aravind@123",
		}));
	};

	return (
		<>
			<Flex
				flexDirection="column"
				width="full"
				align="center"
				justifyContent="center"
				height="100vh"
			>
				<Heading size="lg" letterSpacing="wide">
					Login to your Account
				</Heading>
				<Box
					my={4}
					textAlign="left"
					p={8}
					width="50%"
					borderWidth={1}
					borderRadius={10}
					boxShadow="lg"
				>
					{state.message && state.status === "error" && (
						<ErrorMessage message={state.message} />
					)}
					<form onSubmit={(e) => loginFormSubmitHandler(e)}>
						<FormControl my={4} isRequired>
							<FormLabel>Email</FormLabel>
							<Input
								size="lg"
								variant="outline"
								type="email"
								name="email"
								placeholder="test@test.com"
								borderColor="rgb(47, 51, 54)"
								focusBorderColor="#17bf63"
								value={email}
								onChange={(e) => onChangeHandler(e)}
							/>
						</FormControl>
						<FormControl my={4} isRequired>
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input
									size="lg"
									variant="outline"
									type={showPassword ? "text" : "password"}
									name="password"
									placeholder="password"
									borderColor="rgb(47, 51, 54)"
									focusBorderColor="#17bf63"
									value={password}
									onChange={(e) => onChangeHandler(e)}
								/>
								<InputRightElement width="3rem">
									<Button
										mt="7px"
										h="2rem"
										size="sm"
										onClick={handlePasswordVisibility}
									>
										{showPassword ? (
											<Icon as={FaEyeSlash} />
										) : (
											<Icon as={FaEye} />
										)}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Button
							isLoading={state.status === "loading" ? true : false}
							loadingText="Checking..."
							type="submit"
							color="#17bf63"
							borderColor="#17bf63"
							borderWidth="2px"
							variant="outline"
							width="full"
							mt={4}
						>
							Sign In
						</Button>
					</form>
					<Button
						width="full"
						mt={4}
						color="white"
						bg="#17bf63"
						onClick={useTestCredentials}
					>
						Use Test Credentials
					</Button>
				</Box>
				<Text>
					Don't have an account?
					<span style={{ color: "#17bf63", letterSpacing: "1px" }}>
						<Link to="/register"> Register</Link>
					</span>{" "}
					now
				</Text>
			</Flex>
		</>
	);
}

export default Login;
