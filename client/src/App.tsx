import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>

          </Routes>
        </Provider>
      </BrowserRouter>
    </div >
  )
}

export default App
