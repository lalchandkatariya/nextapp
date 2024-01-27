// "use client";

export const metadata = {
  title: "blog",
  description: "write your blog",
};

export default function RootLayout({ children }) {
  return <div className="py-24 sm:py-32">{children}</div>;
}
