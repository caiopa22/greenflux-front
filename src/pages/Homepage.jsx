import { Box, Button, Flex, HStack, Image, Text, Textarea, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';

const Homepage = () => {

    const navigate = useNavigate();

    return (
        <Box>
            <Header isHomepage={false}/>
            <Flex
                position="absolute"
                top="0"
                width="100%"
                height="100vh"
                align="center"
            >
                <Image src="/imgs/homepage.png"
                    alt="Homepage"
                    h="100%"
                    objectFit="cover"
                    top="0"
                    left="0"
                    zIndex={-1}
                    position="absolute"
                />

                <VStack align="start" w="750px" ml="64px" zIndex={1} >
                    <Text
                        fontFamily="sansita"
                        fontSize="7xl"
                        color="#16FFA0"
                    >
                        Greenflux
                    </Text>
                    <Text
                        fontFamily="Open sans"
                        fontSize="2xl"
                        color="white"
                    >
                        Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book
                    </Text>
                    <Text
                        fontFamily="Poppins"
                        fontWeight="semibold"
                        fontSize="3xl"
                        mt="4"
                        color="white"
                    >
                        Transformando consumo em consciência.
                    </Text>
                    <Button
                        mt="4"

                        colorPalette="green"
                        p="24px 32px"
                        size="lg"
                        rounded="full"
                        fontFamily="Poppins"
                        fontWeight="normal"
                        onClick={() => navigate("inputs")}
                    >
                        Fazer cálculo de gastos
                        <FaArrowRight />
                    </Button>
                </VStack>
            </Flex>
            <Footer />
        </Box>
    );
};

export default Homepage;