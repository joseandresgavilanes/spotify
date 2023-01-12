import React, { useState } from 'react'
import axios from "axios";

 
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
   
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('url', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <section >
            <div >
                <div >
                    <div >
                        <div >
                            <form onSubmit={Register} >
                                <p >{msg}</p>
                                <div >
                                    <label >Name</label>
                                    <div >
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div >
                                    <label >Email</label>
                                    <div>
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div >
                                    <label >Password</label>
                                    <div >
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div >
                                    <label>Confirm Password</label>
                                    <div>
                                        <input type="password"  placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div >
                                    <button >Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Register