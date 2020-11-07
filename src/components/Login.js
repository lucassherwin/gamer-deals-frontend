import React from 'react'

export default function Login(props) {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label>Username:</label>
                <input type='text' name='username' value={props.username} onChange={props.handleLoginChange} />
            </form>
        </div>
    )
}
