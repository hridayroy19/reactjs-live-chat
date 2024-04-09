import Chats from "./Chats";
import Navbar from "./Navbar";
import Seacrch from "./Seacrch";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Navbar/>
            <Seacrch/>
            <Chats/>
            
        </div>
    );
};

export default Sidebar;