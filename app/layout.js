import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./home";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "blogApp",
  description: "about next data flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-full w-full bg-gray-200 flex justify-center items-center">
          <Home />
          {children}
          {/* <div className="h-full w-full bg-white "></div> */}
          {/* <ErrorBoundary fallback={<>lalchand</>}> </ErrorBoundary> */}
        </div>
      </body>
    </html>
  );
}
