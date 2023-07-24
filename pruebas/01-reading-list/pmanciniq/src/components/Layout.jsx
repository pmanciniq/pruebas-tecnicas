import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <main className="container">
        <Navbar />
        {children}
      </main>
    </>
  );
};
