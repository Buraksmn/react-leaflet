import "@radix-ui/themes/styles.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
export default function Home() {
  return (
    <main>
      <Container mt={"9"}>
        <Card
          style={{
            minWidth: "100%",
          }}
        >
          <Flex gap="3" justify={"center"} align="center">
            <Heading weight={"medium"} align={"center"}>
              MY TEMPLATE
            </Heading>
          </Flex>
        </Card>

        <Card mt={"5"}>
          <Flex justify={"center"} gap={"3"}>
            <Button variant={"soft"}>GİTHUB</Button>
          </Flex>
        </Card>

        <Card variant={"ghost"} mt={"5"}>
          <Flex direction={"column"} align={"center"} gap={"3"}>
            <Link target={"_blank"} href={"https://www.radix-ui.com/"}>
              <Text>https://www.radix-ui.com/</Text>
            </Link>
            <Link target={"_blank"} href={"https://nextjs.org/"}>
              <Text>https://nextjs.org//</Text>
            </Link>
          </Flex>
        </Card>
      </Container>
    </main>
  );
}
