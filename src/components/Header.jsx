import { Heading } from "@chakra-ui/react";

function Header() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Heading fontSize='50px' textShadow='2px 2px 4px #00000033' color="#005ad79e" p={5} mt={5}>
        Todo App
      </Heading>
    </div>
  );
}

export default Header;