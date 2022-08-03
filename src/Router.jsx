import { Routes, Route } from "react-router-dom";
import { Context } from "./pages/Context";
import { Custom } from "./pages/Custom";
import { Home } from "./pages/Home";
import { Ref } from "./pages/Ref";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/context' element={<Context />} />
      <Route path='/ref' element={<Ref />} />
      <Route path='/custom' element={<Custom />} />
    </Routes>
  );
}
