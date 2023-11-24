import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    InputGroup,
} from '@chakra-ui/react'
import axios from '../../api/axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const [_, setCookie] = useCookies(['access_token'])

    return (
        <Container
            maxW="lg"
            py={{ base: '12', md: '24' }}
            px={{ base: '0', sm: '8' }}
        >
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>
                            Log in to your account
                        </Heading>
                    </Stack>
                </Stack>
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg.surface' }}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    type="email"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">
                                    Password
                                </FormLabel>
                                <InputGroup>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        autoComplete="current-password"
                                        required
                                    />
                                </InputGroup>
                            </FormControl>
                        </Stack>
                        <Stack spacing="6">
                            <Button
                                onClick={(e) => {
                                    e.preventDefault()
                                    axios
                                        .post('/login', {
                                            email: email,
                                            password: password,
                                        })
                                        .then(({ data }) => {
                                            setCookie(
                                                'access_token',
                                                data.access_token
                                            )
                                            navigate('/')
                                        })
                                        .catch((err) => {
                                            console.error(err)
                                        })
                                }}
                                colorScheme="teal"
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}

export default Login
