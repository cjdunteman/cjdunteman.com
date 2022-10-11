import Nav from "../components/Nav";
import CommandMenu from "../components/cmdk";

export default function Layout({ children }) {
  return (
    <div>
      <CommandMenu />
      <div className="container mx-auto max-w-3xl">
        <Nav />
        <main>{children}</main>
      </div>
    </div>
  );
}
