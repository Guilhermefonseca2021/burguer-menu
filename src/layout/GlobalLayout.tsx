import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}
