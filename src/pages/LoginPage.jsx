import { Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { useEffect, useState } from "react";

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {
    console.log("Senha :", senha)
    console.log("Email :", email)
}, [email, senha])

const FazerLogin = () =>{

console.log(senha)
console.log(email)
console.log("DEU BOM")


}

  return (
    <>
      <Center width="100vw" height="100vh">
        <VStack p="4" shadow="xl" rounded="lg">
          <VStack>
            <Text color="primary" fontFamily="Poppins" fontSize="2xl" fontWeight="semibold">Login</Text>
            <Text color="gray.500" fontFamily="Open Sans">Entre com seus dados para acessar sua conta.</Text>
          </VStack>
          <VStack w="100%">
            <Field label="Email" fontFamily="Poppins">
              <Input
                size="lg"
                w="100%"
                rounded="md"
                fontFamily="Open sans"
                fontSize="sm"
                placeholder="teste@gmal.com"
                _focus={{
                  borderColor: "primary",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field label="senha" fontFamily="Poppins">
              <Input
                size="lg"
                w="100%"
                rounded="md"
                fontFamily="Open sans"
                fontSize="sm"
                placeholder="senha"
                _focus={{
                  borderColor: "primary",
                }}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </Field>
          </VStack>
          <VStack>
            <Button colorPalette="green"
            size="lg" padding="16px 64px"
            rounded="full" onClick={() => FazerLogin()}>Entrar</Button>
            <Text display="flex" color="gray.500" fontFamily="Open Sans" gap="2">Ainda não tem uma conta?<Text color="primary" fontFamily="Open Sans">Registre-se</Text> </Text>
          </VStack>
        </VStack>
      </Center>
    </>
  );
};
export default LoginPage;
