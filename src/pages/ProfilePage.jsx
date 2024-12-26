import { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileForm } from "../section/Profile";
import UpdatePasswordForm from "../section/Profile/UpdatePasswordForm";




export default function ProfilePage() {
    const [openTab, setOpenTab] = useState(1);
    const activeClasses = "text-primary border-primary";
    const inactiveClasses = "border-transparent";
    return (
        <div className="w-full rounded-sm border border-stroke bg-white py-7.5 px-20 shadow-default dark:border-strokedark dark:bg-boxdark">

            {/* Buttons for Tabs */}
            <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke dark:border-strokedark sm:gap-10">
                <Link to="#" className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base 
               ${openTab === 1 ? activeClasses : inactiveClasses} `}
                    onClick={() => { (setOpenTab(1)) }}
                >
                    Profile
                </Link>

                <Link to="#" className={`border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base 
               ${openTab === 2 ? activeClasses : inactiveClasses} `}
                    onClick={() => { (setOpenTab(2)) }}
                >
                    Update Password
                </Link>
            </div>


            {/* content for Tabs */}
            <div className={`${openTab === 1 ? "block" : "hidden"}`}>
                    {/* Profile Section */}
                    <ProfileForm />
            </div>
            <div className={`${openTab === 2 ? "block" : "hidden"}`}>
                    {/* Update Password Form */}
                    <UpdatePasswordForm />
            </div>


        </div>
    )
}
