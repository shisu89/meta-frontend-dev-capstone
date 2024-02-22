import './App.css';
import { Nav } from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <ChakraProvider>
        <Router>
          <head>
            <title>Little Lemon</title>
            <meta name="title" content="Little Lemon"/>
            <meta name="description" content="Little Lemon restaurant website"/>
            <meta name="og:image" content='../assets/images/Logo.svg'/>

          </head>
          <Nav />
          <Header />
          <Box as="main" m={6}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/orderonline" element={<OrderOnline />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
