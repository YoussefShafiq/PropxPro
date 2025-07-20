import React, { useState } from 'react';
import { FaCheck, FaCalendar, FaClock } from 'react-icons/fa6';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// Simulated API call - replace with actual axios import in your project
const axios = {
    post: async (url, data, config) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Simulate successful response
        return {
            data: {
                message: 'Demo request submitted successfully!',
                data: {
                    demo_id: 'DEMO-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                    event_link: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=example',
                    meet_link: 'https://meet.google.com/abc-defg-hij'
                }
            }
        };
    }
};

// Simulated toast notifications - replace with actual react-hot-toast import in your project
const toast = {
    success: (message) => alert(`✅ ${message}`),
    error: (message) => alert(`❌ ${message}`)
};
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

    // Date and time validation
    if (!formData.preferredDate || !formData.preferredTime) {
        errors.datetime = 'Please select both date and time';
    } else {
        const selectedDateTime = new Date(`${formData.preferredDate}T${formData.preferredTime}:00`);
        const currentDateTime = new Date();
        if (selectedDateTime <= currentDateTime) {
            errors.datetime = 'Date and time must be in the future';
        }
    }

    return errors;
};

export function HeroSection() {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[60vh] flex items-center">
            <div className="container lg:px-20 m-auto text-center flex flex-col gap-8 items-center py-16 lg:py-28">
                <h1 className='font-extrabold text-4xl leading-[117%] lg:text-6xl md:w-4/5 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                    Your gateway to next level real estate management
                </h1>
                <p className='font-medium lg:text-2xl text-gray-600 md:w-1/2'>
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
        preferredDate: '',
        preferredTime: '',
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

        // Clear datetime error when either date or time changes
        if ((name === 'preferredDate' || name === 'preferredTime') && errors.datetime) {
            setErrors(prev => ({
                ...prev,
                datetime: ''
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

            // Combine date and time for API
            const combinedDateTime = new Date(`${formData.preferredDate}T${formData.preferredTime}:00`);

            // Format the data for API
            const requestData = {
                first_name: formData.firstName.trim(),
                last_name: formData.lastName.trim(),
                phone: formData.phone,
                email: formData.email.trim(),
                real_estate_experience: formData.realEstateExperience,
                monthly_budget: formData.monthlyBudget,
                preferred_datetime: combinedDateTime.toISOString(),
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
            setFormSuccess(true);
            console.log(response);

            setDemo(response?.data?.data);

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                realEstateExperience: '',
                monthlyBudget: '',
                preferredDate: '',
                preferredTime: '',
            });
        } catch (error) {
            console.error('Submission error:', error);
            toast.error(error.response?.data?.message || 'Submission failed. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    // Get minimum date (today)
    const getMinDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    // Generate time options (every hour from 9 AM to 6 PM)
    const timeOptions = [];
    for (let hour = 9; hour <= 18; hour++) {
        const time24 = `${hour.toString().padStart(2, '0')}:00`;
        const time12 = new Date(`2000-01-01T${time24}`).toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true
        });
        timeOptions.push({ value: time24, label: time12 });
    }

    const copied = () => {
        toast.success('Copied successfully');
    };

    return (
        <div className="container flex flex-col lg:flex-row gap-28 py-12 px-4">
            <div className="space-y-8 lg:w-1/2">
                <h2 className='text-3xl font-bold text-gray-800'>What to expect in your demo</h2>
                <div className="space-y-4">
                    {demoExpectations.map((e, i) => (
                        <div key={i} className='text-[18px] font-medium flex items-start text-gray-700'>
                            <div className="bg-green-100 rounded-full p-1 mt-1 mr-3 flex-shrink-0">
                                <FaCheck className="w-3 h-3 text-green-600" />
                            </div>
                            <p>{e}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8 lg:w-1/2">
                <h2 className='text-3xl font-bold text-gray-800'>Schedule Your Demo</h2>
                {formSuccess ? (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-green-100 rounded-full p-2">
                                <FaCheck className="w-5 h-5 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-800">Demo Scheduled Successfully!</h3>
                        </div>

                        <div className="space-y-6">
                            {/* Demo ID */}
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Demo ID</span>
                                        <p className="text-xl font-mono font-bold text-gray-800 mt-1">
                                            {demo?.demo_id}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(demo?.demo_id || '');
                                            copied();
                                        }}
                                        className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
                                        title="Copy to clipboard"
                                    >
                                        <FiCopy className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Event Link */}
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Calendar Event</span>
                                        <a
                                            href={demo?.event_link}
                                            className="block text-lg font-medium text-blue-600 hover:text-blue-800 underline truncate mt-1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Add to Calendar
                                        </a>
                                    </div>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(demo?.event_link || '');
                                            copied();
                                        }}
                                        className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 flex-shrink-0 ml-3"
                                        title="Copy to clipboard"
                                    >
                                        <FiCopy className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Meeting Link */}
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Meeting Link</span>
                                        <a
                                            href={demo?.meet_link}
                                            className="block text-lg font-medium text-blue-600 hover:text-blue-800 underline truncate mt-1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Join Meeting
                                        </a>
                                    </div>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(demo?.meet_link || '');
                                            copied();
                                        }}
                                        className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 flex-shrink-0 ml-3"
                                        title="Copy to clipboard"
                                    >
                                        <FiCopy className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.firstName
                                        ? 'border-red-300 focus:border-red-400'
                                        : 'border-gray-200 focus:border-blue-400'
                                        }`}
                                    disabled={loading}
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.lastName
                                        ? 'border-red-300 focus:border-red-400'
                                        : 'border-gray-200 focus:border-blue-400'
                                        }`}
                                    disabled={loading}
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <select
                                    name="realEstateExperience"
                                    value={formData.realEstateExperience}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.realEstateExperience
                                        ? 'border-red-300 focus:border-red-400'
                                        : 'border-gray-200 focus:border-blue-400'
                                        }`}
                                    disabled={loading}
                                >
                                    <option value="" disabled>Real Estate Experience</option>
                                    <option value="just get started">Just getting started</option>
                                    <option value="1-3 deals a month">1-3 deals a month</option>
                                    <option value="4+ deals a month">4+ deals a month</option>
                                </select>
                                {errors.realEstateExperience && <p className="text-red-500 text-sm">{errors.realEstateExperience}</p>}
                            </div>
                            <div className="space-y-2">
                                <select
                                    name="monthlyBudget"
                                    value={formData.monthlyBudget}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.monthlyBudget
                                        ? 'border-red-300 focus:border-red-400'
                                        : 'border-gray-200 focus:border-blue-400'
                                        }`}
                                    disabled={loading}
                                >
                                    <option value="" disabled>Monthly Budget</option>
                                    <option value="0-$500">0-$500</option>
                                    <option value="$501-$2,500">$501-$2,500</option>
                                    <option value="$2,500+">$2,500+</option>
                                </select>
                                {errors.monthlyBudget && <p className="text-red-500 text-sm">{errors.monthlyBudget}</p>}
                            </div>
                        </div>

                        {/* Modern Date and Time Selection */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700">Preferred Date & Time</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="relative">
                                        <FaCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            min={getMinDate()}
                                            className={`w-full px-4 py-4 pl-12 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${errors.datetime
                                                ? 'border-red-300 focus:border-red-400'
                                                : 'border-gray-200 focus:border-blue-400'
                                                }`}
                                            disabled={loading}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                                        <select
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-4 pl-12 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none bg-white ${errors.datetime
                                                ? 'border-red-300 focus:border-red-400'
                                                : 'border-gray-200 focus:border-blue-400'
                                                }`}
                                            disabled={loading}
                                        >
                                            <option value="" disabled>Select time</option>
                                            {timeOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {errors.datetime && <p className="text-red-500 text-sm">{errors.datetime}</p>}
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                    Submitting...
                                </div>
                            ) : (
                                'Request Demo'
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function RequestDemo() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection />
            <DemoForm />
        </div>
    );
}