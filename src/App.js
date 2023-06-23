import MainNavigation from "./components/Layout/MainNavigation";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Experties from "./components/Experties/Experties";
import SuccessStories from "./components/Experties/SuccessStories";
import Footer from "./components/Experties/footer";

function App() {
  return (
    <div>
      <MainNavigation />
      <AboutUs />
      <Experties />
      <SuccessStories />
      <Footer />
    </div>
  );
}

export default App;
