import { Toolbar } from "@mui/material";
//import TopAppBar from "../components/Navbar/AppBar";
import ProfileMenu from "../components/Profile/ProfileMenu";


function ProfilePage() {
    return (
      <div className="App">
        <Toolbar></Toolbar>
        <ProfileMenu></ProfileMenu>
      </div>
    );
  }
  
  export default ProfilePage;