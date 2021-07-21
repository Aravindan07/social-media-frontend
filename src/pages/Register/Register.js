import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputRightElement, InputGroup } from "@chakra-ui/input";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { registerUser } from "../Login/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router";
import Icon from "@chakra-ui/icon";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function RegisterPage() {
	const initialState = {
		name: "",
		userName: "",
		email: "",
		password: "",
	};
	const [{ name, userName, email, password }, setState] = useState(initialState);

	const state = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const formSubmitHandler = async (e) => {
		console.log("Inside Form submit");
		e.preventDefault();
		await dispatch(registerUser({ name, userName, email, password }));
		return navigate("/home", { replace: true });
	};

	const onChangeHandler = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		return setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const [showPassword, setShowPassword] = useState(false);
	const handlePasswordVisibility = () => setShowPassword(!showPassword);

	return (
		<Flex
			flexDirection="column"
			width="full"
			align="center"
			justifyContent="center"
			minHeight="100vh"
		>
			<Heading size="lg" letterSpacing="wide">
				Create your account
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
				<form onSubmit={(e) => formSubmitHandler(e)}>
					<FormControl my={4} isRequired>
						<FormLabel>Name</FormLabel>
						<Input
							size="lg"
							variant="outline"
							type="name"
							name="name"
							placeholder="John Doe"
							borderColor="rgb(47, 51, 54)"
							focusBorderColor="#17bf63"
							value={name}
							onChange={(e) => onChangeHandler(e)}
						/>
					</FormControl>
					<FormControl my={4} isRequired>
						<FormLabel>UserName</FormLabel>
						<Input
							size="lg"
							variant="outline"
							type="text"
							name="userName"
							placeholder="johnDoe@123"
							borderColor="rgb(47, 51, 54)"
							focusBorderColor="#17bf63"
							value={userName}
							onChange={(e) => onChangeHandler(e)}
						/>
					</FormControl>
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
									{showPassword ? <Icon as={FaEyeSlash} /> : <Icon as={FaEye} />}
								</Button>
							</InputRightElement>
						</InputGroup>
					</FormControl>
					<Button
						isLoading={state.status === "loading" ? true : false}
						loadingText="Signing In"
						type="submit"
						color="#17bf63"
						borderColor="#17bf63"
						borderWidth="2px"
						variant="outline"
						width="full"
						mt={4}
					>
						Register
					</Button>
				</form>
			</Box>
			<Text mb={4}>
				Already have an account?
				<span style={{ color: "#17bf63", letterSpacing: "1px" }}>
					<Link to="/login"> Login</Link>
				</span>{" "}
			</Text>
		</Flex>
	);
}

export default RegisterPage;
