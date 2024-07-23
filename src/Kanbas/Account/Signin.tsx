import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";
export default function Signin() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState<any>({});
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const signin = async () => {
        try {
            const currentUser = await client.signin(credentials);
            dispatch(setCurrentUser(currentUser));
      
        } catch (err: any) {
          setError(err.response.data.message);
        }
      };
    
    return (
        <div className="wd-signin-screen">
            <h1>Sign in</h1>
            {error && <div className="wd-error alert alert-danger">{error}</div>}
            {/* <input className="wd-username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        value={credentials.username} className="form-control mb-2" placeholder="username" /> */}

            <input className="form-control mb-2 wd-username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                value={credentials.username} placeholder="username" />

            {/* <input className="wd-password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
        value={credentials.password} className="form-control mb-2" placeholder="password" type="password" /> */}

            <input className="form-control mb-2 wd-password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                value={credentials.password} placeholder="password" type="password" />
            {/* <button className="wd-signin-btn" onClick={signin} className="btn btn-primary w-100"> Sign in </button> */}
            <button className="wd-signin-btn btn btn-primary w-100" onClick={signin}> Sign in </button>

            <br />
            <Link className="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    );
}
