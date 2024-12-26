/*import DocumentPicker from "../components/DocumentPicker";
import GifModal from "../components/GifModal";
import MediaPicker from "../components/MediaPicker";
import VoiceRecorder from "../components/VoiceRecorder";
import { ChatList, MessageInbox, Sidebar } from "../section/chat";



export default function Messages() {
  return (
    <div className='h-screen overflow-hidden'>
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:flex">

       */ {/*Sidebar */ }

//<Sidebar />


{/*ChatList */ }
// <ChatList />


{/*Inbox */ }
// <MessageInbox />
//  </div>

// <GifModal />
// <VoiceRecorder />
// <MediaPicker />
// <DocumentPicker />
// </div>
// )
//}


import { ChatList, MessageInbox, } from "../section/chat";
import DocumentPicker from "../components/DocumentPicker";
import GifModal from "../components/GifModal";
import MediaPicker from "../components/MediaPicker";
import VoiceRecorder from "../components/VoiceRecorder";

export default function Messages() {
  return (

    <>
      <div className='flex w-full'>
        {/* ChatList  */}
        <ChatList />

        {/* Message List */}
        <MessageInbox />
      </div>
      <GifModal />
      <VoiceRecorder />
      <MediaPicker />
      <DocumentPicker />
    </>
  )
}
