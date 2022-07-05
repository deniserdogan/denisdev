import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  useColorModeValue,
  Badge,
  Img,
} from '@chakra-ui/react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTelegram,
  FaVuejs,
} from 'react-icons/fa'
import { SiDjango, SiGraphql } from 'react-icons/si'
import '../index.css'

export default function Header() {
  return (
    <>
      <Flex>
        <Container maxW={'60ch'}>
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 30, md: '5rem' }}
            direction={'column'}
          >
            <Box w={'36'} marginX="auto">
              <Img
                borderRadius="full"
                src="https://i.ibb.co/ZJTFPGk/avatar.png"
              />
            </Box>
            <Box
              display="flex"
              backdropBlur="md"
              borderColor="black"
              background={useColorModeValue('gray.200', 'whiteAlpha.100')}
              paddingX="6"
              paddingY="3"
              borderRadius="lg"
              margin={'auto'}
              justifyContent={'center'}
              boxSizing="unset"
            >
              <Heading
                fontWeight={400}
                fontSize={{ base: 20, md: 40 }}
                alignItems="center"
                lineHeight={'110%'}
                fontFamily={'mono'}
              >
                Hey, I'm Deniz <span className="wave"> 👋</span>
              </Heading>
            </Box>
            <Box alignItems={'center'}>
              <Text
                fontWeight={300}
                fontFamily={'mono'}
                fontSize={{ md: 'large' }}
                marginX="1"
                boxSizing="content-box"
              >
                <span className="highlighted-word">
                  software engineering student
                </span>
                , <span className="highlighted-word">full-stack developer</span>{' '}
                and <span className="highlighted-word">tech enthusiast</span>.
              </Text>
            </Box>
            <Box justifyContent="center">
              <Badge
                as="a"
                variant="outline"
                marginBottom="5"
                fontSize="1.2rem"
              >
                stack
              </Badge>
              <Stack
                paddingX="14"
                justify="center"
                direction="row"
                wrap="wrap"
                fontSize="3.2rem"
                spacing="6"
              >
                <Link pointerEvents="none" isExternal>
                  <Icon as={FaPython} />
                </Link>
                <Link pointerEvents="none" isExternal>
                  <Icon as={SiDjango} />
                </Link>
                <Link pointerEvents="none" as="span">
                  <Icon as={FaJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaHtml5} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaCss3} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaVuejs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaNodeJs} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={SiGraphql} />
                </Link>
                <Link pointerEvents="none">
                  <Icon as={FaReact} />
                </Link>
              </Stack>
              <Badge
                as="a"
                variant="outline"
                marginBottom="2"
                fontSize="1.2rem"
              >
                On the web
              </Badge>
              <Stack as={Box} marginY="5" spacing={'5'}>
                <Text fontSize={'2xl'} fontWeight="thin">
                  <Link href="https://github.com/deniserdogan" isExternal>
                    <Icon as={FiGithub} /> @deniserdogan
                  </Link>
                </Text>
                <Text fontSize={'2xl'} fontWeight="thin">
                  <Link href="https://linkedin.com/in/deniserdogan" isExternal>
                    <Icon as={FiLinkedin} /> @deniserdogan
                  </Link>
                </Text>
                <Text fontSize={'2xl'} fontWeight="thin">
                  <Link href="https://t.me/deniselturco" isExternal>
                    <Icon as={FaTelegram} /> @deniselturco
                  </Link>
                </Text>
              </Stack>
              <Text marginTop="6" fontFamily={'mono'}>
                Get in touch <span>👉</span>{' '}
                <a className="mail" href="mailto:hakandenizerdogan@gmail.com">
                  hakandenizerdogan@gmail.com
                </a>
              </Text>
            </Box>
          </Stack>
        </Container>
      </Flex>
    </>
  )
}
