import React from 'react';
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import styled from "styled-components";
import { useTheme } from "../../../../ThemeProvider";
import {themeobjectType} from "../../../../styles/ColorSheme";

export const MainIcon = () => {
    const { themeobj } = useTheme();

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
                <SidebarLink themeobj={themeobj} key={icon.id} href={icon.href}>
                    <Icon iconId={icon.id} width={24} height={24} />
                </SidebarLink>
            ))}
        </SidebarIconContainer>
    );
};

const SidebarIconContainer = styled(FlexWrapper)`
  gap: 20px; 
`;

const SidebarLink = styled.a<{ themeobj: themeobjectType }>`
  transition: ${({themeobj}) =>themeobj.animation.transitionAll};

  &:hover svg {
    color: ${({themeobj}) =>themeobj.colors.primary};
    transform: scale(1.3);
    transition: .5s;
  }
`;
