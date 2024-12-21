import { LinkSimple, PaperPlaneTilt, Phone, VideoCamera, Gif, Microphone } from "@phosphor-icons/react"
import User01 from "../../images/user/user-01.png"
import Dropdown from "../../components/Dropdown"
import EmojiPicker from "../../components/EmojiPicker"
import { useState } from "react"
import UserInfo from "./UserInfo"
import Giphy from "../../components/Giphy"
import { useDispatch } from "react-redux"
import { ToggleAudioModal } from "../../redux/slices/app"

export default function Inbox() {

    const dispatch = useDispatch();

    const [userInfoOpen, setUserInfoOpen] = useState(false);

    const [gifOpen, setGifOpen] = useState(false);

    const handleToggleGif = (e) => {
        e.preventDefault();
        setGifOpen((prev) => !prev);
    }

    const handleToggleUserInfo = () => {
        setUserInfoOpen((prev) => !prev);
    };

    const handleMicClick = (e) => {   
        e.preventDefault();

        dispatch(ToggleAudioModal(true));
    }
    return (
        <>
            <div
                className={`flex h-full flex-col border-l border-stroke dark:border-strokedark dark:bg-boxdark-2 ${userInfoOpen ? 'xl:w-1/2' : 'xl:w-3/4'
                    }`}
            >

                {/* CHat Header */}
                <div className="sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5">
                    <div className="flex items-center" onClick={handleToggleUserInfo}>

                        <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-r-full ">

                            <img src={User01} alt="avatar" className="h-full w-full object-cover object-center" />

                        </div>
                        <div className="">

                            <h5 className="font-medium text-black dark:text-white">

                                Henry Dholi

                            </h5>
                            <p className="text-sm">
                                Reply to Message
                            </p>

                        </div>

                    </div>

                    <div className="flex flex-row items-center space-x-8">
                        <button>
                            <VideoCamera size={24} />
                        </button>
                        <button>
                            <Phone size={24} />
                        </button>
                        <Dropdown />
                    </div>

                </div>


                {/* List of Messages */}

                <div className="max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow">
                    <div className="max-w-125">
                        <p className="mb-2.5 text-sm  font-medium">
                            Andri Thomas
                        </p>
                        <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 text-black">
                            <p className="">
                                I want to make an appointment tomorrow 2pm to 5pm ?
                            </p>
                        </div>
                        <p className="text-xs">
                            1.55 pm
                        </p>
                    </div>

                    <div className="max-w-125 ml-auto">
                        <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
                            <p className="text-white">
                                Hello, I will check the schedule and infrm You
                            </p>
                        </div>
                        <p className="text-xs">
                            1.57 pm
                        </p>
                    </div>

                    <div className="max-w-125">
                        <p className="mb-2.5 text-sm  font-medium">
                            Andri Thomas
                        </p>
                        <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3  text-black">
                            <p className="">
                                I want to make an appointment tomorrow 2pm to 5pm ?
                            </p>
                        </div>
                        <p className="text-xs">
                            1.55 pm
                        </p>
                    </div>

                    <div className="max-w-125 ml-auto">
                        <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
                            <p className="text-white">
                                Hello, I will check the schedule and infrm You
                            </p>
                        </div>
                        <p className="text-xs">
                            1.57 pm
                        </p>
                    </div>
                    <div className="max-w-125">
                        <p className="mb-2.5 text-sm  font-medium">
                            Andri Thomas
                        </p>
                        <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 text-black ">
                            <p className="">
                                I want to make an appointment tomorrow 2pm to 5pm ?
                            </p>
                        </div>
                        <p className="text-xs">
                            1.55 pm
                        </p>
                    </div>

                    <div className="max-w-125 ml-auto">
                        <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
                            <p className="text-white">
                                Hello, I will check the schedule and infrm You
                            </p>
                        </div>
                        <p className="text-xs">
                            1.57 pm
                        </p>
                    </div>
                    <div className="max-w-125">
                        <p className="mb-2.5 text-sm  font-medium">
                            Andri Thomas
                        </p>
                        <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 text-black ">
                            <p className="">
                                I want to make an appointment tomorrow 2pm to 5pm ?
                            </p>
                        </div>
                        <p className="text-xs">
                            1.55 pm
                        </p>
                    </div>

                    <div className="max-w-125 ml-auto">
                        <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
                            <p className="text-white">
                                Hello, I will check the schedule and infrm You
                            </p>
                        </div>
                        <p className="text-xs">
                            1.57 pm
                        </p>
                    </div>
                    <div className="max-w-125">
                        <p className="mb-2.5 text-sm  font-medium">
                            Andri Thomas
                        </p>
                        <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 text-black ">
                            <p className="">
                                I want to make an appointment tomorrow 2pm to 5pm ?
                            </p>
                        </div>
                        <p className="text-xs">
                            1.55 pm
                        </p>
                    </div>

                    <div className="max-w-125 ml-auto">
                        <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
                            <p className="text-white">
                                Hello, I will check the schedule and infrm You
                            </p>
                        </div>
                        <p className="text-xs">
                            1.57 pm
                        </p>
                    </div>


                </div>

                {/* Input Section */}

                <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark ">

                    <form className="flex items-center justify-between space-x-4.5 ">

                        <div className="relative w-full ">

                            <input type="text" placeholder="Type Something Here........." className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white" />

                            <div className="absolute right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4">

                                <button onClick={handleMicClick} className="hover:text-primary">

                                    <Microphone size={24} />

                                </button>
                                <button className="hover:text-primary">

                                    <LinkSimple size={24} />

                                </button>
                                <button onClick={handleToggleGif}>
                                    <Gif size={24} />
                                </button>
                                <button className="hover:text-primary">

                                    <EmojiPicker />

                                </button>

                            </div>

                        </div>


                        <button className="flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90">
                            <PaperPlaneTilt size={24} weight="bold" />
                        </button>

                    </form>
                    {gifOpen && <Giphy />}
                </div>

            </div>

            {userInfoOpen && (
                <div className="w-1/4">
                    <UserInfo handleToggleUserInfo={handleToggleUserInfo} />
                </div>
            )}
        </>
    );
}
