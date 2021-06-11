import { Pressable, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from '@emotion/native';
import React from 'react';
import { Column, SpaceBetweenRow } from 'reuse/Layout';
import SwipeableItem from 'react-native-swipeable-item';
import { QueuedItemUnderlay } from 'components/QueuedItemUnderlay';
import { VideoInformation } from 'components/VideoInformation';

export function QueuedItem({ item, drag, isActive, openMenu }) {
    return (
        <SwipeableItem
            key={item.key}
            item={item}
            overSwipe={0}
            renderUnderlayRight={props => <QueuedItemUnderlay {...props} />}
            snapPointsRight={[64]}
        >
            <TouchableOpacity onPressIn={() => openMenu(item)}>
                <QueuedVideoTile isActive={isActive}>
                    <SpaceBetweenRow style={{ alignItems: 'center' }}>
                        <VideoInformation item={item} />
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

const QueuedVideoTile = styled.View`
    height: 75px;
    padding: 16px 16px 16px 12px;
    background: ${props => (props.isActive ? 'rgba(255, 255, 255, 0.1)' : undefined)};
`;
