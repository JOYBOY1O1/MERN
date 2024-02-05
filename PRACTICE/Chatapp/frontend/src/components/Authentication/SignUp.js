import { FormControl, FormLabel, VStack } from "@chakra-ui/react";
import React from "react";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfrimpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  return (
    // main part to be added

    <VStack spacing="5px" color={"white"}>
      <FormControl id="first-name" isRequired>
        <FormLabel></FormLabel>
        <Input
          placeholder="Enter your Name"
          onchange={(e) => setName(e.target.value)}
        />
      </FormControl>
    </VStack>
  );
};

export default SignUp;
