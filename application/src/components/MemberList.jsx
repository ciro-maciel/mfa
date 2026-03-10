import React from "react";
import { Stack, Group, Text, Avatar, Divider, Box } from "@mantine/core";

const MemberList = ({ members }) => {
  return (
    <Stack gap="md">
      <Text fz={11} fw={800} c="gray.4" tt="uppercase" lts="1.5px">
        Membros com Acesso
      </Text>
      <Stack gap={4}>
        {members.map((member) => (
          <Group
            key={member.id}
            justify="space-between"
            py="sm"
            bd={{ bottom: "1px solid gray.2" }}
          >
            <Group gap="sm">
              <Avatar color="gray.9" variant="light" radius="xl" size="sm">
                {member.name.charAt(0)}
              </Avatar>
              <Stack gap={0}>
                <Text size="sm" fw={700} c="gray.9">
                  {member.name}
                </Text>
                <Text size="xs" c="gray.5">
                  {member.email}
                </Text>
              </Stack>
            </Group>
            <Text fz={10} fw={800} tt="uppercase" c="gray.4" lts="1px">
              {member.role}
            </Text>
          </Group>
        ))}
      </Stack>
    </Stack>
  );
};

export default MemberList;
