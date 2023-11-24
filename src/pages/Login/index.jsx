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

const Login = () => (
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
                            <Input id="email" type="email" />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <InputGroup>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                />
                            </InputGroup>
                        </FormControl>
                    </Stack>
                    <Stack spacing="6">
                        <Button colorScheme="teal">Sign in</Button>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Container>
)

export default Login
