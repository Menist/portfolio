import React from 'react';
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import styled from "styled-components";
import { useTheme } from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

export const MainIcon = () => {
    const { themeObj } = useTheme();

    const icons = [
        { id: "SidebarIconFacebook", href: "#" },
        { id: "SidebarIconInstagram", href: "#" },
        { id: "SidebarIconTwitter", href: "#" },
        { id: "SidebarIconLinkedIn", href: "#" },
        { id: "SidebarIconYoutube", href: "#" },
        { id: "SidebarIconDribble", href: "#" }
    ];

    return (
        <SidebarIconContainer>
            {icons.map(icon => (
                <SidebarLink themeObj={themeObj} key={icon.id} href={icon.href}>
                    <Icon iconId={icon.id} width={"24"} height={"24"} />
                </SidebarLink>
            ))}
        </SidebarIconContainer>
    );
};

const SidebarIconContainer = styled(FlexWrapper)`
  gap: 20px; 
`;

const SidebarLink = styled.a<{ themeObj: ThemeObjectType }>`
  transition: ${({themeObj}) =>themeObj.animation.transitionAll};

  &:hover svg {
    color: ${({themeObj}) =>themeObj.colors.backgroundWebsite};
    transform: scale(1.3);
    transition: .5s;
  }
`;
