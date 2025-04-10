import { Flex, HStack, SimpleGrid, Text, VStack, Wrap } from "@chakra-ui/react";
import { BiX } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsTwitter, BsX } from "react-icons/bs";

const Footer = ({isHomepage}) => {

    const titleStyles = {
        fontFamily: "poppins",
        fontWeight: "semibold",
    }

    return (
        <Flex mt={isHomepage ?? "90vh"} bg="secondary" p="16px 64px" justify="space-between">
            <HStack align="center" gap="8"> 
                <Text
                    fontFamily="sansita"
                    fontSize="4xl"
                    color="#16FFA0"
                >
                    Greenflux
                </Text>
                <Text fontFamily="Poppins">
                    Transformando consumo em consciência.
                </Text>
            </HStack>
            <HStack align="start" gap="8">
                <VStack align="start" >
                    <Text {...titleStyles}>Versão</Text>
                    <Text fontFamily="Open sans">1.0.0</Text>
                </VStack>
                <VStack align="start">
                    <Text {...titleStyles}>Redes sociais</Text>
                    <Wrap>
                        <BsInstagram cursor="pointer"/>
                        <BsTwitter cursor="pointer"/>
                        <BsLinkedin cursor="pointer"/>
                    </Wrap>
                </VStack>
                <VStack align="start">
                    <Text {...titleStyles}>Participantes</Text>
                    <SimpleGrid columns={2} gap="1">
                        {["Caio Pacheco - N089695", "Caio Pacheco - N089695", "Caio Pacheco - N089695", "Caio Pacheco - N089695", "Caio Pacheco - N089695"].map((item) => (
                            <Text fontSize="sm" fontFamily="Open sans" key={item}>{item}</Text>
                        ))}
                    </SimpleGrid>
                </VStack>
            </HStack>
        </Flex>
    )
}

export default Footer;