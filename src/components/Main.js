import { Image, Text, HStack, Flex, VStack, Box, Button, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { menuItems, reviews } from './dummyData';


const MenuItemCard = ({ title, description, price, image }) => {
    return (
        <Flex m={4} p={4} flexDirection={'column'} textAlign={"center"} position={"relative"}>
            <VStack spacing={0}>
                <Box h="200px" w="260px" borderTopRadius="16" mb={0} backgroundImage={image} backgroundSize="cover" backgroundPosition="center" />
                <Box h="280px" w="260px" bg="#EDEFEE" p={4}>
                    <HStack justifyContent={"space-between"} mb={6}>
                        <Heading fontWeight={"medium"} fontSize={24}>{title}</Heading>
                        <Text color="#EE9972">{price}</Text>
                    </HStack>
                    <Text textAlign={"left"} mb={8}>{description}</Text>
                    <HStack spacing={4} position={"absolute ; bottom: 40px"} >
                        <Text as={RouterLink} to="/orderonline" fontWeight={"bold"}>Order a delivery</Text>
                        <Image src="./assets/images/icons/delivery.png" alt="Delivery" />
                    </HStack>
                </Box>
            </VStack>
        </Flex>
    );
}

const ReviewCard = ({ name, rating, review, profilePicture }) => {
    const stars = "⭐️".repeat(rating);
    return (
        <Flex m={4} p={4} flexDirection={'column'} textAlign={"center"} position={"relative"}>
            <VStack spacing={0}>
                <Box h="340px" w="260px" bg="#EDEFEE" p={4} borderRadius={16}>
                    <Text color="#333333" fontWeight={"bold"}>Rating: {stars}</Text>
                    <HStack justifyContent={"space-between"} mb={6}>
                        <Box backgroundImage={profilePicture} backgroundSize="cover" backgroundPosition="center" borderRadius="full" h="100px" w="100px" />
                        <Text fontWeight={"bold"}>{name}</Text>
                    </HStack>
                    <Text textAlign={"left"} mb={8}>{review}</Text>
                </Box>
            </VStack>
        </Flex>
    );
}

const Hero = () => {
    return (
        <Flex as="section" bg="#495E57" p={{base: 8, md: 0}} pb={{base:0, md: 8}} justifyContent={"space-evenly"} flexDirection={{ base: "column", md: "row" }} alignItems={"center"}>
            <VStack spacing={4} align="left" width={"300px"}>
                <Heading fontSize={64} color="#F4CE14" fontWeight={"regular"}>Little Lemon</Heading>
                <Heading fontSize={40} color="#EDEFEE" fontWeight={"regular"}>Chicago</Heading>
                <Text color="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</Text>
                <Button as={RouterLink} to="/reservations" bg="#F4CE14">Reserve a Table</Button>
            </VStack>
            <Box m={2} width={"300px"} height={{base: "300px", md: "400px"}} borderRadius={16} backgroundImage={'../assets/images/restauranfood.jpg'} backgroundSize={"cover"} backgroundPosition={"center"} position={"relative"} top={{base:10, md: 20}}></Box>
        </Flex>
    )
}

const WeeklySpecials = () => {
    return (
        <Box as="section" bg="white">
            <Flex mt={12} marginX={16} justifyContent={"space-evenly"} align="center" textAlign="center" flexDirection={{ base: "column", md: "row" }}>
                <Heading fontSize={64} fontWeight={"regular"}>This weeks specials!</Heading>
                <Button as={RouterLink} to="/menu" m={4} bg="#F4CE14">Online Menu</Button>
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

const Testimonials = () => {
    return (
        <Box as="section" bg="#495E57">
            <Flex justifyContent={'center'} align={'center'} pt={12}>
                <Heading fontSize={64} fontWeight={"regular"} color="#EDEFEE">Testimonials</Heading>
            </Flex>
            <Flex as="section" bg="#495E57" p={8} justifyContent={"space-evenly"} flexDirection={{ base: "column", md: "row" }} alignItems={"center"}>

                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        name={review.name}
                        rating={review.rating}
                        review={review.review}
                        profilePicture={review.profilePicture}
                    />
                ))
                }
            </Flex>
        </Box>
    )
}

const ChicagoBranch = () => {
    return (
        <Flex as="section" bg="#333333" p={16} justifyContent={"space-evenly"} flexDirection={{ base: "column", md: "row" }} alignItems={"center"}>
            <VStack spacing={4} align={"left"} width={{base: "auto", md: "400px"}} textAlign={"left"}>
                <Heading fontSize={64} color="#F4CE14" fontWeight={"regular"}>Little Lemon</Heading>
                <Heading fontSize={40} color="#EDEFEE" fontWeight={"regular"}>Chicago</Heading>
                <Text color="#EDEFEE">Welcome to Little Lemon, our Chicago branch of the restaurant chain. We are proud to serve the community with delicious and healthy food options. Our journey began in 2010 when our founder, John Smith, had a vision to create a restaurant that combines fresh ingredients with unique flavors. Since then, we have been dedicated to providing a memorable dining experience for our customers. Whether you're looking for a quick lunch or a cozy dinner, Little Lemon Chicago is the perfect place to satisfy your cravings. Come and taste the flavors that have made us a local favorite!</Text>
            </VStack>
            <Box mt={{base:8, md: 0}} width={"300px"} height={"350px"} borderRadius={16} backgroundImage={'../assets/images/restaurant.jpg'} backgroundSize={"cover"} backgroundPosition={"center"} transform={{md: "translate(10%, 0%)"}}></Box>
            <Box mt={{base:4, md:0}} mb={{base:0, md: 16}} width={"300px"} height={"350px"} borderRadius={16} backgroundImage={'../assets/images/restaurant chef B.jpg'} backgroundSize={"cover"} backgroundPosition={"center"} transform={{md: "translate(-80%, 20%)"}}></Box>
        </Flex>
    )
}

const Main = () => {
    return (
        <>
            <Box as="main">
                <Hero></Hero>
                <WeeklySpecials></WeeklySpecials>
                <Testimonials></Testimonials>
                <ChicagoBranch></ChicagoBranch>
            </Box>
        </>
    );
}

export default Main;