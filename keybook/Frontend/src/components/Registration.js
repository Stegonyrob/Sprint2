import { useState } from "react";
import request from "../utils/url";
import { InputRegister } from "./InputRegister";
import { ButtonDefault } from "./ButtonDefault";

export default function Register() {
    const [userInfo, setUserInfo] = useState({ name: "", lastName: "", dob: "", city: "", country: "", phone: "", email: "", password: "", repeatPassword: "" });
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
        setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, lastName, dob, city, country, phone, email, password, repeatPassword } = userInfo

        try {

            const response = await request({
                method: "POST",
                endpoint: "users/register",
                body: { name, lastName, dob, city, country, phone, email, password },
            });

            if (response.id) {
                alert("Usuario creado con éxito")
                //   window.location.href = "/main";
            } else {
                setError(true);
            }
        } catch {
            alert("Ocurrió un error. Vuelva a intentarlo")
        }
    }

    return (
        <>
            <h1 className="new-user-registration">Registrar Nuevo Usuario</h1>
            <form onSubmit={handleSubmit}
                className="p-3 mb-5 default-card"
                id="form-register"
            >
                {error && (
                    <div className="error form-control ">
                        La cuenta de correo ya está registrada
                    </div>
                )}
                <InputRegister label="Nombre"
                    type="text"
                    onChange={handleChange} value={userInfo.name} name="name" />
                <InputRegister label="Apellidos"
                    type="text"
                    onChange={handleChange} value={userInfo.lastName} name="lastName" />
                <InputRegister label="Año de nacimiento"
                    type="text"
                    onChange={handleChange} value={userInfo.dob} name="dob" />
                <InputRegister label="Ciudad"
                    type="text"
                    onChange={handleChange} value={userInfo.city} name="city" />
                <InputRegister label="País"
                    type="text"
                    onChange={handleChange} value={userInfo.country} name="country" />
                <InputRegister label="Teléfono"
                    type="text"
                    onChange={handleChange} value={userInfo.phone} name="phone" />
                <InputRegister label="Correo electrónico"
                    type="email"
                    onChange={handleChange} value={userInfo.email} name="email" />
                <InputRegister label="Contraseña"
                    type="password"
                    onChange={handleChange} value={userInfo.password} name="password" />
                <InputRegister label="Repita contraseña"
                    type="password"
                    onChange={handleChange} value={userInfo.repeatPassword} name="repeatPassword" />

                <div id="register-form-buttons">
                    <div >
                        <ButtonDefault type="submit" content="Enviar" id="register-send" />
                    </div>
                </div>         
            </form>
        </>
    );
}

