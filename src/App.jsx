import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FootBar from "./components/FootBar";
import TopBar from './components/TopBar';
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="App text-light overflow-x-hidden">
      <header className="App-header">
        <TopBar/>
        <Home/>
        <Gallery titolo="Trending Now" film="Harry Potter"/>
        <Gallery titolo="Watch it Again" film="Star Wars"/>
        <Gallery titolo="New Releases" film="Spongebob"/>
        <ProfilePage/>
        <FootBar/>
      </header>
    </div>
  );
}

export default App;
