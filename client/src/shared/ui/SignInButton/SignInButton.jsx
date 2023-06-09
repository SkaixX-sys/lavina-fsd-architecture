import React from 'react'
import {siginInButton} from './SignInButton.module.css'

function SignInButton({text}) {
  return (
    <div className={siginInButton}>{text}</div>
  )
}

export default SignInButton