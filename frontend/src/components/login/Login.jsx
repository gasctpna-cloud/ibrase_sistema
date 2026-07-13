import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from "react";
import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlesSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados:" + username + " - " + password);
    };

    return (
        <div className="container">
            <form onSubmit={handlesSubmit}>
                <img src="assets/logo.png" alt="" />
                <div className="input-field">
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icons" />
                </div>
                <div className="input-field">
                    <input 
                    type="password" 
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icons" />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox"  />
                        Lembrar de mim
                    </label>
                    <a href="#">Esqueci minha senha</a>
                </div>
                <button>Entrar</button>

                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login