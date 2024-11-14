import logo from '../assets/marwan-codes-logo.png';
import { SOCIAL_MEDIA_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
        <div className="flex items-center justify-center">
            <img src={logo} alt="logo" width={150} className='my-20'/>
        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, i) => (
                <a href={link.href} key={i} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                </a>
            ))}
        </div>
        <p className='my-8 text-center text-sm tracking-wide text-gray-400'>
            &copy;MarwanCodes. All rights reserved. 
        </p>
    </footer>
  )
}

export default Footer