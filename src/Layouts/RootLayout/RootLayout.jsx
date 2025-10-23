import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader/Preloader";

const RootLayout = () => {
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    setPreload(true);
    setTimeout(() => {
      setPreload(false);
    }, 3900);
  }, []);

  if (preload) {
    return <Preloader />;
  }
  return (
    <section className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Container className={"overflow-hidden pt-4.5"}>
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        </Container>
      </main>
      <Footer></Footer>
    </section>
  );
};

export default RootLayout;
