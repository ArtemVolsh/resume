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
import gallery from '../public/images/gallery.png'
import tnt from '../public/images/tnt.png'

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
          Employed as an Software Engineer (C#, ASP.NET, Blazor)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Resume
        </Heading>
        <BioSection>
          <Paragraph>
            I am currently in a Software Engineer position at{' '}
            <Link href="https://www.abona-erp.com/de/">Abona</Link>. I'm
            responsible for developing, and documenting Abona Track And Trace.
            In a free of work time, I enjoying developing my pet-projects as
            well as learning new technologies such as Neural Networks (Deep
            Learning). My stack: <br />
            - ASP.NET <br />
            - Blazor Server <br />
            - C# <br />
            - JavaScript <br />
            - React.js <br />
            - Node.js <br />
            - Express.js <br />
            - MongoDB <br />
            and noteworthy technologies: <br />
            Material UI, Ant-Design, DevExpress, DevExtreme, Sass, WebPack,
            TypeScript, Redux, RTK. <br />
            and planning: GraphQL, Apollo, Next.js, Nuxt.js
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
          <GridItem
            href="https://tnt-test.abona-erp.com"
            title="Abona Track And Trace"
            thumbnail={tnt}
          >
            Track And Trace
          </GridItem>
          <GridItem
            href="https://gallery-heroku.herokuapp.com"
            title="Gallery Pet-Project"
            thumbnail={gallery}
          >
            Simple Gallery
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
