import { Image, Text, HStack, Flex, VStack, Box, Button } from '@chakra-ui/react';

const MenuItemCard = ({ title, description, price, image }) => {
    return (
        <Flex m={4} p={4} flexDirection={'column'} textAlign={"center"} position={"relative"}>
            <VStack spacing={0}>
                <Box h="200px" w="260px" borderTopRadius="16" mb={0} backgroundImage={image} backgroundSize="cover" backgroundPosition="center" />
                <Box h="260px" w="260px" bg="#EDEFEE" p={4}>
                    <HStack justifyContent={"space-between"} mb={6}>
                        <Text fontWeight={"bold"}>{title}</Text>
                        <Text color="#EE9972">{price}</Text>
                    </HStack>
                    <Text textAlign={"left"} mb={8}>{description}</Text>
                    <HStack spacing={4} position={"absolute ; bottom: 40px"} >
                        <Text fontWeight={"bold"}>Order a delivery</Text>
                        <Image src="../assets/images/icons8-delivery-24.png" alt="Delivery" />
                    </HStack>
                </Box>
            </VStack>
        </Flex>
    );
}

const menuItems = [
    {
        title: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99",
        image: '../assets/images/greeksalad.jpg',
    },
    {
        title: "Bruschetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "$5.99",
        image: '../assets/images/bruchetta.png',
    },
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$5.00",
        image: '../assets/images/lemon dessert.jpg',
    }
]

const Hero = () => {
    return (
        <Flex as="section" bg="#495E57" p={8} justifyContent={"space-evenly"} flexDirection={{ base: "column", md: "row" }} alignItems={"center"}>
            <VStack spacing={4} align="center" width={"250px"} >
                <Text fontSize={40} color="#F4CE14">Little Lemon</Text>
                <Text fontSize={24} color="white">Chicago</Text>
                <Text color="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                <Button bg="#F4CE14">Reserve a Table</Button>
            </VStack>
            <Box m={8} width={"300px"} height={"350px"} borderRadius={16} backgroundImage={'../assets/images/restauranfood.jpg'} backgroundSize={"cover"} backgroundPosition={"center"}></Box>
        </Flex>
    )
}

const WeeklySpecials = () => {
    return (
        <Box as="section">
            <Flex mt={12} marginX={16} justifyContent={"space-evenly"} align="center" textAlign="center" flexDirection={{ base: "column", md: "row" }}>
                <Text fontSize={40}>This weeks specials!</Text>
                <Button m={4} bg="#F4CE14">Online Menu</Button>
            </Flex>
            <Flex bg="white" p={4} flexDirection={{ base: "column", md: "row" }} textAlign={"center"} justifyContent={"center"}>
                {menuItems.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </Flex>
        </Box>
    )
}

const Main = () => {
    return (
        <>
            <Box as="main">
                <Hero></Hero>
                <WeeklySpecials></WeeklySpecials>
            </Box>
        </>
    );
}

export default Main;