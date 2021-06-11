import { Column, Row } from 'reuse/Layout';
import { AppText, BoldText } from 'reuse/Text';
import React from 'react';
import styled from '@emotion/native';

export function VideoInformation({ item, ...props }) {
    return (
        <Row style={{ alignItems: 'center', ...props.style }}>
            <VideoThumbnail
                source={{ uri: `https://img.youtube.com/vi/${item.id}/default.jpg` }}
                imageStyle={{ borderRadius: 4 }}
                resizeMode={'cover'}
            >
                <VideoLength>
                    <AppText fontSize={10}>{item.time}</AppText>
                </VideoLength>
            </VideoThumbnail>
            <Column style={{ flexGrow: 1 }}>
                <TitleContainer>
                    <VideoTitle numberOfLines={2} fontSize={12}>
                        {item.title}
                    </VideoTitle>
                </TitleContainer>
                <AppText fontSize={12} color={'secondary'}>
                    {item.author}
                </AppText>
            </Column>
        </Row>
    );
}

const TitleContainer = styled.View`
    flex-direction: row;
    padding-right: 16px;
`;

const VideoTitle = styled(BoldText)`
    flex-wrap: wrap;
    flex: 1;
`;

const VideoLength = styled.View`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 2px 4px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 2px;
`;

const VideoThumbnail = styled.ImageBackground`
    width: 110px;
    margin-right: 12px;
    height: 60px;
`;
