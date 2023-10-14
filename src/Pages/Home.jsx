import { Image, Flex, Center, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="interfaz">
      <h1>Bienvenido a Mi Aplicación</h1>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Center>
          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://holatelcel.com/wp-content/uploads/2017/02/memes-gatos-1-696x696.jpg"
            alt="imagen de bienvenida"
          />
        </Center>
        <Heading 
        mt={10} 
        fontSize='50px'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontWeight='extrabold'
        >
          ¡AWESOME!
        </Heading>
      </Flex>

    </div>
  );
};

export default Home;

