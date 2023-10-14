import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Tareas = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Your Tasks
      </Heading>
      <Text fontSize="xl">
        Aquí podrás gestionar tus tareas. Aguegar, actualizar y completar tareas facilmente con nuestro administrador de tareas intuitivo.
      </Text>
    </Box>
  );
};

export default Tareas;