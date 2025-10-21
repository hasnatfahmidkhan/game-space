import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default RootLayout;
