import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import placeholder from '../public/images/placeholder.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a front-end developer based in Ukraine!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Artem Voloshyn
          </Heading>
          <p> ( Front-End Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/avatar.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Artem is growing front-end developer </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Nyíregyháza (Hungary)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed Construction and architecture course of the Natural sciences
          and Humanities college (UzhNU)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Entered the 2nd year of the Faculty of Applied Mathematics and
          Cybernetics of Uzhgorod National University
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Self-educating in such areas as Programming, Math, Physics.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Resume
        </Heading>
        <BioSection>
          <Paragraph>
            I am a developing front-end junior developer. At the moment, I have
            no experience in commercial development. Currently, my work consists
            entirely of learning the basic technology stack: <br />
            <strong>
              React, React Native, Typescript, Node.js, Express, PostgreSQL{' '}
            </strong>
            and related pet projects like: <br />
            - To-do lists; <br />
            - Calendars; <br />
            - Modular parts of websites; <br />
            - Password generators; <br />
            - Chats; <br />
            - Questionnaires; <br />
            - Directories; <br />
            - Converters; <br />
            All examples of my projects as time goes on will go out in my GitHub
            profile. I'm on the lookout for a company where I can develop my
            hard and soft skills through training on hands-on tasks, and
            teamwork.
          </Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          My advantages
        </Heading>
        <BioSection>
          <Paragraph>
            My advantages over other candidates are: - Purposefulness;
            <br />
            - The amount of time I devote to learning/development;
            <br />
            - Emotional stability;
            <br />
            - Friendliness;
            <br />
            - Willingness to constantly evolve and look for better solutions in
            projects;
            <br />
            - Responsibility for deadlines;
            <br />- Sophomore of Applied Mathematics Faculty (Bachelor's
            degree);
          </Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Sports,{' '}
          <Link href="https://open.spotify.com/user/0e1lya9pm0bog8sszivw9a1tp">
            Music
          </Link>
          , Educating ( Especially math ), Traveling.
        </Paragraph>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ArtemVolsh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @artemvolsh
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/artemvolsh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @artemvolsh
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/artemvolsh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @artemvolsh
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem href="/" title="" thumbnail={placeholder}>
            Example Link
          </GridItem>
          <GridItem href="/" title="" thumbnail={placeholder}>
            Example Link
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
