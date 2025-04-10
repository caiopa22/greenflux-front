import { Box, Button, Center, Flex, HStack, Image, Input, Steps, Text, Textarea, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import { useState } from 'react';
import { Field } from '../components/ui/field';
import { ColorModeButton } from '../components/ui/color-mode';
import Footer from '../components/Footer';
import { LuArrowBigLeft } from 'react-icons/lu';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Inputpage = () => {

    const defaultInput = () => {
        return (
            <Field >
                <Input
                    size='xl'
                    w="100%"
                    rounded='md'
                    placeholder="Email"
                    _focus={{
                        borderColor: "primary"
                    }}
                //value={login.login}
                //onChange={(e) => loginHandler("login", e.target.value)}
                />
            </Field>
        )
    }

    const steps = [
        {
            title: "Step 1",
            content: (
                <VStack gap="12" shadow="lg" color="black" maxW="800px" p="12">
                    <VStack align="start">
                        <Text
                            fontFamily="Poppins"
                            fontSize="2xl"
                            fontWeight="semibold"
                        >
                            Testes de input
                        </Text>
                        <Text
                            fontFamily="Open sans"
                            fontSize="md"
                            color="gray.600"
                        >
                            Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book
                        </Text>
                    </VStack>
                    <VStack gap="4" w="100%">
                        <HStack w="100%">
                            {defaultInput()}
                            {defaultInput()}
                        </HStack>
                        <HStack w="100%">
                            {defaultInput()}
                            {defaultInput()}
                        </HStack>
                    </VStack>
                </VStack>
            )
        },
        {
            title: "Step 2",
            description: "Step 2 description",
        },

    ]

    return (
        <>
            <Header />
            <Center bg="white" h="92.5vh">
                <Steps.Root maxW="800px">
                    <Steps.List>
                        {steps.map((step, index) => (
                            <Steps.Item key={index} index={index} title={step.title}>
                                <Steps.Indicator />
                                <Steps.Title>{step.title}</Steps.Title>
                                <Steps.Separator />
                            </Steps.Item>
                        ))}
                    </Steps.List>

                    {steps.map((step, index) => (
                        <Steps.Content key={index} index={index}>
                            {step.content}
                        </Steps.Content>
                    ))}
                    <Steps.CompletedContent />
                    <Flex justify="flex-end" gap="4">
                        <Steps.PrevTrigger asChild>
                            <Button
                                rounded="full"
                                variant="outline"
                                fontFamily="Poppins"
                            >
                                <FaArrowLeft />
                                Voltar
                            </Button>
                        </Steps.PrevTrigger>
                        <Steps.NextTrigger asChild>
                            <Button
                                rounded="full"
                                colorPalette="green"
                                fontFamily="Poppins"
                            >
                                Avançar
                                <FaArrowRight />
                            </Button>
                        </Steps.NextTrigger>
                    </Flex>
                </Steps.Root>
            </Center>
            <Footer isHomepage={false} />
        </>
    )
}

export default Inputpage;