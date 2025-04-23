import { Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { useEffect, useState } from "react";

const RegistrePage = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaConfirm, setSenhaConfirm] = useState("")

  useEffect(() => {
    console.log("Nome :", name)
    console.log("Email :", email)
    console.log("Senha :", senha)
    console.log("SenhaConfirm :", senhaConfirm)
},[name, email, senha, senhaConfirm])

const FazerRegistro = () =>{

console.log(name)
console.log(email)
console.log(senha)
console.log(senhaConfirm)
console.log("DEU BOM")


}

  return (
    <>
      <Center width="100vw" height="100vh">
        <VStack p="4" shadow="xl" rounded="lg">
          <VStack>
            <Text color="primary" fontFamily="Poppins" fontSize="2xl" fontWeight="semibold">Criar conta</Text>
            <Text color="gray.500" fontFamily="Open Sans">Preencha os dados abaixo para criar sua conta.</Text>
          </VStack>
          <VStack w="100%">
          <Field label="Nome Completo" fontFamily="Poppins">
              <Input
                size="lg"
                w="100%"
                rounded="md"
                fontFamily="Open sans"
                fontSize="sm"
                _focus={{
                  borderColor: "primary",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
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
            <Field label="Confirme sua senha" fontFamily="Poppins">
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
                value={senhaConfirm}
                onChange={(e) => setSenhaConfirm(e.target.value)}
              />
            </Field>
          </VStack>
          <VStack>
            <Button colorPalette="green"
            size="lg" padding="16px 64px"
            rounded="full" onClick={() => FazerRegistro()}>Entrar</Button>
            <Text display="flex" color="gray.500" fontFamily="Open Sans" gap="2">Já tem uma conta?<Text color="primary" fontFamily="Open Sans">Faça login</Text> </Text>
          </VStack>
        </VStack>
      </Center>
    </>
  );
};
export default RegistrePage;
