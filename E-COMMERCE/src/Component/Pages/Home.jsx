
import Categorylist from "../Categorylist";
import Herobanner from "../Herobanner";
import Productcard from "../Productcard";
import Producttag from "../Producttag";

export default function Home() {
  return (
    <>
     <Herobanner/>
     <div className="container my-5">
      <div className="row">
          <div className="col-md-9">
            <div className="row">  <Productcard/></div>
          </div>
          <div className="col-md-3 ">
            <Categorylist/>
            <Producttag/>
          </div>
      </div>
     </div>
     </>
  )
}
