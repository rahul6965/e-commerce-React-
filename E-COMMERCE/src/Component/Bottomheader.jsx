import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { MdOutlineHeadphones } from "react-icons/md";

export default function Bottomheader() {
  return (
     <div className="bottom-header">
        <div className="container">
            <div className="header-content d-flex justify-content-between align-items-center">
                <ul>
                    <li>< MdOutlineLocalFireDepartment size={17} /> Hot Deals</li>
                    <li>About</li>
                    <li>Shop </li>
                    {/* <li>Mega Menu </li>
                    <li>Vendors </li> */}
                    <li>Blog </li>
                    <li>Pages </li>
                    <li>Contact</li>
                </ul>
                <div className="contact-div d-flex gap-2">
                    <div className="content-icon d-flex align-items-center">
                        <MdOutlineHeadphones size={32} />
                    </div>
                    <div className="content-number">
                        <p className="mb-0 d-flex align-items-center">1900888123</p>
                        <span>24/7 Support Center</span>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}
