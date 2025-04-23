import { Box, Button, Flex, HStack, Image, Text, Textarea, VStack, Wrap } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';

const Homepage = () => {

    const navigate = useNavigate();

    const infoData = [
        { label: "Certificações", value: "10+" },
        { label: "Empresas atendidas", value: "500+" },
        { label: "Suporte", value: "24/7" },
    ];

    const team = [
        {
            pfp: "/imgs/caio-pfp.jpg",
            name: "Caio Pacheco",
            roles: ["UX & UI Designer", "Frontend Developer"]
        },
        {
            pfp: "/imgs/kayky-pfp.jpg",
            name: "Kayky Crespo",
            roles: ["UX & UI Designer", "Frontend Developer"]
        },
        {
            pfp: "/imgs/luiza-pfp.jpg",
            name: "Luiza Lacerda",
            roles: ["Infraestrutura", "Backend Developer"]
        },
        {
            pfp: "/imgs/helen-pfp.png",
            name: "Helen Silva",
            roles: ["Pesquisador", "Backend Developer"]
        },
        {
            pfp: "/imgs/enzo-pfp.png",
            name: "Enzo Orlandi",
            roles: ["Pesquisador", "Backend Developer"]
        },
        {
            pfp: "/imgs/deivid-pfp.png",
            name: "Deivid Luan",
            roles: ["Pesquisador", "Escritor"]
        }
    ];

    const TeamProfile = (pfp, name, tags) => {
        const TeamProfileTag = (tag, index) => {
            return (
                <Box p="4px 16px" rounded="full" border="2px solid #16FFA0" bg="rgba(22, 255, 160, 0.2)" key={index}>
                    <Text fontFamily="Poppins" color="white">{tag}</Text>
                </Box>
            );
        };

        return (
            <VStack >
                <Image src={pfp} alt={name} boxSize="36" border="2px solid #16FFA0" borderRadius="full" />
                <Text fontFamily="Poppins" fontWeight="semibold" fontSize="xl" color="white">{name}</Text>
                {tags.map((tag, index) => TeamProfileTag(tag, index))}
            </VStack>
        );
    };


    return (
        <Box>
            <Header isHomepage={true} />
            <Image src="/imgs/homepage.png"
                alt="Homepage"
                objectFit="cover"
                top="0"
                left="0"
                zIndex={-1}
                w="100vw"
                height="100vh"
                position="absolute"
            />
            <Flex
                width="100%"
                align="center"
                height="90vh"
            >
                <VStack align="start" w="750px" ml="64px" zIndex={1}>
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
            <HStack bg="#042517" p="96px 0">
                <Flex ml="64px" mr="64px" align="center" justify="space-between" w="100%">
                    <VStack w="50%" align="start" gap="8">
                        <Text
                            color="white"
                            fontFamily="Poppins"
                            fontSize="4xl"
                            fontWeight="semibold"
                        >Ajude nós a construir a próxima revolução</Text>
                        <Text
                            fontFamily="Open sans"
                            color="white"
                            fontSize="2xl"
                        >
                            Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book
                        </Text>
                        <HStack gap="8">
                            {infoData.map((item, index) => (
                                <VStack align="start" key={index}>
                                    <Text color="#16FFA0" fontWeight="semibold" fontFamily="Poppins" fontSize="2xl">{item.label}</Text>
                                    <Text color="white" fontWeight="bold" fontFamily="Poppins" fontSize="3xl">{item.value}</Text>
                                </VStack>
                            ))}
                        </HStack>
                    </VStack>
                    <HStack gap="16">
                        <Image src="/imgs/people.png"
                            rounded="2xl"
                        />
                        <Image src="/imgs/light-bulb.png"
                            rounded="2xl"
                        />
                    </HStack>
                </Flex>
            </HStack>
            <HStack bg="#025332">
                <VStack gap="12" align="start" m="64px" w="100%">
                    <Text
                        fontFamily="Poppins"
                        fontWeight="bold"
                        fontSize="3xl"
                        color="white"
                    >
                        Conheça nossa equipe
                    </Text>
                    <Wrap justify="space-between" w="100%">
                        {team.map((member, index) => (
                            <React.Fragment key={index}>
                                {TeamProfile(member.pfp, member.name, member.roles)}
                            </React.Fragment>
                        ))}
                    </Wrap>
                </VStack>
            </HStack>
            <Footer />
        </Box>
    );
};

export default Homepage;