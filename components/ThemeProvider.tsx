'use client';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CssVarsProvider>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
