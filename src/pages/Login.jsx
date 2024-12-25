import React, { useState } from 'react';
import AuthLayout from '../components/Auth/AuthLayout';
import FormInput from '../components/Auth/FormInput';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import  {api}  from '../constants';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successfully!'); 
      window.location = '/'  
    } catch (error) {
      toast.error(error.response.data.error); 
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="email"
          label="Email address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <a href="#" className="text-sm font-medium text-red-500 hover:text-red-400">
            Forgot your password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Sign in
        </button>

        <div className="text-center">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <a href="/register" className="text-sm font-medium text-red-500 hover:text-red-400">
            Sign up
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}
