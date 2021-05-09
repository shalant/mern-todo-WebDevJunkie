import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to='/register'>Register</Link>
        </div>
    )
}
