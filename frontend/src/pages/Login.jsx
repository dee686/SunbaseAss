import {
     Flex,
     Box,
     FormControl,
     FormLabel,
     Input,
     InputGroup,
     InputRightElement,
     Stack,
     Button,
     Heading,
     Text,
     useColorModeValue,
     Link,
     Select,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {login} from '../redux/auth/auth.actions'
import useToastMsg from '../customHooks/useToastMsg';
export default function SigninCard() {
     const [showPassword, setShowPassword] = useState(false);
     const loginForm = useRef(null);
     const navigation = useNavigate();
     const toastMsg = useToastMsg();
     const dispatch = useDispatch();

     const handleLoginSubmission = (e) => {
          e.preventDefault();
          const loginDetails = {
               username: loginForm.current.username.value,
               // name: loginForm.current.name.value,
               password: loginForm.current.password.value,
          }
          console.table(loginDetails)
          dispatch(login(loginDetails,navigation,toastMsg));

     }

     return (
          <Flex
               minH={'100vh'}
               align={'center'}
               justify={'center'}
               bg={useColorModeValue('gray.50', 'gray.800')}>
               <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
                    <Stack align={'center'}>
                         <Heading fontSize={'4xl'} textAlign={'center'}>
                              Sign in
                         </Heading>
                         
                    </Stack>
                    <Box

                         rounded={'lg'}
                         
                         p={8}>
                         <Stack spacing={4}>
                              <form
                                   onSubmit={handleLoginSubmission}
                                   ref={loginForm}
                              >
                                   <FormControl id="username" isRequired>
                                        <FormLabel>Username</FormLabel>
                                        <Input type="text" />
                                   </FormControl>
                                 
                                   <FormControl id="password" isRequired>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup>
                                             <Input type={showPassword ? 'text' : 'password'} />
                                             <InputRightElement h={'full'}>
                                               
                                             </InputRightElement>
                                        </InputGroup>
                                   </FormControl>
                                   <Stack spacing={10} pt={2}>
                                        <Button
                                             type='submit'
                                             loadingText="Submitting"
                                             size="lg"
                                             bg={'red.400'}
                                             color={'black'}
                                             _hover={{
                                                  bg: 'blue.500',
                                             }}>
                                             Sign in
                                        </Button>
                                   </Stack>
                                   <Stack pt={6}>
                                        <Text align={'center'}>
                                             New user? <Link color={'blue.400'} href='/signup'>Sign up</Link>
                                        </Text>
                                   </Stack>
                              </form>
                         </Stack>
                    </Box>
               </Stack>
          </Flex>
     )
}