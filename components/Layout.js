import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto text-dark">
      <Nav>
        <main>{children}</main>
      </Nav>
    </div>
  );
};

export default Layout;
