import React, { useState } from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import FormInput from '../components/Auth/FormInput';
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom';
import {api}  from '../constants';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset previous errors
    setLoading(true);

    // Validate if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      });

      toast.success('Account created successfully!'); 
      navigate('/login');   
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(err.response.data.error); 
      } else {
        toast.error('An error occurred during registration'); 
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Create an account"
      subtitle="Join our community of readers and writers"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <FormInput
          id="name"
          label="Full name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />

        {/* Email Input */}
        <FormInput
          id="email"
          label="Email address"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />

        {/* Password Input */}
        <FormInput
          id="password"
          label="Password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
        />

        {/* Confirm Password Input */}
        <FormInput
          id="confirm-password"
          label="Confirm password"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
        />

        {/* Error Message */}

        {/* Terms of Service Checkbox */}
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{' '}
            <a href="#" className="text-red-500 hover:text-red-400">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-red-500 hover:text-red-400">Privacy Policy</a>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Create account'}
        </button>

        {/* Redirect to login */}
        <div className="text-center">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <a href="/login" className="text-sm font-medium text-red-500 hover:text-red-400">
            Sign in
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}
