import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";




export default function index() {
  return (
    <div className='h-screen overflow-hidden'>
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">

       {/*Sidebar */ }

       <Sidebar />

       <Outlet/>
       </div>
       </div>
  )
}
