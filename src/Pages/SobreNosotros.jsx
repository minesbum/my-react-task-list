import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const SobreNosotros = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        About Us
      </Heading>
      <Text fontSize="xl">
      "Estamos encantados de presentarte nuestra aplicación, una plataforma diseñada con pasión y dedicación para mejorar tu productividad. Nuestra aplicación te brinda la capacidad de administrar tus tareas de manera eficiente y organizada. Con funciones intuitivas, puedes crear, editar y eliminar tareas, así como marcarlas como completadas. Utilizamos tecnologías de vanguardia, como React para la interfaz de usuario, React Router para una navegación fluida y una experiencia de usuario sin interrupciones, y una API backend potente para gestionar los datos de tus tareas de manera segura. Estamos comprometidos a ofrecer la mejor experiencia posible, y estamos emocionados de que seas parte de nuestra comunidad."
      </Text>
    </Box>
  );
};

export default SobreNosotros;
