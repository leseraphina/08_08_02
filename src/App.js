import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from './store02';

import Home from './components/Home';
import Cart from './components/Cart';
import Cart01 from './components/Cart01';
import Cart02 from './components/Cart02';

export default function App() {
 return (
 <Provider store={store}>
  <BrowserRouter>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart01" element={<Cart01 />} />
      <Route path="/cart02" element={<Cart02 />} />
    </Routes>
  </div>
  </BrowserRouter>
 </Provider>
 )
}
