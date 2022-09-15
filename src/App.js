import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EditProfilePage from "./Component/EditProfilePage";
import FollowersOrFollowing from "./Component/FollowersOrFollowing";
import Profile from "./Component/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />}/>

            <Route path="/editprofile" element={<EditProfilePage />} />
            <Route path="/followersorfollowing" element={<FollowersOrFollowing />} />

    

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
