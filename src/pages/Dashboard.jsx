import { Box, GridItem, Button, ButtonGroup, Center, Flex, Grid, HStack, Input, Stack, Stat, Steps, Text, Timeline, VStack, Wrap, IconButton, Popover, Progress } from "@chakra-ui/react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Field } from "../components/ui/field";
import BubbleChart from "../components/charts/BubbleChart";
import RadarChart from "../components/charts/RadarChart";
import Footer from '../components/Footer';
import { LuCheck, LuClock, LuPackage, LuSearch, LuShip } from "react-icons/lu";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Tooltip } from "../components/ui/tooltip";

const Dashboard = () => {


    const generalInfo = [
        {
            title: "Total de dispositivos",
            value: "1000",
            description: "Número total de dispositivos registrados na rede, independentemente do status atual."
        },
        {
            title: "Dispositivos ativos",
            value: "800",
            description: "Dispositivos que estão atualmente conectados e operando normalmente."
        },
        {
            title: "Dispositivos inativos",
            value: "200",
            description: "Dispositivos que estão desligados, desconectados ou não estão se comunicando com a rede."
        },
        {
            title: "Dispositivos críticos",
            value: "50",
            description: "Dispositivos com falhas, alertas de segurança ou funcionamento comprometido que requerem atenção imediata."
        }
    ]


    const chartTitleStyle = {
        fontSize: "lg",
        fontFamily: "Poppins",
        color: "gray.700"
    }

    const generalInfoCard = (title, value, description) => {
        return (
            <VStack p="6" align="center" rounded="lg" shadow="inset">
                <Flex w="100%" align="center">
                    <Stat.Root>
                        <Stat.Label color="gray.700" fontFamily="Poppins" whiteSpace="nowrap">{title}</Stat.Label>
                        <Stat.ValueText>{value}</Stat.ValueText>
                    </Stat.Root>
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <IconButton rounded="full" variant="ghost">
                                <IoMdInformationCircleOutline />
                            </IconButton>
                        </Popover.Trigger>
                        <Popover.Positioner>
                            <Popover.Content>
                                <Popover.Arrow />
                                <Popover.Body>
                                    <Popover.Title fontFamily="Poppins" fontSize="md" fontWeight="medium">{title}</Popover.Title>
                                    <Text fontFamily="Open sans" my="2" >{description}</Text>
                                </Popover.Body>
                            </Popover.Content>
                        </Popover.Positioner>
                    </Popover.Root>
                </Flex>
                <Progress.Root size="lg" colorPalette="green" defaultValue={Math.floor(Math.random() * (100 - 0) + 0)} w="100%">
                    <HStack gap="5">
                        <Progress.Track flex="1">
                            <Progress.Range />
                        </Progress.Track>
                        <Progress.ValueText fontFamily="Poppins">{Math.floor(Math.random() * (100 - 0) + 0)}%</Progress.ValueText>
                    </HStack>
                </Progress.Root>
            </VStack>
        );
    }

    return (
        <>
            <Header isHomepage={false} />
            <VStack m="48px 64px" gap="6">
                <VStack align="start" w="100%" bg="white">
                    <VStack align="start" gap="0">
                        <Text fontFamily="Open sans" color="gray.400" fontSize="md">Dashboard</Text>
                        <Text display="flex" fontFamily="Poppins" fontSize="xl" >Visão geral "<Text fontWeight="semibold">Meu dashboard</Text>"</Text>
                    </VStack>
                    <Flex flexDir="column" gap="8" w="100%">
                        <Grid templateColumns="repeat(4, 1fr)" gap="6">
                            {generalInfo.map((info) => (
                                generalInfoCard(info.title, info.value, info.description)
                            ))}
                        </Grid>
                        <Grid templateColumns="repeat(3, 1fr)" gap="6">
                            <GridItem colSpan={2}>
                                <Flex flexDir="column" rounded="xl" shadow="lg" p="6">
                                    <Text {...chartTitleStyle}>Topologia de redes</Text>
                                    <Box>
                                        <BubbleChart />
                                    </Box>
                                </Flex>
                            </GridItem>
                            <GridItem colSpan={1} >
                                <VStack align="start" gap="6">
                                    <Text borderStart="3px solid" borderColor='primary' pl="4" fontFamily="Open sans" fontSize="2xl">Linha do tempo</Text>
                                    <Timeline.Root fontFamily="Open sans" size="xl" colorPalette="green">
                                        <Timeline.Item>
                                            <Timeline.Connector>
                                                <Timeline.Separator />
                                                <Timeline.Indicator>
                                                    <LuClock />
                                                </Timeline.Indicator>
                                            </Timeline.Connector>
                                            <Timeline.Content>
                                                <Timeline.Title>Começo do processo</Timeline.Title>
                                                <Timeline.Description>14:17 PM 16/04/2025</Timeline.Description>
                                                <Text textStyle="sm">
                                                    Criando servidor e <strong>buscando</strong> informações com base nos dados fornecidos.
                                                </Text>
                                            </Timeline.Content>
                                        </Timeline.Item>

                                        <Timeline.Item>
                                            <Timeline.Connector>
                                                <Timeline.Separator />
                                                <Timeline.Indicator>
                                                    <LuCheck />
                                                </Timeline.Indicator>
                                            </Timeline.Connector>
                                            <Timeline.Content>
                                                <Timeline.Title textStyle="sm">Servidor criado</Timeline.Title>
                                                <Timeline.Description>14:17 PM 16/04/2025</Timeline.Description>
                                            </Timeline.Content>
                                        </Timeline.Item>

                                        <Timeline.Item>
                                            <Timeline.Connector>
                                                <Timeline.Separator />
                                                <Timeline.Indicator>
                                                    <LuCheck />
                                                </Timeline.Indicator>
                                            </Timeline.Connector>
                                            <Timeline.Content>
                                                <Timeline.Title textStyle="sm">Buscando dados</Timeline.Title>
                                                <Timeline.Description>14:17 PM 16/04/2025</Timeline.Description>
                                            </Timeline.Content>
                                        </Timeline.Item>

                                        <Timeline.Item>
                                            <Timeline.Connector>
                                                <Timeline.Separator />
                                                <Timeline.Indicator>
                                                    <LuCheck />
                                                </Timeline.Indicator>
                                            </Timeline.Connector>
                                            <Timeline.Content>
                                                <Timeline.Title textStyle="sm">Cálculo de gasto</Timeline.Title>
                                                <Timeline.Description>14:17 PM 16/04/2025</Timeline.Description>
                                            </Timeline.Content>
                                        </Timeline.Item>

                                        <Timeline.Item>
                                            <Timeline.Connector>
                                                <Timeline.Separator />
                                                <Timeline.Indicator>
                                                    <LuCheck />
                                                </Timeline.Indicator>
                                            </Timeline.Connector>
                                            <Timeline.Content>
                                                <Timeline.Title textStyle="sm">Processo finalizado</Timeline.Title>
                                                <Timeline.Description>14:17 PM 16/04/2025</Timeline.Description>
                                            </Timeline.Content>
                                        </Timeline.Item>

                                    </Timeline.Root>
                                </VStack>
                            </GridItem>
                        </Grid>
                    </Flex>
                </VStack>
                <HStack w="100%">
                    <Button colorPalette="green" fontFamily="Open sans">Exportar para planilha <IoCloudDownloadOutline /></Button>
                </HStack>
            </VStack>
            <Footer isHomepage={false} />
        </>
    );
}

export default Dashboard;