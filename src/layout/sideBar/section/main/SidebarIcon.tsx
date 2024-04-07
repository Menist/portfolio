import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import styled from "styled-components";

export const SidebarIcon = () => {
    return (
        <FlexWrapper>
            <Link href={"#"}>
                <Icon iconId={"iconFacebookSidebar"} width={"24"} height={"24"} />
            </Link>
            <Link href="#">
                <Icon iconId={"iconFacebookInstagramSidebar"} width={"24"} height={"24"}/>
            </Link>
            <Link href="#">
                <Icon iconId={"iconFacebookTwitterSidebar"} width={"24"} height={"24"}/>
            </Link>
            <Link href="#">
                <Icon iconId={"iconFacebookLinkedInSidebar"} width={"24"} height={"24"}/>
            </Link>
            <Link href="#">
                <Icon iconId={"iconFacebookYoutubeSidebar"} width={"24"} height={"24"}/>
            </Link>
            <Link href="#">
                <Icon iconId={"iconFacebookDribbleSidebar"} width={"24"} height={"24"}/>
            </Link>
        </FlexWrapper>
    );
};
const Link = styled.a`
  transition: ${theme.animation.transitionAll};

  &:hover svg {
    color: ${theme.colors.background};
    transform: scale(1.3);
    transition: .5s;
  }
`;