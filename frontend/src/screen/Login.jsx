import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions'; // Assuming you will create this action
import Spinner from '../components/Spinner';
import Message from '../components/Message';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { loading, error, success } = useSelector(state => state.userLogin); // Assuming you will create this reducer

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password)); // Dispatch the login action
    };

    return (
        <div className="login">
            {loading && <Spinner />}
            {error && <Message message={error} type="error" />}
            {success && <Message message="Login successful!" type="success" />}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
