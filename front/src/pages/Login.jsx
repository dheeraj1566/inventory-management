
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-200 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form className="space-y-4 text-black">
          <div>
            <label className="block font-semibold text-black">Email:</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block font-semibold text-black">Password:</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded text-black"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-600 text-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
