import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-white shadow-md rounded w-96"
      >
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          className="input input-bordered w-full mb-2"
          {...register("email")}
          type="email"
          placeholder="Email"
        />
        <input
          className="input input-bordered w-full mb-2"
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary w-full" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
