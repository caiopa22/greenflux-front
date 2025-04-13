import { Box, Button, ButtonGroup, Center, Flex, Input, Stack, Steps, Text, VStack, Wrap } from "@chakra-ui/react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Field } from "../components/ui/field";
import BubbleChart from "../components/charts/BubbleChart";
import RadarChart from "../components/charts/RadarChart";
import Footer from '../components/Footer';

const Dashboard = () => {


    const steps = [
        {
            title: "Step 1",
            description: "Step 1 description",
        },
        {
            title: "Step 2",
            description: "Step 2 description",
        },
        {
            title: "Step 3",
            description: "Step 3 description",
        },
    ]

    const chartTitleStyle = {
        fontSize: "lg",
        fontFamily: "Poppins",
    }

    return (
        <>
            <Header isHomepage={false} />
            <VStack m="48px 64px">
                <VStack align="start" w="100%">
                    <VStack align="start" gap="0">
                        <Text fontFamily="Open sans" color="gray.400" fontSize="md">Dashboard</Text>
                        <Text fontFamily="Poppins" fontSize="xl" >Visão geral</Text>
                    </VStack>
                    <Flex w="100%" gap="8">
                        <Flex flexDir="column" w="60%" shadow="md" p="4">
                            <Text {...chartTitleStyle}>Topologia de redes</Text>
                            <Box mt="24">
                                <BubbleChart />
                            </Box>
                        </Flex>
                        <Wrap w="40%" >
                            <Box shadow="md" p="4">
                                <Text {...chartTitleStyle}>Topologia de redes</Text>
                                <Box>
                                    <RadarChart />
                                </Box>
                            </Box>
                            <Box shadow="md" p="4">
                                <Text {...chartTitleStyle}>Topologia de redes</Text>
                                <Box>
                                    <RadarChart />
                                </Box>
                            </Box>
                            <Box shadow="md" p="4">
                                <Text {...chartTitleStyle}>Topologia de redes</Text>
                                <Box>
                                    <RadarChart />
                                </Box>
                            </Box>
                            <Box shadow="md" p="4">
                                <Text {...chartTitleStyle}>Topologia de redes</Text>
                                <Box>
                                    <RadarChart />
                                </Box>
                            </Box>
                        </Wrap>
                    </Flex>
                </VStack>
                <Box m="48px 64px" w="100%">
                    <Steps.Root
                        colorPalette="green"
                        orientation="vertical"
                        height="400px"
                        defaultStep={1}
                        count={steps.length}
                    >
                        <Steps.List>
                            {steps.map((step, index) => (
                                <Steps.Item key={index} index={index} title={step.title}>
                                    <Steps.Indicator />
                                    <Steps.Title>{step.title}</Steps.Title>
                                    <Steps.Separator />
                                </Steps.Item>
                            ))}
                        </Steps.List>

                        <Stack>
                            {steps.map((step, index) => (
                                <Steps.Content key={index} index={index}>
                                    {step.description}
                                </Steps.Content>
                            ))}
                            <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>
                            <ButtonGroup size="sm" variant="outline">
                                <Steps.PrevTrigger asChild>
                                    <Button>Prev</Button>
                                </Steps.PrevTrigger>
                                <Steps.NextTrigger asChild>
                                    <Button>Next</Button>
                                </Steps.NextTrigger>
                            </ButtonGroup>
                        </Stack>
                    </Steps.Root>
                </Box>
            </VStack>
            <Footer isHomepage={false}/>
        </>
    );
}

export default Dashboard;