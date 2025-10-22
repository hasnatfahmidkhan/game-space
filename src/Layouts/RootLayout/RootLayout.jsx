import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";

const RootLayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Container className={"overflow-hidden py-8"}>
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </section>
  );
};

export default RootLayout;
