

const Login = () => {
    return (
        <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Hridoy Chat</span>
          <span className="title">Login</span>
          <form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign in</button>
             <span>Something went wrong</span>
          </form>
          <p>You don't have an account?</p>
        </div>
      </div>
    );
};

export default Login;