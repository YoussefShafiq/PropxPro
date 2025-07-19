import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiCopy } from 'react-icons/fi';

// Custom validation functions
const validateForm = (formData) => {
    const errors = {};

    // First name validation
    if (!formData.firstName.trim()) {
        errors.firstName = 'First name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
        errors.firstName = 'First name should contain only letters';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
        errors.lastName = 'Last name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
        errors.lastName = 'Last name should contain only letters';
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

    // Real estate experience validation
    if (!formData.realEstateExperience) {
        errors.realEstateExperience = 'Please select your experience level';
    }

    // Monthly budget validation
    if (!formData.monthlyBudget) {
        errors.monthlyBudget = 'Please select your monthly budget';
    }

    // Preferred datetime validation
    if (!formData.preferredDatetime) {
        errors.preferredDatetime = 'Please select a preferred date and time';
    } else {
        const selectedDate = new Date(formData.preferredDatetime);
        const currentDate = new Date();
        if (selectedDate <= currentDate) {
            errors.preferredDatetime = 'Date must be in the future';
        }
    }

    return errors;
};

export function HeroSection() {
    return (
        <div className="bg-demo bg-cover">
            <div className="container lg:px-20 m-auto text-center flex flex-col gap-8 items-center py-8 lg:py-28">
                <h1 className='font-extrabold text-4xl leading-[117%] lg:text-6xl md:w-4/5'>
                    Your gateway to next level real estate management
                </h1>
                <p className='font-medium lg:text-2xl text-grayText md:w-1/2'>
                    Share a few details and experience the transformative power of PropXPro with an exclusive demo now!
                </p>
            </div>
        </div>
    );
}

export function DemoForm() {
    const demoExpectations = [
        'Complete CRM Walkthrough to explore every feature of PropXPro and see how it fits into your workflow.',
        'Discover how our system effortlessly gathers all your leads from various sources, enabling you and your team to focus on what matters – closing deals.',
        'Learn how to track performances of your team\'s operation to optimize campaigns for maximum ROI.',
        'Learn to create and manage campaigns with ease. Whether it\'s a Facebook campaign, Cold Calling, SMS marketing or even personal referral.',
        'Explore our unique system designed to keep leads from slipping through the cracks.',
        'See how our system keeps the conversation going, even with unresponsive leads.'
    ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        realEstateExperience: '',
        monthlyBudget: '',
        preferredDatetime: '',
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState(false);
    const [demo, setDemo] = useState(null);



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

            // Format the data for API
            const requestData = {
                first_name: formData.firstName.trim(),
                last_name: formData.lastName.trim(),
                phone: formData.phone,
                email: formData.email.trim(),
                real_estate_experience: formData.realEstateExperience,
                monthly_budget: formData.monthlyBudget,
                preferred_datetime: new Date(formData.preferredDatetime).toISOString(),
            };

            const response = await axios.post(
                'https://propxpro.run.place/api/request-demo',
                requestData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            toast.success(response.data.message || 'Demo request submitted successfully!');
            setFormSuccess(true)
            console.log(response);

            setDemo(response?.data?.data)

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                realEstateExperience: '',
                monthlyBudget: '',
                preferredDatetime: '',
            });
        } catch (error) {
            console.error('Submission error:', error);
            toast.error(error.response?.data?.message || 'Submission failed. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    // Get minimum datetime (current time)
    const getMinDateTime = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        return now.toISOString().slice(0, 16);
    };

    const copied = () => {
        toast.success('copied successfully')
    }

    return (
        <div className="container flex flex-col lg:flex-row gap-28 py-12">
            <div className="space-y-8 lg:w-1/2">
                <h2 className='text-3xl font-bold'>What to expect in your demo</h2>
                <div className="space-y-3">
                    {demoExpectations.map((e, i) => (
                        <div key={i} className='text-[18px] font-medium flex items-start opacity-80'>
                            <FaCheck className="w-10 mt-1.5 text-base" />
                            <p className="ml-2">{e}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-8 lg:w-1/2">
                <h2 className='text-3xl font-bold'>Schedule Your Demo</h2>
                {formSuccess ? <>

                    <div className="space-y-4">
                        {/* Demo ID */}
                        <div className="flex items-center gap-4">
                            <span className="w-32 text-lg font-semibold text-gray-600">Demo ID</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-mono bg-gray-50 px-3 py-1 rounded-md">
                                    {demo?.demo_id}
                                </span>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(demo?.demo_id || '');
                                        copied();
                                    }}
                                    className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                                    title="Copy to clipboard"
                                >
                                    <FiCopy className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Event Link */}
                        <div className="flex items-center gap-4">
                            <span className="w-32 text-lg font-semibold text-gray-600">Event Link</span>
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <a
                                    href={demo?.event_link}
                                    className="text-lg font-mono text-blue-600 hover:text-blue-800 underline truncate"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {demo?.event_link}
                                </a>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(demo?.event_link || '');
                                        copied();
                                    }}
                                    className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                                    title="Copy to clipboard"
                                >
                                    <FiCopy className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Meeting Link */}
                        <div className="flex items-center gap-4">
                            <span className="w-32 text-lg font-semibold text-gray-600">Meeting Link</span>
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <a
                                    href={demo?.meet_link}
                                    className="text-lg font-mono text-blue-600 hover:text-blue-800 underline truncate"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {demo?.meet_link}
                                </a>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(demo?.meet_link || '');
                                        copied();
                                    }}
                                    className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                                    title="Copy to clipboard"
                                >
                                    <FiCopy className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </> : <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`py-3 px-5 rounded-lg w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                disabled={loading}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`py-3 px-5 rounded-lg w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                disabled={loading}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div>
                        <PhoneInput
                            country={'us'}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="Enter your phone number"
                            inputProps={{
                                name: 'phone',
                                className: `py-3 ps-14 px-5 rounded-lg w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`
                            }}
                            disabled={loading}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            className={`py-3 px-5 rounded-lg w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                }`}
                            disabled={loading}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <select
                                name="realEstateExperience"
                                value={formData.realEstateExperience}
                                onChange={handleChange}
                                className={`py-3 px-5 rounded-lg w-full border ${errors.realEstateExperience ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                disabled={loading}
                            >
                                <option value="" disabled selected>Real Estate Experience</option>
                                <option value="just get started">Just getting started</option>
                                <option value="1-3 deals a month">1-3 deals a month</option>
                                <option value="4+ deals a month">4+ deals a month</option>
                            </select>
                            {errors.realEstateExperience && <p className="text-red-500 text-sm mt-1">{errors.realEstateExperience}</p>}
                        </div>
                        <div>
                            <select
                                name="monthlyBudget"
                                value={formData.monthlyBudget}
                                onChange={handleChange}
                                className={`py-3 px-5 rounded-lg w-full border ${errors.monthlyBudget ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                disabled={loading}
                            >
                                <option value="" disabled selected>Monthly Budget</option>
                                <option value="0-$500">0-$500</option>
                                <option value="$501-$2,500">$501-$2,500</option>
                                <option value="$2,500+">$2,500+</option>
                            </select>
                            {errors.monthlyBudget && <p className="text-red-500 text-sm mt-1">{errors.monthlyBudget}</p>}
                        </div>
                    </div>

                    <div>
                        <input
                            type="datetime-local"
                            name="preferredDatetime"
                            value={formData.preferredDatetime}
                            onChange={handleChange}
                            min={getMinDateTime()}
                            className={`py-3 px-5 rounded-lg w-full border ${errors.preferredDatetime ? 'border-red-500' : 'border-gray-300'
                                }`}
                            disabled={loading}
                        />
                        {errors.preferredDatetime && <p className="text-red-500 text-sm mt-1">{errors.preferredDatetime}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-3 px-5 rounded-lg hover:bg-blue-700 transition-colors w-full disabled:opacity-50 disabled:cursor-wait"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Request Demo'}
                    </button>
                </form>}
            </div>
        </div>
    );
}

export default function RequestDemo() {
    return (
        <>
            <HeroSection />
            <DemoForm />
        </>
    );
}