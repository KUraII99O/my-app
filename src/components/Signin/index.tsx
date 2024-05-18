import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { plan } = location.state || {}; // Add a fallback

    const signIn = async () => {
        try {
            const response = await fetch('http://localhost:3001/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password,  plan })
            });
            const data = await response.json();
            if (data.invoice) {
                navigate('/invoice', { state: { invoice: data.invoice } });
            } else {
                console.error('Invoice data missing');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 p-2 border border-gray-400"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-2 p-2 border border-gray-400"
            />
            <button onClick={signIn} className="bg-blue-500 text-white p-2 rounded">
                Sign In and Subscribe to {plan?.name || 'Selected Plan'}
            </button>
        </div>
    );
};

export default SignIn;
