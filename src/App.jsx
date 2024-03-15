import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListControler from "./pages/List/ListControler";
import HeaderView from "./components/Header/HeaderView";
import CreateController from "./pages/Create/CreateController";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListControler />} />
        <Route path="/create" element={<CreateController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
