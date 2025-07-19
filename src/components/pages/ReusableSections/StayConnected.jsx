import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function StayConnected() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', isError: false });

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email) {
            setMessage({ text: 'Please enter an email address', isError: true });
            return;
        }

        setLoading(true);
        setMessage({ text: '', isError: false });

        try {
            const response = await axios.post(
                'https://propxpro.run.place/api/newsletter/subscribe',
                { email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            toast.success(response.data.message)
            // setMessage({ text: 'Subscription successful!', isError: false });
            setEmail('');
        } catch (error) {
            toast.error(error.response.data.message)
            // const errorMessage = error.response?.data?.message || 'Subscription failed. Please try again.';
            // setMessage({ text: errorMessage, isError: true });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-[#245ec1] py-10 ">
            <div className="container flex flex-col gap-10 items-center">
                <div className="text-center text-3xl lg:text-5xl leading-[133%] font-extrabold text-white lg:px-44">
                    Stay connected
                </div>
                <div className="text-center lg:text-2xl leading-9 font-medium text-white lg:px-80">
                    Subscribe to our newsletter to stay updated and secure better deals—never miss an opportunity again!
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center lg:w-1/2 w-full">
                    <div className="flex gap-5 w-full">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-3 px-5 rounded-lg flex-1 hover:scale-[1.01] transition-all"
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            className="bg-white font-bold py-3 px-5 rounded-lg hover:scale-[1.03] transition-all"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                    {message.text && (
                        <p className={`text-sm ${message.isError ? 'text-red-200' : 'text-green-200'}`}>
                            {message.text}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}