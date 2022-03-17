import {
  useColorMode,
  Button,
  IconButton,
  Flex,
  Box,
  Link,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NextLink from "next/link";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const navHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      maxWidth="800px"
      minWidth="356px"
      width="100%"
      as="nav"
      px={4}
      my={8}
      mx="auto"
    >
      <ThemeSwitch />
      <Box>
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname === "/" ? navHoverBg[colorMode] : null
            }
            aria-label="Home"
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/projects" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
            backgroundColor={
              router.pathname === "/projects" ? navHoverBg[colorMode] : null
            }
            aria-label="Projects"
          >
            Projects
          </Button>
        </NextLink>
        <Link href="https://github.com/melisadeniz" passHref>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<AiFillGithub />}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/melisa-deniz" passHref>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<AiFillLinkedin />}
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
