import React, { useContext } from 'react'
import { UserContext } from '../../Context/User'

const RegisterAlerts = () => {
    const {success,error}=useContext(UserContext)
  return (
    <>
        {error && (
          <div
            className="p-4 w-full text-center mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            This Email is Already Taken
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

export default RegisterAlerts