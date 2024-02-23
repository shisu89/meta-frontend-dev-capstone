import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const theme = extendTheme({
  fonts: {
    heading: 'Markazi Text, serif',
    body: 'Karla, sans-serif',
  },
  }
);

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          <Header></Header>
          <Box as="main">
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
