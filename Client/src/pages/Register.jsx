import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import TextField from "../components/Formik/TextField";
import { RegisterSchema } from "../validation/Register";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import LoginAlerts from "../components/Alerts/LoginAlert";

const endPoint = "http://localhost:5000/api/v1/auth/register";
const Register = () => {
  const {
    connected,
    setConnected,
    setId,
    loading,
    setLoading,
    setSuccess,
    setError,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const values = {
    name: "",
    email: "",
    password: "",
  };
  useEffect(() => {
    connected ? navigate("/dashboard") : "";
  }, [connected]);
  const onSubmit = async (values) => {
    setLoading(true);
    const { ...data } = values;
    const res = await axios.post(endPoint, data).catch((err) => {
      const message =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        setLoading(false);
        setError(message.response.data.message);
        setTimeout(() => {
          setError(null);
          setLoading(false);
        }, 4000);
      }
    });
    if (res && res.data) {
      setLoading(false);
      setSuccess(res.data.message);
      setTimeout(() => {
        setSuccess(null);
        navigate("/dashboard");
        setId(localStorage.setItem("user_id", JSON.stringify(res.data.id)));
        localStorage.setItem("logged", true);
        setConnected(true);
      }, 5000);
    }
  };

  return (
    <Formik
      initialValues={values}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center md:justify-center px-4 py-6 mx-auto h-[92vh] md:h-[88.5vh]">
            <h3 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Register
            </h3>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <LoginAlerts />
                <Form className="space-y-4 md:space-y-6">
                  <div>
                    <TextField
                      type="name"
                      name="name"
                      label="Your Name"
                      placeholder="Ahmad"
                    />
                  </div>
                  <div>
                    <TextField
                      type="email"
                      name="email"
                      label="Your Email"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <TextField
                      type="password"
                      name="password"
                      label="Your Password"
                      placeholder="**************"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white w-full dark:hover:bg-gray-700"
                  >
                    Sign In{loading && "..."}
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
};

export default Register;
