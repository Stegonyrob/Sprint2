import { useState } from "react";
import request from "../utils/url";

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

        const user = {
            email: email,
            password: password
        }

        const response = await fetch("http://localhost:3001/users/auth", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const result = await response.json();

        if (result.id) {
            alert("holi")
            //   window.location.href = "/main";
        } else {
            alert("nope")
            setError(true);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    placeholder="ingrese usuario o email"
                    value={keys.email}
                    onChange={handleChange}
                />
                <input
                    placeholder="ingrese contraseña"
                    name="password"
                    type="password"
                    value={keys.password}
                    onChange={handleChange}
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            {error && (
                <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
                    Usuario o contraseña incorrectos
                </div>
            )}
        </div>
    );
}

// import { useState } from "react";
// import request from "../utils/url";

// export default function Login() {
//     const [keys, setKeys] = useState({ email: "", password: "" });
//     const [error, setError] = useState(false);

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setKeys({ ...keys, [name]: value });
//         setError(false);
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         const { email, password } = keys;

//         const response = await request({
//             method: "POST",
//             endpoint: "/users/login",
//             body: { email, password },
//         });

//         const result = await response.json();

//         if (result.userId) {
//             alert("holiii")
//             // window.location.href = "/main";
//         } else {
//             setError(true);
//         }
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit} id="login-form" >
//                 <div className="d-flex justify-content-center h-100 login-container">
//                     <div className="card">
//                         <div className="card-header">
//                             <h3>Incio de Sesión</h3>
//                             <div className="d-flex justify-content-end social_icon">
//                                 <span>
//                                     <i className="fab fa-facebook-square" />
//                                 </span>
//                                 <span>
//                                     <i className="fab fa-google-plus-square" />
//                                 </span>
//                                 <span>
//                                     <i className="fab fa-twitter-square" />
//                                 </span>
//                             </div>
//                         </div>
//                         {error && (
//                             <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
//                                 Usuario o contraseña incorrectos
//                             </div>
//                         )}
//                         <div className="card-body">
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="input-group form-group">
//                                         <div className="input-group-prepend">
//                                             <span className="input-group-text">
//                                                 <i className="fas fa-user" />
//                                             </span>
//                                         </div>
//                                         <input
//                                             value={keys.email}
//                                             onChange={handleChange}
//                                             type="text"
//                                             className="form-control"
//                                             placeholder="Email"
//                                             id="email"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="input-group form-group">
//                                         <div className="input-group-prepend">
//                                             <span className="input-group-text">
//                                                 <i className="fas fa-key" />
//                                             </span>
//                                         </div>
//                                         <input
//                                             value={keys.password}
//                                             onChange={handleChange}
//                                             type="password"
//                                             className="form-control"
//                                             placeholder="Contraseña"
//                                             id="password"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="row align-items-center remember">
//                                         <input type="checkbox" />
//                                         Recuerdame
//                                     </div>
//                                     <div className="form-group">
//                                         <input
//                                             type="submit"
//                                             defaultValue="Login"
//                                             className="btn float-right login_btn"
//                                             id="submitBtn"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="card-footer">
//                                         <div className="d-flex justify-content-center links">
//                                             Si no tienes cuenta
//                                             <a href="./formRegistration.html">Registrate</a>
//                                         </div>
//                                         <div className="d-flex justify-content-center">
//                                             <a href="./formResetPassword.html">
//                                                 ¿Olvidaste tu contraseña?
//                                             </a>
//                                         </div>
//                                         {/* Funcionalidad blanco y negro */}
//                                         <div className="infinity-button" onclick="toggleGrayScale()">
//                                             <i className="fa fa-infinity icon" title="Blanco y Negro" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </>
//     );
// }