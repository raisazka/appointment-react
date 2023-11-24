import {
    Card,
    CardHeader,
    CardBody,
    Stack,
    StackDivider,
    Box,
    Text,
    Heading,
} from '@chakra-ui/react'

const AppointmentCard = ({
    customer,
    doctorName,
    service,
    appointmentTime,
}) => {
    return (
        <Card border={`1px solid black`}>
            <CardHeader>
                <Heading size="md">Appointment</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Customer Detail
                        </Heading>
                        <Box>Name: {customer.name}</Box>
                        <Box>Email: {customer.email}</Box>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Doctor
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {doctorName}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Appointment Detail
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {`Appointment Time: ${new Date(
                                appointmentTime
                            ).toLocaleString()}, Service: ${service}`}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default AppointmentCard
