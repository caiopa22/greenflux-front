import { Box, Button, Drawer, Flex, HStack, Icon, IconButton, Switch, Text, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { ColorModeButton, useColorMode, useColorModeValue } from './ui/color-mode';
import { FaMoon, FaSignOutAlt, FaSun } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { useState } from 'react';

const Header = ({ isHomepage }) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [isLogged, setIsLogged] = useState(false);

    const isDark = colorMode === "light";
    const headerBg = useColorModeValue("secondary", "tertiary");

    const handleChange = () => {
        toggleColorMode();
    };

    const navigate = useNavigate();

    const handleRedirect = (pageName) => {
        const routes = {
            "Cálculo": "/inputs",
            "Início": "/",
            "Dashboard": "/dashboard",
        };

        return routes[pageName];
    };


    const drawerOptionStyles = {
        p: "4",
        fontFamily: "Open sans",
        fontSize: "md",
        rounded: "sm",
        transition: "0.25s",
        _hover: {
            cursor: "pointer",
            backgroundColor: "blackAlpha.300",
        },
    }


    return (
        <Flex justify="space-between" height="10vh" p="0 64px" bg={isHomepage ? "transparent" : headerBg} zIndex={9999} position="relative">
            <Flex gap="16" align="center">
                <Text
                    fontFamily="sansita"
                    fontSize="3xl"
                    onClick={() => navigate("/")}
                    cursor="pointer"
                    color="white"
                >Greenflux</Text>
                <HStack gap="4">
                    {["Início", "Cálculo", "Dashboard"].map((item) => (
                        <Text
                            fontFamily="Poppins"
                            fontSize="md"
                            key={item}
                            cursor="pointer"
                            color="white"
                            onClick={() => navigate(handleRedirect(item))}
                        >
                            {item}
                        </Text>
                    ))}
                </HStack>
            </Flex>
            <HStack>
                {isLogged ? (
                    <Flex>
                        <Text
                            fontFamily="Poppins"
                            fontSize="md"
                            fontWeight="light"
                            color="white"
                        >
                            Seja bem vindo,
                        </Text>
                        <Text
                            fontFamily="Poppins"
                            color="white"
                        >
                            Caio Pacheco
                        </Text>
                    </Flex>
                ) : (
                    <Flex gap="4">
                        <Button
                            variant="outline"
                            fontFamily="Poppins"
                            borderColor="#16FFA0"
                            color="#16FFA0"
                            _hover={{
                                bg: "rgba(5, 96, 58, 0.5)",
                            }}
                            rounded="full"
                            onClick={() => navigate("/register")}
                            size="md"
                        >
                            Registrar
                        </Button>
                        <Button
                            fontFamily="Poppins"
                            colorPalette='green'
                            rounded="full"
                            onClick={() => navigate("/login")}
                            size="md"
                        >
                            Entrar
                        </Button>
                    </Flex>
                )}

                {isLogged && (
                    <Drawer.Root colorPalette='green'>
                        <Drawer.Backdrop />
                        <Drawer.Trigger>
                            <IconButton variant="ghost" rounded="full">
                                <IoMdMenu color="white" />
                            </IconButton>
                        </Drawer.Trigger>
                        <Drawer.Positioner>
                            <Drawer.Content>
                                <Drawer.CloseTrigger />
                                <Drawer.Header>
                                    <Drawer.Title fontFamily='Poppins'>
                                        Meu perfil
                                    </Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body display='flex' flexDir='column' gap='4'>
                                    <Flex {...drawerOptionStyles} onClick={() => navigate("/mydashboards")}>
                                        <Text>Meus cálculos energéticos</Text>
                                    </Flex>
                                    <Flex {...drawerOptionStyles} justify="space-between">
                                        <Text>Tema</Text>
                                        <Switch.Root
                                            colorPalette="blue"
                                            size="lg"
                                            checked={isDark}
                                            onCheckedChange={handleChange}
                                        >
                                            <Switch.HiddenInput />
                                            <Switch.Control>
                                                <Switch.Thumb />
                                                <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
                                                    <Icon as={FaSun} color="yellow.400" />
                                                </Switch.Indicator>
                                            </Switch.Control>
                                        </Switch.Root>
                                    </Flex>
                                </Drawer.Body>
                                <Drawer.Footer display="flex" justifyContent="center" alignItems="center" p="24px 0">
                                    <Button
                                        variant="outline"
                                        colorPalette="red"
                                        rounded="full"
                                        onClick={() => {
                                            // Handle logout logic here
                                            navigate("/login");
                                        }}
                                        size="lg"
                                    >
                                        Sair
                                        <FaSignOutAlt />
                                    </Button>
                                </Drawer.Footer>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Drawer.Root>
                )}

            </HStack>
        </Flex>
    );
}

export default Header;