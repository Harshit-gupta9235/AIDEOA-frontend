
import { Link } from "react-router-dom"
import DonationButton from "./components/DonationButton"
import DownloadIdButton from "./components/DownloadIdButton"
import Header from "./components/Header"
import LinkButton from "./components/LinkButton"
import LinkButtonv2 from "./components/LinkButtonv2"

const Landingpage = () => {
  return (
    <div className=" flex items-center justify-center flex-col gap-y-10 bg-landingpageBackgroundImage bg-cover min-h-screen p-10" >
        <div className="m-auto">
        <div>
            <Header/>
        </div>
        <div className="flex justify-center"> 
        <div className="grid grid-cols-2 gap-20 h-full items-center max-md:grid-cols-1 max-md:gap-5">
         
        <Link to="/membership">
        <LinkButton/>
        </Link>
        <Link to="/donation">
        <DonationButton/>
        </Link>
        <Link to="/idcard">
        <LinkButtonv2/>
        </Link>
        <Link to="#">
        <DownloadIdButton/>
        </Link>
       
       
       
        </div>
        </div>
        </div>
    </div>
  )
}
export default Landingpage