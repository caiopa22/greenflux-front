import { Box, Button, Flex, HStack, Text, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { ColorModeButton } from './ui/color-mode';

const Header = ({isHomepage}) => {

    const navigate = useNavigate();
    
    const handleRedirect = (pageName) => {
        const routes = {
            "Cálculo": "/inputs",
            "Início": "/",
            "Dashboard": "/dashboard",
        };
    
        return routes[pageName];
    };

    return (
        <Flex color="white" justify="space-between" p="16px 64px" bg={isHomepage ? "transparent" : "secondary"} zIndex={9999} position="relative">
            <Flex gap="16" >
                <Text
                    fontFamily="sansita"
                    fontSize="3xl"
                    onClick={() => navigate("/")}
                    cursor="pointer"
                >Greenflux</Text>
                <HStack gap="4">
                    {["Início", "Cálculo", "Dashboard"].map((item) => (
                        <Text
                            fontFamily="Poppins"
                            fontSize="md"
                            key={item}
                            cursor="pointer"
                            onClick={() => navigate(handleRedirect(item))}
                            >
                            {item}
                        </Text>
                    ))}
                </HStack>
            </Flex>
            <HStack>
                <ColorModeButton />
                <Text
                    fontFamily="Poppins"
                    fontSize="md"
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