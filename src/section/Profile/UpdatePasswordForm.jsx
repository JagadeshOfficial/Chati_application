
export default function UpdatePasswordForm() {
    return (
        <div className="flex flex-col w-full p-4 space-y-6">



            {/* Rest of the Profile Form */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-bodydark md:max-w-150 ">
                <form action="" className="">
                    <div className="flex flex-col gap-5.5 p-6.5">
                        {/* Current Password */}
                        <div className="">
                            <label className="mb-3 block text-black dark:text-white">
                                Current Password
                            </label>
                            <input type="text" placeholder="Enter Current Password" required className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transistion focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary " />
                        </div>

                        {/* New Password */}
                        <div className="">
                            <label className="mb-3 block text-black dark:text-white">
                                New Password
                            </label>
                            <input type="text" placeholder="Enter New Password" required className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transistion focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary " />
                        </div>
                        {/* Submit */}
                        <button className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-3 px-6 text-white transistion hover:bg-opacity-90">
                            Update
                        </button>


                    </div>
                </form>
            </div>
        </div>
    )
}
