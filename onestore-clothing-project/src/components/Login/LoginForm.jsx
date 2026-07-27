import { useState } from "react";
import { Link } from "react-router-dom";
// import "./Registration.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const loginData = {
      username,
      password,
    };
    console.log(loginData);
  };

  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="p-4 w-[450px] my-4 rounded-xl bg-white shadow-2xl">
            <div className="">
              <h1 className="text-center text-3xl mb-8 mt-4 uppercase font-bold">
                Login
              </h1>
              <form onSubmit={handleFormSubmit} className="flex flex-col">
                <label
                  htmlFor="username"
                  className="text-xl font-semibold text-dark"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="w-[100%] p-3 mt-2 mb-4 inline-block border-none bg-gray-200 text-md focus:outline-none focus:bg-gray-100"
                  placeholder="Enter your username"
                  required
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label
                  htmlFor="password"
                  className="text-xl font-semibold text-dark"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-[100%] p-3 mt-2 mb-4 inline-block border-none bg-gray-200 text-md focus:outline-none focus:bg-gray-100"
                  placeholder="Enter your password"
                  required
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="flex flex-col gap-4 justify-center text-center my-4">
                  <div>
                    <button
                      type="submit"
                      className="bg-secondary text-black text-xl px-5 py-2 rounded-full hover:bg-dark hover:text-white cursor-pointer font-semibold w-40"
                    >
                      Login
                    </button>
                  </div>

                  <p>
                    Don't have an account?{" "}
                    <Link
                      to="/sign-up"
                      className="text-blue-600 font-semibold hover:text-dark"
                    >
                      Sign up
                    </Link>
                  </p>

                  <p>
                    <Link
                      to="/"
                      className="text-blue-600 font-semibold hover:text-dark"
                    >
                      Click here
                    </Link>{" "}
                    to go to the main page
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
