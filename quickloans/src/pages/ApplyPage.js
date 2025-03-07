import { Toolbar } from "@mui/material";
import Calculator from "../components/Calculator/Calculator";
import TopAppBar from "../components/Navbar/AppBar";


function ApplyPage() {
    return (
      <div className="App">
        <TopAppBar></TopAppBar>
        <Toolbar></Toolbar>
        <Calculator></Calculator>
      </div>
    );
  }
  
  export default ApplyPage;