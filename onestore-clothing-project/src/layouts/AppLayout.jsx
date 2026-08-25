import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const AppLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <h1>Loading...</h1>;
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen pt-[8ch]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
