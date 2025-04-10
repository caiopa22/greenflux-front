import { Box, Button, Center, Flex, HStack, Image, Input, Spinner, Steps, Text, Textarea, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import { useCallback, useEffect, useState } from 'react';
import { Field } from '../components/ui/field';
import { ColorModeButton } from '../components/ui/color-mode';
import Footer from '../components/Footer';
import { LuArrowBigLeft } from 'react-icons/lu';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { debounce } from 'lodash';

const Inputpage = () => {

    const [neighborhood, setNeighborhood] = useState({
        name: "",
        population: 0,
        area: 0,
        pib: 0,
        yearlyBudget: 0,
    });

    const [resources, setResources] = useState({
        energyConsumption: 0,              // MWh/mês
        waterConsumption: 0,               // m³/mês
        solidWasteVolume: 0,               // ton/mês
        vegetationArea: 0,                 // km²
        estimatedCO2Emissions: 0           // ton/ano
    });

    const [economicProfile, setEconomicProfile] = useState({
        sectorDistribution: "",            // Ex: "50% indústria, 30% serviços, 20% agropecuária"
        mainActivities: "",                // Ex: "Turismo, agricultura, manufatura"
        companiesPerSector: 0
    });

    const [infrastructure, setInfrastructure] = useState({
        treatmentStations: "",             // Ex: "Sim, capacidade de 2000m³/dia"
        selectiveCollectionPercent: 0,     // %
        protectedAreas: 0,                 // km²
        treatedSewagePercent: 0            // %
    });

    const [transport, setTransport] = useState({
        vehicleFleet: 0,
        modalDistribution: "",             // Ex: "60% público, 40% privado"
        fuelConsumption: 0                 // litros/mês
    });

    const handleInputs = useCallback(debounce((name, value) => {
        const [group, key] = name.split('.');

        const stateMap = {
            neighborhood: [neighborhood, setNeighborhood],
            resources: [resources, setResources],
            economicProfile: [economicProfile, setEconomicProfile],
            infrastructure: [infrastructure, setInfrastructure],
            transport: [transport, setTransport],
        };

        const [state, setter] = stateMap[group] || [];

        if (setter) {
            const parsedValue = isNaN(value) || key.includes("name") || key.includes("Distribution") || key.includes("Activities") || key.includes("Stations")
                ? value
                : Number(value);

            setter(prev => ({ ...prev, [key]: parsedValue }));
        }
    }, 3), []);

    const defaultInput = (title, name, value) => {
        return (
            <Field label={title} fontFamily="Poppins" >
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
                    value={value}
                    onChange={(e) => handleInputs(name, e.target.value)}
                />
            </Field>
        )
    }

    const defaultForm = (title, description, inputs) => {
        return (
            <VStack gap="12" shadow="lg" maxW="700px" p="12">
                <VStack align="start">
                    <Text
                        fontFamily="Poppins"
                        fontSize="2xl"
                        fontWeight="semibold"
                    >
                        {title}
                    </Text>
                    <Text
                        fontFamily="Open sans"
                        fontSize="md"
                        color="gray.600"
                    >
                        {description}
                    </Text>
                </VStack>
                <VStack gap="4" w="100%">
                    {inputs}
                </VStack>
            </VStack>
        )
    }

    const steps = [
        {
            title: "Bairro",
            content: defaultForm(
                "Dados básicos do bairro",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                <>
                    <HStack w="100%">
                        {defaultInput("Nome do bairro", "neighborhood.name", neighborhood.name)}
                        {defaultInput("População", "neighborhood.population", neighborhood.population)}
                    </HStack>
                    <HStack w="100%">
                        {defaultInput("Área territorial (km²)", "neighborhood.area", neighborhood.area)}
                        {defaultInput("PIB", "neighborhood.pib", neighborhood.pib)}
                    </HStack>
                    {defaultInput("Orçamento anual para gestão ambiental", "neighborhood.yearlyBudget", neighborhood.yearlyBudget)}
                </>
            )
        },
        {
            title: "Recursos",
            content: defaultForm(
                "Uso de recursos",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                <>
                    <HStack w="100%">
                        {defaultInput("Consumo energético mensal (MWh)", "resources.energyConsumption", resources.energyConsumption)}
                        {defaultInput("Consumo de água (m³/mês)", "resources.waterConsumption", resources.waterConsumption)}
                    </HStack>
                    <HStack w="100%">
                        {defaultInput("Emissões de CO₂ estimadas (ton/ano)", "resources.estimatedCO2Emissions", resources.estimatedCO2Emissions)}
                        {defaultInput("Área de cobertura vegetal (km²)", "resources.vegetationArea", resources.vegetationArea)}
                    </HStack>
                    {defaultInput("Volume de resíduos sólidos gerados (ton/mês)", "resources.solidWasteVolume", resources.solidWasteVolume)}
                </>
            )
        },
        {
            title: "Perfil",
            content: defaultForm(
                "Perfil econômico",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                <>
                    {defaultInput("Distribuição setorial (% indústria, serviços, agropecuária)", "economicProfile.sectorDistribution", economicProfile.sectorDistribution)}
                    <HStack w="100%">
                        {defaultInput("Principais atividades econômicas", "economicProfile.mainActivities", economicProfile.mainActivities)}
                        {defaultInput("Número de empresas por setor", "economicProfile.companiesPerSector", economicProfile.companiesPerSector)}
                    </HStack>
                </>
            )
        },
        {
            title: "Infraestrutura",
            content: defaultForm(
                "Infraestrutura Ambiental",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
                <>
                    {defaultInput("Existência de estações de tratamento de água/esgoto (sim/não, capacidade)", "infrastructure.treatmentStations", infrastructure.treatmentStations)}
                    {defaultInput("Percentual de coleta seletiva", "infrastructure.selectiveCollectionPercent", infrastructure.selectiveCollectionPercent)}
                    <HStack w="100%">
                        {defaultInput("Áreas de proteção ambiental (km²)", "infrastructure.protectedAreas", infrastructure.protectedAreas)}
                        {defaultInput("Percentual de esgoto tratado", "infrastructure.treatedSewagePercent", infrastructure.treatedSewagePercent)}
                    </HStack>
                </>
            )
        },
        {
            title: "Transporte",
            content: defaultForm(
                "Dados de Transporte",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
                <>
                    {defaultInput("Distribuição modal (% transporte público, privado)", "transport.modalDistribution", transport.modalDistribution)}
                    <HStack w="100%">
                        {defaultInput("Frota de veículos", "transport.vehicleFleet", transport.vehicleFleet)}
                        {defaultInput("Consumo de combustíveis (litros/mês)", "transport.fuelConsumption", transport.fuelConsumption)}
                    </HStack>
                </>
            )
        }
    ];
    
    useEffect(() => {
        console.log("Dados do bairro:", neighborhood);
    })

    return (
        <>
            <Header />
            <Center h="100vh">
                <Box mb="24" height="100%">
                    <Steps.Root colorPalette="green" count={steps.length} >
                        <Steps.List
                            mt="24"
                            mb="12"
                        >
                            {steps.map((step, index) => (
                                <Steps.Item key={index} index={index} title={step.title}>
                                    <Steps.Trigger cursor="pointer">
                                        <Steps.Indicator />
                                        <Steps.Title>{step.title}</Steps.Title>
                                    </Steps.Trigger>
                                    <Steps.Separator />
                                </Steps.Item>
                            ))}
                        </Steps.List>

                        {steps.map((step, index) => (
                            <Steps.Content key={index} index={index}>
                                {step.content}
                            </Steps.Content>
                        ))}
                        <Steps.CompletedContent>
                            <VStack height="40vh" align="center" justify="center" gap="4">
                                <Spinner borderWidth="thick" size="xl" color="green.600" />
                                <Text>Carregando resultados</Text>
                            </VStack>
                        </Steps.CompletedContent>
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
                </Box>
            </Center>
            <Footer isHomepage={false} />
        </>
    )
}

export default Inputpage;