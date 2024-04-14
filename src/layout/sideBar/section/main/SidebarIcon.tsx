import React from 'react';
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import styled from "styled-components";
import { useTheme } from "../../../../ThemeProvider";
import {ThemeObjectType} from "../../../../styles/ColorSheme";

export const SidebarIcon = () => {
    const { themeObj } = useTheme();

    const icons = [
        { id: "iconFacebookSidebar", href: "#" },
        { id: "iconFacebookInstagramSidebar", href: "#" },
        { id: "iconFacebookTwitterSidebar", href: "#" },
        { id: "iconFacebookLinkedInSidebar", href: "#" },
        { id: "iconFacebookYoutubeSidebar", href: "#" },
        { id: "iconFacebookDribbleSidebar", href: "#" }
    ];

    return (
        <IconContainer>
            {icons.map(icon => (
                <Link themeObj={themeObj} key={icon.id} href={icon.href}>
                    <Icon iconId={icon.id} width={"24"} height={"24"} />
                </Link>
            ))}
        </IconContainer>
    );
};

const IconContainer = styled(FlexWrapper)`
  gap: 20px; 
`;

const Link = styled.a<{ themeObj: ThemeObjectType }>`
  transition: ${({themeObj}) =>themeObj.animation.transitionAll};

  &:hover svg {
    color: ${({themeObj}) =>themeObj.colors.backgroundWebsite};
    transform: scale(1.3);
    transition: .5s;
  }
`;
