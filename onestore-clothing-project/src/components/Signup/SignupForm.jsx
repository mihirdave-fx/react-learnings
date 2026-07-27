import { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="p-4 w-[450px] my-4 rounded-xl bg-white shadow-2xl">
            <div className="">
              <h1 className="text-center text-3xl mb-8 mt-4 uppercase font-bold">
                Sign up
              </h1>
              <p>Fill the from to create an account</p>
              <form onSubmit={handleFormSubmit} className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-xl font-semibold text-dark"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-[100%] p-3 mt-2 mb-4 inline-block border-none bg-gray-200 text-md focus:outline-none focus:bg-gray-100"
                  placeholder="Enter your firstname"
                  required
                  autoComplete="off"
                  value={user.firstName}
                  onChange={handleInputChange}
                />

                <label
                  htmlFor="lastName"
                  className="text-xl font-semibold text-dark"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-[100%] p-3 mt-2 mb-4 inline-block border-none bg-gray-200 text-md focus:outline-none focus:bg-gray-100"
                  placeholder="Enter your lastname"
                  required
                  autoComplete="off"
                  value={user.lastName}
                  onChange={handleInputChange}
                />

                <label
                  htmlFor="email"
                  className="text-xl font-semibold text-dark"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-[100%] p-3 mt-2 mb-4 inline-block border-none bg-gray-200 text-md focus:outline-none focus:bg-gray-100"
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInputChange}
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
                  value={user.password}
                  onChange={handleInputChange}
                />

                <div className="flex flex-col gap-4 justify-center text-center my-4">
                  <p>
                    By creating an account you agree to our{" "}
                    <a
                      className="text-blue-600 font-semibold hover:text-dark"
                      href="#"
                    >
                      Terms & Privacy
                    </a>
                  </p>
                  <div>
                    <button
                      type="submit"
                      className="bg-secondary text-black text-xl px-5 py-2 rounded-full hover:bg-dark hover:text-white cursor-pointer font-semibold w-40"
                    >
                      Sign up
                    </button>
                  </div>

                  <p>
                    Already have an account?{" "}
                    <Link
                      to="/sign-in"
                      className="text-blue-600 font-semibold hover:text-dark"
                    >
                      Login
                    </Link>
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

export default SignupForm;
