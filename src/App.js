import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditProfilePage from "./Component/EditProfilePage";
import FollowersOrFollowing from "./Component/FollowersOrFollowing";
import Profile from "./Component/Profile";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/editprofile/:user_id" element={<EditProfilePage />} />
          <Route
            path="/followersorfollowing/:type"
            element={<FollowersOrFollowing />}
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
