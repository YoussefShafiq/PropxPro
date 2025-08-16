import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa6';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Custom validation functions
const validateForm = (formData) => {
    const errors = {};

    // First name validation
    if (!formData.first_name.trim()) {
        errors.first_name = 'First name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.first_name.trim())) {
        errors.first_name = 'First name should contain only letters';
    }

    // Last name validation
    if (!formData.last_name.trim()) {
        errors.last_name = 'Last name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.last_name.trim())) {
        errors.last_name = 'Last name should contain only letters';
    }

    // Phone validation
    if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Invalid email';
    }

    // Company validation
    if (!formData.company.trim()) {
        errors.company = 'Company name is required';
    }

    // Reason validation
    if (!formData.reason_for_attending.trim()) {
        errors.reason_for_attending = 'Please provide a reason for attending';
    }

    return errors;
};

export default function Event() {
    const { slug } = useParams();
    const { data, isLoading: isEventLoading } = useQuery({
        queryKey: ['event', slug],
        queryFn: () => {
            return axios.get(`https://api.propxpro.com/api/webinars/events/${slug}`);
        }
    });

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        company: '',
        reason_for_attending: '',
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState(false);
    const [registrationData, setRegistrationData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handlePhoneChange = (value) => {
        setFormData(prev => ({
            ...prev,
            phone: value
        }));

        // Clear phone error when user starts typing
        if (errors.phone) {
            setErrors(prev => ({
                ...prev,
                phone: ''
            }));
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            // Validate form
            const validationErrors = validateForm(formData);

            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                setLoading(false);
                return;
            }

            setErrors({});

            const response = await axios.post(
                `https://api.propxpro.com/api/webinars/events/${data?.data?.data?.id}/register`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            toast.success(response.data.message || 'Registration submitted successfully!');
            setFormSuccess(true);
            setRegistrationData(response?.data?.data);

            // Reset form
            setFormData({
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                company: '',
                reason_for_attending: '',
            });
        } catch (error) {
            console.error('Submission error:', error);
            toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (isEventLoading) {
        return <div className="container py-20 text-center">Loading event details...</div>;
    }

    return (
        <div className="min-h-screen ">
            <div className="container flex flex-col lg:flex-row">
                <div className="bg-[#fff8cf] lg:w-1/2 p-10 flex flex-col gap-3 rounded-xl m-10 me-0">
                    <div className="w-28 rounded-full aspect-square border-2 border-black object-cover overflow-hidden">
                        <img
                            src={data?.data?.data?.host_image}
                            className='w-full h-full object-cover'
                            alt={data?.data?.data?.presented_by}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center font-bold text-xl">
                            <p>{formatDate(data?.data?.data?.date)} at {data?.data?.data?.date?.split(' ')[1]}</p>
                            <div className="h-5 w-[1px] bg-hoverText"></div>
                            <p className='text-hoverText' >{data?.data?.data?.duration}</p>
                        </div>
                        <h2 className='font-extrabold text-4xl lg:text-5xl'>{data?.data?.data?.title}</h2>
                        <p>{data?.data?.data?.description}</p>
                    </div>
                </div>

                <div className="lg:w-1/2 p-10 ">
                    {formSuccess ? (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200 h-full flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-green-100 rounded-full p-2">
                                    <FaCheck className="w-5 h-5 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-green-800">Registration Successful!</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h4 className="text-lg font-semibold mb-4">Your Registration Details</h4>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Event</p>
                                            <p className="font-medium">{data?.data?.data?.title}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Date & Time</p>
                                            <p className="font-medium">
                                                {formatDate(data?.data?.data?.date)} at {data?.data?.data?.date?.split(' ')[1]}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Name</p>
                                            <p className="font-medium">
                                                {registrationData?.first_name} {registrationData?.last_name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="font-medium">{registrationData?.email}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h4 className="text-lg font-semibold mb-4">What's Next?</h4>
                                    <ul className="space-y-3 list-disc pl-5">
                                        <li>You'll receive a confirmation email with event details</li>
                                        <li>Add the event to your calendar</li>
                                        <li>Join 5 minutes before the scheduled time</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Register for this Event</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.first_name
                                            ? 'border-red-300 focus:border-red-400'
                                            : 'border-gray-200 focus:border-blue-400'
                                            }`}
                                        disabled={loading}
                                    />
                                    {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.last_name
                                            ? 'border-red-300 focus:border-red-400'
                                            : 'border-gray-200 focus:border-blue-400'
                                            }`}
                                        disabled={loading}
                                    />
                                    {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <PhoneInput
                                    country={'us'}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    placeholder="Enter your phone number"
                                    inputProps={{
                                        name: 'phone',
                                        className: `w-full px-4 py-4 pl-16 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.phone
                                            ? 'border-red-300 focus:border-red-400'
                                            : 'border-gray-200 focus:border-blue-400'
                                            }`
                                    }}
                                    disabled={loading}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.email
                                        ? 'border-red-300 focus:border-red-400'
                                        : 'border-gray-200 focus:border-blue-400'
                                        }`}
                                    disabled={loading}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.company
                                        ? 'border-red-300 focus:border-red-400'
                                        : 'border-gray-200 focus:border-blue-400'
                                        }`}
                                    disabled={loading}
                                />
                                {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    name="reason_for_attending"
                                    placeholder="Reason for attending"
                                    value={formData.reason_for_attending}
                                    onChange={handleChange}
                                    rows={3}
                                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.reason_for_attending
                                        ? 'border-red-300 focus:border-red-400'
                                        : 'border-gray-200 focus:border-blue-400'
                                        }`}
                                    disabled={loading}
                                />
                                {errors.reason_for_attending && <p className="text-red-500 text-sm">{errors.reason_for_attending}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                        Submitting...
                                    </div>
                                ) : (
                                    'Register Now'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}