import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Adoption from "./pages/Adoption";
import Contact from "./pages/Contact";
import AddPet from "./pages/admin/pets/AddPet";
import ListPets from "./pages/admin/pets/ListPets";
import EditPet from "./pages/admin/pets/EditPet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="adoption" element={<Adoption />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route path="pets" element={<ListPets />} />
          <Route path="pets/add" element={<AddPet />} />
          <Route path="pets/edit/:id" element={<EditPet />} />
        </Route>
      </Routes>
    </BrowserRouter>   

  );
}

export default App;
