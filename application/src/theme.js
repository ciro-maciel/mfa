import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  fontFamily:
    'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

  // --- ZEN HEADINGS ---
  headings: {
    fontWeight: "900",
    sizes: {
      h1: { fontSize: rem(56), lineHeight: "1", letterSpacing: "-0.04em" },
      h2: { fontSize: rem(48), lineHeight: "1", letterSpacing: "-0.04em" },
      h3: { fontSize: rem(32), lineHeight: "1.1", letterSpacing: "-0.03em" },
      h4: { fontSize: rem(20), lineHeight: "1.2", letterSpacing: "-0.02em" },
    },
  },

  colors: {
    gray: [
      "#F9FAFB", // 0: App Background / Canvas
      "#F3F4F6", // 1: Hover / Subtle Feedback
      "#E5E7EB", // 2: Borders
      "#D1D5DB", // 3: Disabled
      "#9CA3AF", // 4: Zen Labels (Small Caps)
      "#6B7280", // 5: Text Secondary
      "#4B5563", // 6: Text Primary Soft
      "#374151", // 7: Text Primary
      "#1F2937", // 8: Headers
      "#11181C", // 9: Absolute Black
    ],
  },

  primaryColor: "dark",
  autoContrast: true,
  defaultRadius: "md",

  components: {
    Paper: {
      defaultProps: {
        withBorder: true,
        shadow: "none",
        radius: "lg",
      },
    },
    Card: {
      defaultProps: {
        withBorder: true,
        shadow: "none",
        radius: "lg",
        padding: "md",
      },
    },
    Table: {
      defaultProps: {
        verticalSpacing: "xs",
        horizontalSpacing: "md",
        withRowBorders: true,
        highlightOnHover: true,
      },
    },
    Button: {
      defaultProps: {
        size: "sm",
        fw: 500,
        radius: "md",
      },
    },
    TextInput: {
      defaultProps: {
        size: "sm",
        radius: "md",
      },
      styles: (theme) => ({
        input: {
          border: `1px solid ${theme.colors.gray[2]}`,
          "&:focus": {
            borderColor: theme.colors.gray[8],
          },
        },
      }),
    },
  },
});
