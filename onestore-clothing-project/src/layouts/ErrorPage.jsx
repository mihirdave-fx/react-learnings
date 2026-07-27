import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col justify-center items-center h-100 gap-4">
      <h1>Error Page</h1>
      <button
        className="cursor-pointer bg-red-400 p-3 rounded-full"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
