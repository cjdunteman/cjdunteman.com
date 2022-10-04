import Nav from "../components/Nav";
import CommandMenu from "../components/cmdk";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <CommandMenu />
      <div className="container mx-auto max-w-3xl">
        <Nav />
        <main>
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
