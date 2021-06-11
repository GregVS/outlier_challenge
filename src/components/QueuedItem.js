import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from '@emotion/native';
import React from 'react';
import { Column, SpaceBetweenRow } from 'reuse/Layout';
import { VideoInformation } from 'components/VideoInformation';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function QueuedItem({ item, drag, isActive, openMenu }) {
    return (
        <TouchableOpacity onPress={() => openMenu(item)}>
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
    );
}

const QueuedVideoTile = styled.View`
    height: 75px;
    padding: 16px 16px 16px 12px;
    background: ${props => (props.isActive ? 'rgba(255, 255, 255, 0.1)' : undefined)};
`;
