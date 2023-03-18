import { Inter } from '@next/font/google';
import '../styles/styles.css'

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
