import AboveTheSea from "./components/AboveTheSea";
import EditorsPick from "./components/EditorsPick";
import FeaturedSpots from "./components/FeaturedSpots";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mountains from "./components/Mountains";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FeaturedSpots />
        <AboveTheSea />
        <EditorsPick />
        <Mountains />
        <Subscription />
      </main>
      <Footer />
    </div>
  );
}

export default App;
