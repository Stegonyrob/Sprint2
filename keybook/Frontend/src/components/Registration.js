import { useState } from "react";
import request from "../utils/url";

export default function Register() {
    const [user, setUser] = useState({ name: "", lastName: "" });
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setError(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, lastName } = user;

        const response = await request({
            method: "POST",
            endpoint: "/users/register",
            body: { name, lastName },
        });

        const result = await response.json();

        if (result.userId) {
            window.location.href = "/main";
        } else {
            setError(true);
        }
    }

    return (
        <div>
        {error && (
                <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
                    Usuario o contraseña incorrectos
                </div>
            )}
            <form onSubmit={handleSubmit}
                className="p-3 mb-5 default-card"
                id="form-register"
                action="/register"
                method="POST"
            >


                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className="form-group">
                            <label for="name">Nombre</label>
                            <input onChange={handleChange} value={user.name} type="text" className="form-control" id="name" required />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className="form-group">
                            <label for="lastName">Apellidos</label>
                            <input value={user.lastName}
                                onChange={handleChange} type="text" className="form-control" id="lastName" required />
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
    );
}

