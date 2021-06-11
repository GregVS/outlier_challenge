import React from 'react';
import styled from '@emotion/native';
import RemoteIcon from '../../assets/remote.png';
import { TitleText } from 'reuse/Text';

export function RemoteHeader() {
    return (
        <HeaderRow>
            <HeaderIcon source={RemoteIcon} />
            <TitleText>TV Remote</TitleText>
        </HeaderRow>
    );
}

const HeaderIcon = styled.Image`
    width: 32px;
    height: 32px;
    margin-right: 16px;
`;

const HeaderRow = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 16px 0;
    align-items: center;
`;
