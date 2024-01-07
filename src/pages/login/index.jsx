import { Link } from "react-router-dom";
import { useState } from "react";
import atlImg from "../../assets/atl.png"
import { LayoutComponents } from "../../components/layoutComponents";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">
                    <img src={atlImg} alt="Atlanta" />
                </span>

                <div className="wrap-input">
                    <input
                        className={
                            email !== ""
                                ? 'has-val input-login'
                                : 'input-login'
                        }
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>
                <div className="wrap-input">
                    <input
                        className={
                            password !== ""
                                ? 'has-val input-login'
                                : 'input-login'
                        }
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                </div>

                <div className="container-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="text-botton">
                    <span className="text1">Não possui conta?</span>
                    <Link className="text2" to="/register">Criar conta</Link>
                </div>

            </form>
        </LayoutComponents>
    );
}