import "@/app/ui/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | React Counter",
    default: "React Counter",
  },
  description:
    "A simple web app that allows incrementing and decrementing of a numeric value starting from zero.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-mono antialiased'>{children}</body>
    </html>
  );
}
