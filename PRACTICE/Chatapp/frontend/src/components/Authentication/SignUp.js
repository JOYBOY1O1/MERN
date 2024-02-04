import { FormControl, FormLabel, VStack } from "@chakra-ui/react";
import React from "react";

const SignUp = () => {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[confirmpassword,setConfrimpassword]=useState();
  const[password,setPassword]=useState();
  const[pic,setPic]=useState();

  return <VStack spacing="5px">
    <FormControl>
      <FormLabel></FormLabel>
      <Input placeholder='Enter your Name' onchange={()=>}></Input>
    </FormControl>
    </VStack>;
};

export default SignUp;
