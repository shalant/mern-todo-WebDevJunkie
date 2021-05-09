import React, { useEffect } from 'react'

export default function Register() {
    const [username, setUsername] = useEffect('');

    return (
        <div>
            <h1>Register</h1>
            <form>
                <input 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder='username' />
                <br />
                <input placeholder='password' />
                <br />
                <button>Register</button>
            </form>
        </div>
        
    )
}
