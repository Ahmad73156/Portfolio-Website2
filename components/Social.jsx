import Link from "next/link"
import {FaGithub, FaLinkedinIn ,FaYoutube, FaTwitter } from 'react-icons/fa'
const Socials = [
  { icon: <FaGithub />, path: 'https://github.com/Ahmad73156/Newsapp' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/ahmad-raza-100b75329/' },
  { icon: <FaYoutube />, path: 'https://youtube.com' },
  { icon: <FaTwitter />, path: 'https://twitter.com' },
];

const Social = ({containerStyles, iconStyles}) => {

  return <div className={containerStyles}>{Socials.map((item, index)=>{
    return <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
    </Link>
  })}</div>
}

export default Social
