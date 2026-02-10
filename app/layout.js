import { CartProvider } from '../lib/CartContext';
import Header from '../components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}