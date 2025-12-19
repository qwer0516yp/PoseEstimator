import type { Metadata } from 'next';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'PoseEstimator - Pose Estimation POC',
  description: 'A Next.js application with JoyUI for pose estimation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
