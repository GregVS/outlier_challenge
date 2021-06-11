import { AppText, BoldText } from 'reuse/Text';
import { Pressable, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from '@emotion/native';
import React from 'react';
import { Column, Row, SpaceBetweenRow } from 'reuse/Layout';
import SwipeableItem from 'react-native-swipeable-item';
import Animated from 'react-native-reanimated';

const { multiply, sub } = Animated;
export function QueuedItem({ item, drag, isActive }) {
    const renderRemoveButton = ({ item, percentOpen }) => (
        <Animated.View
            style={{
                width: 64,
                height: '100%',
                transform: [{ translateX: multiply(sub(1, percentOpen), -100) }],
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(256, 86, 86, 0.9)',
            }}
        >
            <MaterialIcons name={'delete-outline'} color={'#fff'} size={32} />
        </Animated.View>
    );

    return (
        <SwipeableItem
            key={item.key}
            item={item}
            overSwipe={0}
            renderUnderlayRight={renderRemoveButton}
            snapPointsRight={[64]}
        >
            <TouchableOpacity>
                <QueuedVideoTile isActive={isActive}>
                    <SpaceBetweenRow style={{ alignItems: 'center' }}>
                        <Row style={{ alignItems: 'center', flex: 1 }}>
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
                        <Pressable onPressIn={drag} style={{ width: 24 }}>
                            <Column style={{ height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                <MaterialIcons name={'drag-handle'} color={'white'} size={24} />
                            </Column>
                        </Pressable>
                    </SpaceBetweenRow>
                </QueuedVideoTile>
            </TouchableOpacity>
        </SwipeableItem>
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
    margin-left: 12px;
    height: 60px;
`;

const QueuedVideoTile = styled.View`
    height: 75px;
    padding: 16px;
    padding-left: 12px;
    background: ${props => (props.isActive ? 'rgba(255, 255, 255, 0.1)' : undefined)};
`;
