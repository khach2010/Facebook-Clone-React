import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

import './Sidebar.css';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Center' />

      <SidebarRow Icon={EmojiFlagsIcon} title='Page' />
      <SidebarRow Icon={ChatIcon} title='Friends' />
      <SidebarRow Icon={PeopleIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Your Store' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Expand for more' />
    </div>
  );
}

export default Sidebar;
