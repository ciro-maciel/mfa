import React, { useEffect } from "react";
import {
  Container,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Box,
  Paper,
  Group,
  Divider,
  Button,
} from "@mantine/core";
import { useTokenStore } from "./store/token-store";
import TokenStage from "./components/TokenStage";
import TokenList from "./components/TokenList";
import AddTokenModal from "./components/AddTokenModal";
import MemberList from "./components/MemberList";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";

function App() {
  const {
    tokens,
    members,
    fetchTokens,
    fetchMembers,
    activeTokenId,
    setActiveToken,
    getActiveToken,
  } = useTokenStore();
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    fetchTokens();
    fetchMembers();
  }, []);

  const activeToken = getActiveToken();

  return (
    <Container size="xl" py={80}>
      <Stack gap={60}>
        {/* Zen Header: O Anúncio */}
        <Group justify="space-between" align="flex-end">
          <Stack gap={4}>
            <Text fz={11} fw={800} c="gray.4" tt="uppercase" lts="1.5px">
              Corporate Storage
            </Text>
            <Title order={1} fz={56} fw={900} lts="-0.04em">
              Shared Authenticator
            </Title>
          </Stack>
          <Button
            variant="default"
            leftSection={<IconPlus size={16} stroke={1.5} />}
            onClick={open}
          >
            NOVO TOKEN
          </Button>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={120}>
          {/* Zen Stage Context: Performance */}
          <Box>
            <Paper
              p={60}
              style={{
                borderStyle: "dashed",
                minHeight: 450,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {activeToken ? (
                <TokenStage token={activeToken} />
              ) : (
                <Text fz={11} fw={800} c="gray.4" tt="uppercase" lts="1.5px">
                  Nenhum token selecionado
                </Text>
              )}
            </Paper>
          </Box>

          {/* Zen Dense Context: Data */}
          <Stack gap={40}>
            <Stack gap="md">
              <Text fz={11} fw={800} c="gray.4" tt="uppercase" lts="1.5px">
                Tokens Ativos ({tokens.length})
              </Text>
              <TokenList
                tokens={tokens}
                activeId={activeTokenId}
                onSelect={setActiveToken}
              />
            </Stack>

            <MemberList members={members} />
          </Stack>
        </SimpleGrid>

        <Box bd={{ top: "1px solid gray.2" }} pt="md">
          <Text fz={10} fw={800} c="gray.4" tt="uppercase" lts="1.5px">
            Zen Security Protocol v1.0.0
          </Text>
        </Box>

        <AddTokenModal
          opened={opened}
          onClose={close}
          onSubmit={(values) => {
            useTokenStore.getState().addToken(values);
          }}
        />
      </Stack>
    </Container>
  );
}

export default App;
