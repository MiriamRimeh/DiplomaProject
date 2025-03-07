import { Toolbar } from "@mui/material";
import TopAppBar from "../components/Navbar/AppBar";
import ApplicationStepper from "../components/ApplicationForm/Stepper";


function ApplicationProcessPage() {
    return (
      <div className="App">
        <TopAppBar></TopAppBar>
        <Toolbar></Toolbar>
        <ApplicationStepper></ApplicationStepper>
      </div>
    );
  }
  
  export default ApplicationProcessPage;