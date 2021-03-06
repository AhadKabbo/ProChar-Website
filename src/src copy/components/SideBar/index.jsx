import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkR,
  SidebarRoute,
  SidebarRouteC,
  SidebarRouteN,
  SideBtnWrap,
} from './SidebarElements';
import { CgProfile } from 'react-icons/cg';
import { useAuth } from '../../../hooks';
import { MdChatBubble } from 'react-icons/md';
import { FaNewspaper, FaSignInAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  const { authUser } = useAuth();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      {/* <IconP onClick={toggleHome}>
      <NavBtnLinkIS to='/User'><CgProfile/></NavBtnLinkIS>
      </IconP> */}

      <SidebarWrapper>
        {authUser ? (
          <>
            <SidebarMenu>
              <SidebarLink to="discover" onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to="about" onClick={toggle}>
                Discover
              </SidebarLink>
              <SidebarLink to="services" onClick={toggle}>
                Services
              </SidebarLink>
              <SidebarLinkR to="/success-story" onClick={toggle}>
                Success Stories
              </SidebarLinkR>
            </SidebarMenu>

            <SideBtnWrap style={{ marginBottom: '1.5rem' }}>
              <SidebarRouteC to="/chat">
                <MdChatBubble /> My Chat
              </SidebarRouteC>
            </SideBtnWrap>

            <SideBtnWrap style={{ marginBottom: '1.5rem' }}>
              <SidebarRouteN to="/newsfeed">
                <FaNewspaper /> NewsFeed
              </SidebarRouteN>
            </SideBtnWrap>

            <SideBtnWrap>
              <SidebarRoute to="/User">
                <CgProfile /> Profile
              </SidebarRoute>
            </SideBtnWrap>
          </>
        ) : (
          <>
            <SidebarMenu>
              <SidebarLink to="discover" onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to="about" onClick={toggle}>
                Discover
              </SidebarLink>
              <SidebarLink to="services" onClick={toggle}>
                Services
              </SidebarLink>
              <SidebarLinkR to="/signup" onClick={toggle}>
                Sign up
              </SidebarLinkR>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRoute to="/login">
                <FaSignInAlt /> LogIn
              </SidebarRoute>
            </SideBtnWrap>
          </>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
