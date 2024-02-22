import React from 'react';
import { ReactComponent as LogoSvg } from '../assets/images/Logo.svg';
import { Flex, HStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


const pages = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

const NavigationItems = () => {
    return (
        <>
            {pages.map((page) => (
                <Link as={RouterLink} to={page === 'Home' ? '/' : `/${page.replace(' ', '').toLowerCase()}`} key={page} px={2}>
                    {page}
                </Link>
            ))}
        </>
    );
}

const Nav = () => {
    return (
        <nav>
            <Flex as="nav" justifyContent="center" p="4" >
                <HStack spacing={12}>
                    <LogoSvg></LogoSvg>
                    <NavigationItems></NavigationItems>
                </HStack>
            </Flex>
        </nav>
    );
}

export { Nav, NavigationItems };