

const Seacrch = () => {
    return (
       <div className="search">
        <div className="searchForm">
          <input
            type="text"
            placeholder="Find a user"
            // onKeyDown={handleKey}
            // onChange={(e) => setUsername(e.target.value)}
            value="username"
          />
        </div>
       {/* <span>User not found!</span> */}
        
          <div className="userChat">
            <img src="https://i.ibb.co/rQ35nKP/istockphoto-1354893114-612x612.jpg" alt="" />
            <div className="userChatInfo">
              <span> name</span>
            </div>
          </div>
      </div>
    );
};

export default Seacrch;