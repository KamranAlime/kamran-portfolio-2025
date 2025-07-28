import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kamran Ali - Product Designer & Mentor',
  description: 'Product Designer and Mentor with experience at Tally100, Kidshub, and Fortune 50+ companies. Currently leading design at a B2B SaaS startup.',
  keywords: ['Product Designer', 'UX Designer', 'Portfolio', 'Kamran Ali', 'Design Mentor'],
  authors: [{ name: 'Kamran Ali' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Kamran Ali - Product Designer & Mentor',
    description: 'Product Designer and Mentor with experience at leading tech companies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kamran Ali - Product Designer & Mentor',
    description: 'Product Designer and Mentor with experience at leading tech companies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}