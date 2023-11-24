import { ChakraProvider } from '@chakra-ui/react';
import router from './router';
import { RouterProvider } from 'react-router-dom';


function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} /> 
    </ChakraProvider>
  )
}

export default App;
