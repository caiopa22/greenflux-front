import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Button, Center, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const MyDashboardspage = () => {

    const navigate = useNavigate();

    const dashboards = [
        {
            name: "Dashboard 1",
            date: "2023-10-01",
        },
        {
            name: "Dashboard 2",
            date: "2023-11-15",
        },
    ];


    return (
        <>
            <Header isHomepage={false} />

            <Center width="100%" height="100vh">
                <VStack h="100%" mt="24" align="start" w="700px">
                    <Text fontFamily="Poppins" fontSize="3xl">Meus Dashboards</Text>
                    <Text fontFamily="Open sans" fontSize="lg">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book
                    </Text>
                    <Flex mt="12" flexDir="column" align="start" width="100%" gap="4">
                        {dashboards.map((dashboard, index) => (
                            <HStack
                                onClick={() => navigate(`/dashboard`)}
                                cursor="pointer"
                                width="100%"
                                rounded="md"
                                justify="space-between"
                                key={index}
                                p="16px 24px"
                                shadow="md" >
                                <HStack>
                                    <Text fontFamily="Open sans" fontSize="lg">{dashboard.name}</Text>
                                    <Text fontFamily="Open sans" fontSize="sm">{dashboard.date}</Text>
                                </HStack>
                                <FaArrowRight />
                            </HStack>
                        ))}
                    </Flex>
                </VStack>
                <Button
                    position="fixed"
                    bottom="32px"
                    right="32px"
                    colorPalette="green"
                    size="lg"
                    rounded="full"
                    zIndex={1000} // optional, but useful to ensure it stays on top
                    onClick={() => navigate("/inputs")}
                >
                    Criar novo dashboard <FaPlus />
                </Button>
            </Center>
            <Footer isHomepage={false} />
        </>
    );
};

export default MyDashboardspage;