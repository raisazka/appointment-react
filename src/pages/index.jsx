import { Flex } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import AppointmentCard from '../components/AppointmentCard'

const Home = () => {
    return (
        <Navbar>
            <Flex minWidth="max-content" alignItems="center" gap="5">
                {[...Array(3)].map((x, i) => (
                    <AppointmentCard key={i} />
                ))}
            </Flex>
        </Navbar>
    )
}

export default Home
