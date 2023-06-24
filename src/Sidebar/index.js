import React from "react";
import {
  LeftSideContainer,
  NavLinkDiv,
  SidebarIcon,
  SidebarIconImage,
  SidebarIconText,
  StickyColumn,
} from "../style";
import { styled as bookmark } from "styled-components";
import { Bookmark, Home, Person, RocketLaunch } from "@mui/icons-material";
export const Sidebar = () => {
  return (
    <StickyColumn>
      <LeftSideContainer>
        <NavLinkDiv to="/">
          <SidebarIcon>
            <SidebarIconImage>
              <Home />
            </SidebarIconImage>
            <SidebarIconText>Home</SidebarIconText>
          </SidebarIcon>
        </NavLinkDiv>
        <NavLinkDiv to="/">
          <SidebarIcon>
            <SidebarIconImage>
              <RocketLaunch />
            </SidebarIconImage>
            <SidebarIconText>Explore</SidebarIconText>
          </SidebarIcon>
        </NavLinkDiv>
        <NavLinkDiv to="/bookmark">
          <SidebarIcon>
            <SidebarIconImage>
              <Bookmark />
            </SidebarIconImage>
            <SidebarIconText>Bookmark</SidebarIconText>
          </SidebarIcon>
        </NavLinkDiv>
        <NavLinkDiv to="/liked-post">
          <SidebarIcon>
            <SidebarIconImage>
              <Person />
            </SidebarIconImage>
            <SidebarIconText>Profile</SidebarIconText>
          </SidebarIcon>
        </NavLinkDiv>
      </LeftSideContainer>
    </StickyColumn>
  );
};
