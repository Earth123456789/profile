import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Error404 from "./Error404";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>   
  )
}

export default App;
