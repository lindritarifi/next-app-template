import '@mantine/core/styles.css';

import React from 'react';
<<<<<<< HEAD
import {
  ColorSchemeScript,
  MantineProvider,
  AppShell,
  Text,
  Burger,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
=======
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
>>>>>>> d0d24039ae0b4dd13cada41a1109a0859a1bf901
import { theme } from '../theme';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = React.useState(false); // State to handle menu toggle
  const theme = useMantineTheme();

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell
            navbarOffsetBreakpoint="sm"
            header={{
              height: 60, // Required configuration for the header
              offset: 0, // Optional, set if you want an offset
              collapsed: false, // Optional, set if the header is collapsible
            }}
            header={
              <AppShell.Header>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    padding: '0 16px',
                    backgroundColor: theme.colors.gray[0],
                    borderBottom: `1px solid ${theme.colors.gray[2]}`,
                  }}
                >
                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                  <Text fw={500} size="lg">
                    App Header
                  </Text>
                </div>
              </AppShell.Header>
            }
          >
            {children}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
