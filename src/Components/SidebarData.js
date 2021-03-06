import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Instructors',
    path: '/instructors',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Classes',
    path: '/classes',
    icon: <FaIcons.FaOdnoklassniki />,
    cName: 'nav-text'
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <FaIcons.FaLeanpub />,
    cName: 'nav-text'
  },
  {
      title: 'Book a Class',
      path: '/book-a-class',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
  }
];