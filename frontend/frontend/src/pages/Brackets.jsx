import { LuZoomIn } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { FaChevronUp } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GrAttachment } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";
import "../styles/Brackets.css";

export default function Brackets() {
    return (
        <div className="brackets-wrapper">
            <div className="container">
                <div className="brackets">
                    <div className="brackets-left">
                        <div className="brackets-card">
                            <button className="btn-icon"><LuZoomIn color="#000" size={20} /></button>
                            <div className="brackets-card-content">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ullam assumenda, molestiae numquam tenetur voluptatem nostrum perspiciatis blanditiis repellat, ab aperiam praesentium autem et distinctio expedita asperiores deleniti animi neque.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ullam assumenda, molestiae numquam tenetur voluptatem nostrum perspiciatis blanditiis repellat, ab aperiam praesentium autem et distinctio expedita asperiores deleniti animi neque.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ullam assumenda, molestiae numquam tenetur voluptatem nostrum perspiciatis blanditiis repellat, ab aperiam praesentium autem et distinctio expedita asperiores deleniti animi neque.</p>
                            </div>
                        </div>
                        <div className="brackets-grid">
                            <table>
                                <caption>Team Name</caption>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Line-up</th>
                                        <th>Fouls</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2}>Data</td>
                                        <td>Data</td>
                                        <td>Data</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Data</td>
                                        <td>Data</td>
                                        <td>Data</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Data</td>
                                        <td>Data</td>
                                        <td>Data</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <caption>Team Name</caption>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Line-up</th>
                                        <th>Fouls</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2}>Data</td>
                                        <td>Data</td>
                                        <td>Data</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Data</td>
                                        <td>Data</td>
                                        <td>Data</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Data</td>
                                        <td>Data</td>
                                        <td>Data</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="live-chat">
                        <div className="live-chat-upper-area">
                            <div className="live-chat-header">
                                <div className="live-chat-header-content">
                                    <h1>Live chat</h1>
                                    <GoDotFill color="red" size={20}/>
                                </div>
                                <FaChevronUp />
                            </div>
                            <div className="live-chat-box">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium autem veritatis deleniti, odio laboriosam consectetur fugiat excepturi, necessitatibus, eum repudiandae voluptas? Deserunt eveniet id excepturi delectus ut vero ratione.</p>
                            </div>
                        </div>
                        <form>
                            <input type="text" placeholder="Type in the chat.." />
                            <div className="live-chat-options">
                                <div className="live-chat-attachments">
                                    <button className="btn-icon"><MdOutlineEmojiEmotions color="#000" size={20} /></button>
                                    <button className="btn-icon"><GrAttachment color="#000" size={20} /></button>
                                </div>
                                <button className="btn-icon"><IoIosSend color="#000" size={20} /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}