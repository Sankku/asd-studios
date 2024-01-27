import '../styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      {children}
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
