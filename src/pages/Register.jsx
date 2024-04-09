
const Register = () => {
    return (
<div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hridoy Chat</span>
        <span className="title">Register</span>
        <form>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src="" alt="" />
            <span>Add an avatar</span>
          </label>
          <button >Sign up</button>
        <span>Something went wrong</span>
        </form>
        <p>
          You do have an account
        </p>
      </div>
    </div>
    );
};

export default Register;