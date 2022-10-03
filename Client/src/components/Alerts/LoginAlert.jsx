import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const LoginAlerts = () => {
    const {success,error}=useContext(AuthContext)
  return (
    <>
        {error && (
          <div
            className="p-4 w-full text-center mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            Invalid User Information
          </div>
        )}
        {success && (
          <div
            className="p-4 w-full text-center mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
          >
            {success}
          </div>
        )}
      </>
  )
}

export default LoginAlerts