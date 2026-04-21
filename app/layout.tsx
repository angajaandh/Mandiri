import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; 

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Mandiri Credit Card Services | Terdepan, Terpercaya',
  description: 'Layanan Kartu Kredit Mandiri Terdepan dan Terpercaya.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${jakarta.variable} font-sans`}>
      <body className="bg-[#f8f9fa] text-[#1a1a1a] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
