import { FaSignal, FaMicrophoneAlt } from "react-icons/fa";
import { IoIosRadio } from "react-icons/io";
import { FaPhoneSlash, FaGear } from "react-icons/fa6";
import { IoHeadset } from "react-icons/io5";
import logo from "../logo.svg";

const ControlBar = () => {
    return (
        <div className='text-cyan-50 bg-gray-900 p-2'>
            <div className="mx-2 my-2 ">
                <div className="flex text-green-600">
                    <FaSignal size={20} className="mr-3" /><span> Connection</span>
                    <div className="flex ml-auto gap-1">
                        <SideBarIcon icon={<IoIosRadio size={20} />} />
                        <SideBarIcon icon={<FaPhoneSlash size={20} />} />
                    </div>
                </div>
                <div className="text-gray-400">User from connected</div>
                <hr className="h-px w-auto my-1 bg-gray-200 dark:bg-gray-700 self-center" />
            </div>
            <div className="flex gap-1">
                <img src={logo} alt="?" width={32}/>
                <div className="grid">
                    <span className="text-s">User name</span>
                    <span className="text-gray-500 text-xs">User status</span>
                </div>
                <div className="flex ml-auto gap-1">
                <SideBarIcon icon={<FaMicrophoneAlt size={20}/>} />
                <SideBarIcon icon={<IoHeadset size={20}/>} />
                <SideBarIcon icon={<FaGear size={20}/>} />
                </div>
            </div>
        </div>
    );
}

const SideBarIcon = ({ icon, text = "Hover text effect" }) => (
    <div className="user-icon group">
        {icon}

        <span className="user-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default ControlBar;