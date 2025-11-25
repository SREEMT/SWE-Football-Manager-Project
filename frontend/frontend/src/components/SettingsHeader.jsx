import { RxAvatar } from "react-icons/rx";
import { MdInbox } from "react-icons/md";
import inboxIcon from  "../assets/inbox.svg";
import "../styles/components/SettingsHeader.css"

export default function SettingsHeader() {

    return (
        <div className="settingsHeader">
            <span>Keeper</span>
            <ul>
                <li><MdInbox /></li>
                <li><RxAvatar /></li>
                <li><button className="btn-primary">Upload</button></li>
            </ul>
        </div>
    )
}