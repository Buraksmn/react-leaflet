"use client";

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
  Tabs,
  Text,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import MapContainer from "@app/components/MapContainer";
export default function Home() {
  return (
    <main>
      <Container mt={"9"}>
        <Heading mb={"2"} align={"center"}>
          React Leaflet Examples
        </Heading>
        <Card>
          <Tabs.Root defaultValue="empty-view">
            <Tabs.List>
              <Tabs.Trigger value="empty-view">Map View</Tabs.Trigger>

              <Tabs.Trigger value="markers" disabled={true}>
                Custom Markers
              </Tabs.Trigger>
              <Tabs.Trigger disabled={true} value="polygons">
                Polygons
              </Tabs.Trigger>
              <Tabs.Trigger disabled={true} value="edit-polygon">
                Edit Polygon
              </Tabs.Trigger>

              <Tabs.Trigger disabled={true} value="edit-polygon">
                Cluster Group
              </Tabs.Trigger>
              <Tabs.Trigger disabled={true} value="edit-polygon">
                Heat map
              </Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
              <Tabs.Content value="empty-view">
                <MapContainer />
              </Tabs.Content>

              <Tabs.Content value="markers">
                <MapContainer />
              </Tabs.Content>

              <Tabs.Content value="polygons">
                <MapContainer />
              </Tabs.Content>

              <Tabs.Content value="edit-polygon">
                <Text size="2">
                  <MapContainer />
                </Text>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </Card>
      </Container>
    </main>
  );
}
