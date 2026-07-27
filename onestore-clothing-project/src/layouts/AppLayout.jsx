import { Outlet, useNavigation } from "react-router-dom";
import NewNavbar from "../components/Navbar/NewNavbar";
import Footer from "../components/Footer/Footer";

const AppLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <h1>Loading...</h1>;
  return (
    <>
      <NewNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
