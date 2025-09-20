import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://www.linkedin.com/company/hanzaksolutions' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href='#' className="cs-center">
        <Icon icon="fa6-brands:instagram" />               
      </Link>
      <Link href='#' className="cs-center">
        <Icon icon="fa6-brands:facebook-f" />
      </Link>
      <Link href='https://api.whatsapp.com/send/?phone=%2B44%207541%20988487&text=Hello&type=phone_number&app_absent=0' className="cs-center">
        <Icon icon="fa6-brands:whatsapp" />              
      </Link>
    </Div>
  )
}
