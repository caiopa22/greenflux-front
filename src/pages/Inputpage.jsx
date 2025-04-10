import { Box, Button, Center, Flex, HStack, Image, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import { useState } from 'react';
import { Field } from '../components/ui/field';
import { ColorModeButton } from '../components/ui/color-mode';

const Inputpage = () => {

    const defaultInput = () => {
        return (
            <Field>
                <Input
                    size='xl'
                    borderColor='white'
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

    return (
        <>
            <Header />
            <Center bg="white" h="90.75vh">
                <VStack>
                    <Text>
                        Testes de input
                    </Text>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book
                    </Text>
                    <HStack>

                    </HStack>
                    <HStack>

                    </HStack>

                </VStack>
            </Center>
        </>
    )
}

export default Inputpage;