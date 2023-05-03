import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhotoUrlChange = (e) => {
    setPhotoUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit registration form
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Registration</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <form onSubmit={handleSubmit}>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
              <input type="text" name="name" id="name" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={name} onChange={handleNameChange} />

              <label className="font-semibold text-sm text-gray-600 pb-1 block">Email</label>
              <input type="email" name="email" id="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={email} onChange={handleEmailChange} />

              <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
              <input type="password" name="password" id="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={password} onChange={handlePasswordChange} />

              <label className="font-semibold text-sm text-gray-600 pb-1 block">Photo URL</label>
              <input type="text" name="photoUrl" id="photoUrl" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" value={photoUrl} onChange={handlePhotoUrlChange} />

              <button type="submit" className="transition duration-500 ease-in-out bg-indigo-500 hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg w-full">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
