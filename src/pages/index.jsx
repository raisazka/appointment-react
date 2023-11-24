import { Flex, Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import AppointmentCard from '../components/AppointmentCard'
import { useEffect, useState } from 'react'
import axios from '../api/axios'
import { useCookies } from 'react-cookie'

const Home = () => {
    const [appointments, setAppointments] = useState([])
    const [cookie, _] = useCookies()

    useEffect(() => {
        axios
            .get('/appointment', {
                headers: {
                    Authorization: cookie['access_token'],
                },
            })
            .then((res) => {
                const { data } = res.data
                setAppointments([...data])
            })
            .catch((err) => {
                console.error(err)
            })
    }, [cookie])

    return (
        <Navbar>
            <Flex minWidth="max-content" alignItems="center" gap="5">
                {cookie['access_token'] ? (
                    appointments.map((data) => {
                        return (
                            <AppointmentCard
                                key={data.id}
                                customer={data.customer}
                                doctorName={data.doctor}
                                appointmentTime={data.appointmentTime}
                                service={data.service}
                            />
                        )
                    })
                ) : (
                    <Text>Please Login First</Text>
                )}
            </Flex>
        </Navbar>
    )
}

export default Home
