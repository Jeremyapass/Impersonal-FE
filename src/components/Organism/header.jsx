import React from 'react'
import SignInButton from '../Atoms/signInButton'
import CreateAccountButton from '../Atoms/createAccountButton'

const Header = () => {
  return (
    <div className='flex bg-red-500 justify-between px-20'>
        <div className='flex bg-green-500'>
            Impersonal
        </div>

        <ul className='flex bg-blue-500'>
            <li>Example</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='flex bg-purple-500'>
          <SignInButton/>
          <CreateAccountButton/>
        </div>
    </div>
  )
}

export default Header