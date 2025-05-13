
import '../styles/globals.css';

export const metadata = {
  title: 'TODO App in Next JS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
