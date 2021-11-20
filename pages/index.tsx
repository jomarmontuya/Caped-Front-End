import type { NextPage } from "next";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Content from "../components/content/content";

const Home: NextPage = () => {
  return (
    <div className="container-fluid container-md d-flex flex-column  ">
      {/* Navigation */}
      <Header />
      <div className="mt-4 d-flex flex-row">
        {/* Sidebar */}
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
