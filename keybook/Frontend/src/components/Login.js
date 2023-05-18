import { useState } from "react";
import request from "../utils/url";
import logo from '../imgs/logo.png';
import Footer from './Footer';
import { ButtonDefault } from "./ButtonDefault";

function MyLogo() {
    return (
        <img src={logo} alt="Keybook logo" id="main-logo" />
    );
}

export default function Login() {
    const [keys, setKeys] = useState({ email: "", password: "" });
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setKeys({ ...keys, [name]: value });
        setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = keys;

        const response = await request({
            method: "POST",
            endpoint: "users/auth",
            body: { email, password },
        });

        if (response.id) {
            alert("Usuario logueado. Redireccionando a home")
            localStorage.setItem("userData", JSON.stringify("userId", response.id))
            localStorage.setItem("token", JSON.stringify("token", response.token))
            // window.location.href = "./home.html";

        } else {
            alert("Ocurrió un error")
            setError(true);
        }
    }
    return (
        <>
            <div className="container login-container">
                <div className="card">
                    {MyLogo()}
                    <div id="slogan-container">
                        <h2>Keybook: donde los programadores comparten sus claves</h2>
                    </div>
                </div>
                <div id="login-form" >
                    <div className="d-flex justify-content-center h-100 login-container">
                        <div className="card">
                            <div className="card-header">
                                <h3>Incio de Sesión</h3>
                                {/* <div className="d-flex justify-content-end social_icon">
                                <span>
                                    <i className="fab fa-facebook-square" />
                                </span>
                                <span>
                                    <i className="fab fa-google-plus-square" />
                                </span>
                                <span>
                                    <i className="fab fa-twitter-square" />
                                </span>
                            </div> */}
                            </div>
                            {error && (
                                <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
                                    Usuario o contraseña incorrectos
                                </div>
                            )}
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">✉
                                                        <i className="fas fa-user" />
                                                    </span>
                                                </div>
                                                <input
                                                    value={keys.email}
                                                    onChange={handleChange}
                                                    name="email"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    id="email-login"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group form-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">🔑
                                                        {/* <i className="fas fa-key" /> */}
                                                    </span>
                                                </div>
                                                <input
                                                    value={keys.password}
                                                    onChange={handleChange}
                                                    name="password"
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Contraseña"
                                                    id="password-login"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row align-items-center remember">
                                                <input type="checkbox" />
                                                Recuerdame
                                            </div>
                                            <div className="form-group">
                                                <ButtonDefault type="submit" content="Login" id="register-send" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card-footer">
                                                <div className="d-flex justify-content-center links">
                                                    Si no tienes cuenta
                                                    <a href="./formRegistration.html">Registrate</a>
                                                </div>
                                                {/* <div className="d-flex justify-content-center">
                                                    <a href="./formResetPassword.html">
                                                        ¿Olvidaste tu contraseña?
                                                    </a>
                                                </div> */}
                                                {/* <div className="infinity-button" onclick="toggleGrayScale()">
                                            <i className="fa fa-infinity icon" title="Blanco y Negro" />
                                        </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}