import Nav from "../components/Nav";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto text-dark">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
