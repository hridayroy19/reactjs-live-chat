
import Img from "../img/img.png"
import Attach from "../img/attach.png"

const Input = () => {
    return (
        <div className="input">
        <input
          type="text"
          placeholder="Type something..."
        //   onChange={(e) => setText(e.target.value)}
          value="writing message"
        />
        <div className="send">
          <img src={Attach} alt="" />
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            // onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src={Img} alt="" />
          </label>
          <button >Send</button>
        </div>
      </div>
    );
};

export default Input;