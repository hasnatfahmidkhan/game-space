import { Outlet, useLocation } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader/Preloader";
import { BounceLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
const RootLayout = () => {
  const [preload, setPreload] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  // preloader
  useEffect(() => {
    setPreload(true);
    setTimeout(() => {
      setPreload(false);
    }, 4000);
  }, []);

  // every navigation show loader at the outlet
  // useEffect(() => {
  //   setLoading(true);

  //   // scroll to top whenever route change
  //   window.scrollTo({ top: 0, behavior: "smooth" });

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 700);
  // }, [location.pathname]);

  // if (preload) {
  //   return <Preloader />;
  // }
  return (
    <section className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-30">
        <Navbar />
      </header>
      <main className="flex-1">
        <Container className={"overflow-hidden pb-6 pt-8"}>
          <PageWrapper>
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <BounceLoader color="#0ea5e9" />
              </div>
            ) : (
              <Outlet />
            )}
          </PageWrapper>
        </Container>
      </main>
      <Footer></Footer>
    </section>
  );
};

export default RootLayout;
