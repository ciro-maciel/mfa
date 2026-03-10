import React from "react";
import { Modal, TextInput, Stack, Button, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

const AddTokenModal = ({ opened, onClose, onSubmit }) => {
  const form = useForm({
    initialValues: {
      label: "",
      issuer: "",
      secret: "",
    },
    validate: {
      label: (value) => (value.length < 2 ? "Requerido" : null),
      secret: (value) => (value.length < 10 ? "Segredo inválido" : null),
    },
  });

  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Stack gap={4}>
          <Text fz={10} fw={800} c="gray.4" tt="uppercase" lts="1.5px">
            ADMIN PROTOCOL
          </Text>
          <Title order={2} fz={24} fw={900} lts="-0.02em">
            Adicionar Segurança
          </Title>
        </Stack>
      }
      padding={40}
      radius="lg"
      centered
      size="md"
      styles={{
        header: { marginBottom: 30 },
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="xl">
          <TextInput
            label={
              <Text fz={10} fw={800} c="gray.4" tt="uppercase" lts="1px" mb={4}>
                NOME DO SERVIÇO
              </Text>
            }
            placeholder="Ex: AWS Cloud Production"
            {...form.getInputProps("label")}
            required
            variant="default"
          />
          <TextInput
            label={
              <Text fz={10} fw={800} c="gray.4" tt="uppercase" lts="1px" mb={4}>
                EMISSOR (VISUAL)
              </Text>
            }
            placeholder="Amazon"
            {...form.getInputProps("issuer")}
          />
          <TextInput
            label={
              <Text fz={10} fw={800} c="gray.4" tt="uppercase" lts="1px" mb={4}>
                CHAVE SECRETA (BASE32)
              </Text>
            }
            placeholder="JBSW Y3DP EHPK 3PXP"
            {...form.getInputProps("secret")}
            required
          />
          <Button
            type="submit"
            fullWidth
            size="md"
            h={50}
            bg="gray.9"
            fw={800}
            tt="uppercase"
            lts="1px"
            mt="lg"
          >
            VALIDAR E SALVAR
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default AddTokenModal;
