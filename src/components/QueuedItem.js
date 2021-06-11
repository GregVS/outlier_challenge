import { Platform, Pressable, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from '@emotion/native';
import React from 'react';
import { Column, SpaceBetweenRow } from 'reuse/Layout';
import { VideoInformation } from 'components/VideoInformation';

const { TouchableOpacity } =
    Platform.OS === 'android' ? require('react-native-gesture-handler') : require('react-native');

export function QueuedItem({ item, drag, isActive, openMenu }) {
    return (
        <QueuedVideoTile isActive={isActive}>
            <SpaceBetweenRow style={{ alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => openMenu(item)} onLongPress={drag}>
                        <VideoInformation item={item} />
                    </TouchableOpacity>
                </View>
                <Pressable onPressIn={drag} style={{ width: 38, height: '100%', paddingRight: 16 }}>
                    <Column style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <MaterialIcons name={'drag-handle'} color={'white'} size={24} style={{ alignSelf: 'center' }} />
                    </Column>
                </Pressable>
            </SpaceBetweenRow>
        </QueuedVideoTile>
    );
}

const QueuedVideoTile = styled.View`
    height: 75px;
    padding: 0 0 0 16px;
    background: ${props => (props.isActive ? '#333435' : undefined)};
`;
