import { Center, Flex, Input, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Field } from "../components/ui/field";

const Dashboard = () => {

    const [title, setTitle] = useState("");

    const handleTitle = (value) => {
        setTitle(value);
    }

    useEffect(() => {
        console.log(title);
    }, [title])

    return (
        <>
            <Header isHomepage={false} />
            <Center
                h="100vh"
                w="100vw"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
            >
                <Field label="Teste" fontFamily="Poppins" >
                    <Input
                        size='lg'
                        w="100%"
                        rounded='md'
                        fontFamily="Open sans"
                        fontSize="sm"
                        placeholder={title}
                        _focus={{
                            borderColor: "primary"
                        }}
                        value={title}
                        onChange={(e) => handleTitle(e.target.value)}
                    />
                </Field>
            </Center>
        </>
    );
}

export default Dashboard;