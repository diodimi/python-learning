
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";
import * as BsIcon from "react-icons/bs";

export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Data',
  //   path: '/reports',
  //   icon: <BsIcon.BsClipboardData />,
  //   cName: 'nav-text'
  // },
   
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Help',
    path: '/help',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },{
    title: 'Logout',
    path: '/',
    icon: <MdIcons.MdLogout />,
    cName: 'nav-text'
  },
  
];