import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-white shadow-md rounded w-96"
      >
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          className="input input-bordered w-full mb-2"
          {...register("name")}
          type="text"
          placeholder="name"
        />
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
          Register
        </button>
      </form>
    </div>
  );
}
