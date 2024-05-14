import logo from "./logo.svg";
import "./App.css";
import VehicleForm from "./components/VehicleForm";
import VehiclesList from "./components/VehiclesList";
import { useEffect, useState } from "react";
import { createContext } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";

export const vehicleContext = createContext(null);

function App() {
  const vehicles = [
    {
      id: 1,
      vin: 123,
      make: "XYZ",
      model: "XYZ",
      year: 2005,
      image:
        "https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      vin: 123,
      make: "XYZ",
      model: "XYZ",
      year: 2005,
      image:
        "https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      vin: 123,
      make: "XYZ",
      model: "XYZ",
      year: 2005,
      image:
        "https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      vin: 123,
      make: "XYZ",
      model: "XYZ",
      year: 2005,
      image:
        "https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  const [vehiclesList, setVehiclesList] = useState(vehicles);
  const [newVehicle, setNewVehicle] = useState({});

  useEffect(()=> {
    setVehiclesList(prev=> [...prev, newVehicle]);  
  }, [newVehicle])

  return (
    <BrowserRouter>
    <vehicleContext.Provider value={setNewVehicle}  >
      <div className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<VehiclesList vehicles={vehicles} />}/>
          <Route path="/newvehicle" element={<VehicleForm/>}/>

        </Routes>
        
        
      </div>
    </vehicleContext.Provider>
    </BrowserRouter>
  );
}

export default App;
