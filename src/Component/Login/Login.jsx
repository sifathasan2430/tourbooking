import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserAuthContext from "../../Context/Context";
import useAxiosSecure from "../../Customhook/useAxiosSecure";

const Login = () => {
  const { userLogin, loginWithGoogle, setLoading, setUser } = useContext(UserAuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [loading, setLocalLoading] = useState(false);

  // Check if user exists in backend
  const checkUserExists = async (email) => {
    try {
      const res = await axiosSecure.get(`/users/${email}`);
      return res.data.exists; // backend responds with { exists: true/false }
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  // Save user to backend with default role 'user'
  const saveUserToDB = async (userData) => {
    const userWithRole = { ...userData, role: "user" };
    await axiosSecure.post("/users", userWithRole);
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    setLocalLoading(true);
    setLoading(true);

    userLogin(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (!user?.email) throw new Error("No email returned");

        const exists = await checkUserExists(user.email);
        if (!exists) {
          await saveUserToDB({
            name: user.displayName || "User",
            email: user.email,
            photo: user.photoURL || "",
            createdAt: new Date(),
          });
        }

        setUser({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          role: "user",
        });

        Swal.fire({
          icon: "success",
          title: "Logged in successfully!",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
        setLocalLoading(false);
      });
  };

  const handleGoogleLogin = async () => {
    setLocalLoading(true);
    setLoading(true);
    try {
      const userCredential = await loginWithGoogle();
      const user = userCredential.user;
      if (!user?.email) throw new Error("No email returned from Google");

      const exists = await checkUserExists(user.email);
      if (!exists) {
        await saveUserToDB({
          name: user.displayName || "Google User",
          email: user.email,
          photo: user.photoURL || "",
          createdAt: new Date(),
        });
      }

      setUser({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        role: "user",
      });

      Swal.fire({
        icon: "success",
        title: "Logged in successfully!",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google login failed",
        text: error.message || error,
      });
    } finally {
      setLoading(false);
      setLocalLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 bg-gray-100">
      <form
        onSubmit={handleEmailLogin}
        className="bg-white p-8 rounded-md shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#f89200]">
          Login
        </h2>

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200]"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="password"
          required
          className="w-full mb-6 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#f89200] hover:bg-[#e08300] text-white py-2 rounded-md font-semibold transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full mt-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
