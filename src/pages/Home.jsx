import NavBar from "../Components/NavBar";
import TopNavBar from "../Components/TopNavBar";
import Routs from "./Routs";

const Home = () => {
  return (
    <>
      <div className="grid  grid-cols-12">
        <div className="col-span-2">
          <NavBar />
        </div>
        <div className="col-span-10">
          <TopNavBar />
          <Routs />
        </div>
      </div>
    </>
  );
};

export default Home;
