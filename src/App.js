import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";

import MeetupsPage from "./pages/Meetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritePage from "./pages/Favorites";


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<MeetupsPage text = "Meetup Page" />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>  
  );
}

export default App;
