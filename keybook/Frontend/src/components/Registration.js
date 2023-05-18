import { useState } from "react";
import request from "../utils/url";
import Footer from './Footer';
import { InputRegister } from "./InputRegister";

export default function Register() {
    const [keys, setKeys] = useState({ name: "", lastName: "", dob: "", city: "", country: "", phone: "", email: "", password: "" });
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setKeys({ ...keys, [name]: value });
        console.log(keys)
        setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, lastName, dob, city, country, phone, email, password } = keys

        const response = await request({
            method: "POST",
            endpoint: "users/register",
            body: { name, lastName, dob, city, country, phone, email, password },
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
                    <InputRegister label="Nombre"
                        type="text"
                        onChange={handleChange} value={keys.name} name="name" />
                    <InputRegister label="Apellidos"
                        type="text"
                        onChange={handleChange} value={keys.lastName} name="lastName" />
                    <InputRegister label="Año de nacimiento"
                        type="text"
                        onChange={handleChange} value={keys.dob} name="dob" />
                    <InputRegister label="Ciudad"
                        type="text"
                        onChange={handleChange} value={keys.city} name="city" />
                    <InputRegister label="País"
                        type="text"
                        onChange={handleChange} value={keys.country} name="country" />
                    <InputRegister label="Teléfono"
                        type="text"
                        onChange={handleChange} value={keys.phone} name="phone" />
                    <InputRegister label="Correo electrónico"
                        type="email"
                        onChange={handleChange} value={keys.email} name="email" />
                    <InputRegister label="Contraseña"
                        type="password"
                        onChange={handleChange} value={keys.password} name="password" />
                    <InputRegister label="Repita contraseña"
                        type="password"
                        name="repeat-password" />
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

