import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}