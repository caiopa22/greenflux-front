import { Box, Button, Flex, HStack, Text, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const Header = ({isHomepage}) => {

    const navigate = useNavigate();

    return (
        <Flex justify="space-between" p="16px 64px" bg={isHomepage ? "transparent" : "secondary"} zIndex={9999} position="relative">
            <Flex gap="16">
                <Text
                    fontFamily="sansita"
                    fontSize="2xl"
                >Greenflux</Text>
                <HStack gap="4">
                    {["Início", "Cálculo", "Dashboard"].map((item) => (
                        <Text
                            fontFamily="Poppins"
                            fontSize="sm"
                            key={item}
                            cursor="pointer"
                            onClick={() => navigate("/inputs")}
                            >
                            {item}
                        </Text>
                    ))}
                </HStack>
            </Flex>
            <HStack>
                <Text
                    fontFamily="Poppins"
                    fontSize="sm"
                    fontWeight="light"
                    >
                    Seja bem vindo,
                </Text>
                <Text
                    fontFamily="Poppins"
                >
                    Caio Pacheco
                </Text>
            </HStack>
        </Flex>
    );
}

export default Header;