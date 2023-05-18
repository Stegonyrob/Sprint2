import { useState } from "react";
import request from "../utils/url";
import Footer from './Footer';

export default function Register() {
    const [keys, setKeys] = useState({ name: "", lastName: "", dob: "", city: "", country: "", phone: "", email: "", password: "" });
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setKeys({ ...keys, [name]: value });
        setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, lastName, dob, city, country, phone, email, password } = keys

        const newUser = {
            name: name,
            lastName: lastName,
            dob: dob,
            city: city,
            country: country,
            phone: phone,
            email: email,
            password: password
        }

        const response = await request({
            method: "POST",
            endpoint: "users/register",
            body:  (newUser) ,
        });     

        if (response.id) {
            alert("Usuario creado con éxito")
            //   window.location.href = "/main";
        } else {
            alert("Ocurrió un error")
            setError(true);
        }
    } 

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}
                    className="p-3 mb-5 default-card"
                    id="form-register"
                >
                    {error && (
                        <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
                            Datos incorrectos
                        </div>
                    )}
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input onChange={handleChange} value={keys.name} name="name" type="text" className="form-control" id="name" required />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="lastName">Apellidos</label>
                                <input value={keys.lastName}
                                    onChange={handleChange} name="lastName" type="text" className="form-control" id="lastName" required />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="dob">Año de nacimiento</label>
                                <input value={keys.dob}
                                    onChange={handleChange} name="dob" type="text" className="form-control" id="dob" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="city">Ciudad</label>
                                <input value={keys.city}
                                    onChange={handleChange} name="city" type="text" className="form-control" id="city" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="country">País</label>
                                <input value={keys.country}
                                    onChange={handleChange} name="country" type="text" className="form-control" id="country" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input value={keys.phone}
                                    onChange={handleChange} name="phone" type="text" className="form-control" id="phone" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input value={keys.email}
                                    onChange={handleChange} name="email" type="email" className="form-control" id="email" required="" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input value={keys.password}
                                    onChange={handleChange} name="password"
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    required=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="form-group">
                                <label htmlFor="repeat-password">Repita Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="repeat-password"
                                    required=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" id="register-form-buttons">
                        <div className="col-md-11">
                            <button
                                type="submit"
                                className="btn btn-warning btn-block"
                                id="register-send"
                            >
                                Enviar
                            </button>
                            <button type="reset" className="btn btn-outline-warning btn-block">
                                Restablecer
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

