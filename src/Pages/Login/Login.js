import React, { useEffect, useRef } from "react";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import useToken from "../../hooks/useToken";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  // const emailRef = useRef("");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || gUser);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/home";
  useEffect(() => {
    if (token && from === "/login") {
      navigate("/");
    } else if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  if (gLoading || loading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  // const resetPassword = async () => {
  //   const email = emailRef.current.value;
  //   if (email) {
  //     await sendPasswordResetEmail(email);
  //     alert("Sent email");
  //   } else {
  //     alert("please enter your email");
  //   }
  // };
  return (
    <div className="h-screen flex justify-center items-center  login-page">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="">
          <img
            src="https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Album"
            className="w-full h-full"
          />
        </figure>
        <div className="card-body flex items-center justify-center">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-4xl font-bold text-primary">
                Login
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-primary font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    // ref={emailRef}
                    placeholder="your email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "provide valid email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-primary font-bold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="your password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "must be 6 character long",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-600">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {signInError}
                <input
                  className="btn w-full bg-orange-500 text-black hover:bg-orange-900  border-none max-w-xs "
                  value="login"
                  type="submit"
                />
              </form>
              <p>
                New to Scrap Tools Ltd?{" "}
                <Link className="text-primary" to="/signup">
                  please register
                </Link>
              </p>
              <p>
                Forgot your password?
                <button className="btn btn-link text-danger pe-auto">
                  Reset password
                </button>
              </p>
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline border-orange-600"
              >
                Continue with google <BsGoogle className="mx-2 text-primary"></BsGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
