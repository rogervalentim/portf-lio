import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

import './Icons.css';

const Icons = () => {
  return (
    <div className='icons'>
    <a 
    href="https://www.linkedin.com/in/rogervalentim33/" 
    target="_blank"
    className="icon"
    >
     <BsLinkedin size={23} />
    </a>
    <a 
    href="https://github.com/rogervalentim" 
    target="_blank"
    className="icon"
    >
      <BsGithub size={23} />
    </a>
    <a
      href="https://api.whatsapp.com/send/?phone=19994088614&text&type=phone_number&app_absent=0"
      target="_blank"
      className="icon"
    >
     <BsWhatsapp size={23} />
    </a>
  </div>
  )
}

export default Icons