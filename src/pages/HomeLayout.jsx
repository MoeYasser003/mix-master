import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div
            className="loading"
            style={{ position: "absolute", top: "46%", left: "46%" }}
          />
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
