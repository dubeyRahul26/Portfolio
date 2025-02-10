import { SiLeetcode } from "react-icons/si"; 
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs"; 
import React from 'react'
import SingleContactSocial from './SingleContactSocial'

const ContactSocial = () => {
  return (
    <div className="flex gap-4"> 
        <SingleContactSocial link='https://github.com/dubeyRahul26' Icon = {BsGithub} />
        <SingleContactSocial link='https://www.linkedin.com/in/rahul-dubey-dev/' Icon = {FaLinkedinIn} />
        <SingleContactSocial link='https://leetcode.com/u/Rahul_Dubey/' Icon = {SiLeetcode} />
    </div>
  )
}

export default ContactSocial  