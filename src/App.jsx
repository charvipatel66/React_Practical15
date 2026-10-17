
import { useState, useEffect } from 'react'

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const form = e.target

    setUsername(form.username.value)
    setPassword(form.password.value)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        <div className="text-center mb-7">
          <div className="text-4xl mb-3">🔐</div>

          <h1 className="text-3xl font-bold text-slate-800">
            Welcome Back
          </h1>

          <p className="text-slate-500 mt-2">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>

        </form>

        {submitted && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <h2 className="text-lg font-bold text-green-700 mb-3">
              Submitted Information
            </h2>

            <p className="text-slate-700 break-words">
              <b>Username:</b> {username}
            </p>

            <p className="text-slate-700 break-words">
              <b>Password:</b> {password}
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
