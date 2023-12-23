
import React from 'react'

import { useFormik } from 'formik';

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../context/UserContext';
// import Navbar from './Navbar';

const Login = () => {

    const {setLoggedIn} = useUserContext();
    const navigate = useNavigate();

    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(true);

            const res = await fetch('http://localhost:5000/user/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            console.log(res.status);
            if (res.status === 200) {

                Swal.fire({
                    icon: "succsess",
                    text: "nice",
                    title: "you have succefully login"
                });
                setLoggedIn(true);
                const data = await res.json();
                sessionStorage.setItem('user', JSON.stringify(data));
                navigate('/topics');

            }
            else if (res.status === 401) {

                Swal.fire({
                    icon: "error",
                    tittle: "ERROR!",

                    text: "Invalida credential"
                });
            }
        },
    });
    return (
        <div>
            {/* <Navbar /> */}
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white "
                                style={{ borderRadius: "1rem",  backgroundColor:"lightcyan"}}
                            >
                                <div className="card-body p-3 text-center">
                                    <form className="mb-md-5 mt-md-4 " onSubmit={loginForm.handleSubmit}>
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and password!
                                        </p>
                                        <div className="form-outline  mb-4 p-3">
                                        <label className="form-label" htmlFor="typeEmailX">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={loginForm.values.email}
                                                onChange={loginForm.handleChange}
                                                className="form-control form-control-lg  "
                                            />
                                           
                                        </div>
                                        <div className="form-outline form-white mb-4 p-3">
                                        <label className="form-label" htmlFor="typePasswordX">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                value={loginForm.values.password}
                                                onChange={loginForm.handleChange}
                                                className="form-control form-control-lg "
                                            />
                                           
                                        </div>
                                        {/* <p className="small mb-5 pb-lg-2">
                                            <a className="text-white-50" href="#!">
                                                Forgot password?
                                            </a>
                                        </p> */}
                                        <button
                                            className="btn btn-outline-light btn-lg px-5 m-3"
                                            type="submit"
                                            disabled={loginForm.isSubmitting}
                                        >
                                            {loginForm.isSubmitting && <span className='spinner-border spinner-border-sm'></span>}
                                            Login
                                        </button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-facebook-f fa-lg" />
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-twitter fa-lg mx-4 px-2" />
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-google fa-lg" />
                                            </a>
                                        </div>
                                    </form>
                                    {/* <div>
                                        <p className="mb-0">
                                            Don't have an account?{" "}
                                            <a href="#!" className="text-white-50 fw-bold">
                                                Sign Up
                                            </a>
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login