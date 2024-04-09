

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
       <span>User not found!</span>
        
          <div className="userChat">
            <img src="" alt="" />
            <div className="userChatInfo">
              <span> name</span>
            </div>
          </div>
      </div>
    );
};

export default Seacrch;