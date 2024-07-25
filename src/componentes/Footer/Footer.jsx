import { Flex, Text, HStack } from '@chakra-ui/react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare  } from "react-icons/fa";


const Footer = () => {
    return (
        <Flex color='white' h='200px' width='100%' direction='column' align='center' justify='start' bg='rgb(49,42,42)'>
            <Text fontWeight='500' mt='3rem' mb='1rem'>REDES SOCIALES</Text>
            <HStack spacing='1.5rem'>
                <FaFacebookSquare cursor='pointer' size={30} />
                <FaInstagramSquare cursor='pointer' size={30} />
                <FaTwitterSquare cursor='pointer' size={30} />
                <FaWhatsappSquare cursor='pointer' size={30} />
            </HStack>
        </Flex>
    )
}

export default Footer