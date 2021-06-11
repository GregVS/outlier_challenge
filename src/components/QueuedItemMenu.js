import { useDispatch } from 'react-redux';
import Overlay from 'react-native-modal-overlay';
import { MaterialIcons } from '@expo/vector-icons';
import { PlayVideoAction, RemoveVideoAction } from 'redux/QueueReducer';
import styled from '@emotion/native';
import { MenuItem } from '@ui-kitten/components';
import React from 'react';

export function QueuedItemMenu({ openedItem, setOpenedItem }) {
    const dispatch = useDispatch();

    return (
        <Overlay
            childrenWrapperStyle={{
                backgroundColor: 'rgb(35, 35, 35)',
                padding: 0,
                width: 200,
                alignSelf: 'center',
            }}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            closeOnTouchOutside={true}
            onClose={() => setOpenedItem(null)}
            visible={Boolean(openedItem)}
        >
            <StyledMenuItem
                activeOpacity={0.3}
                accessoryLeft={() => <MaterialIcons name={'play-arrow'} size={16} color={'white'} />}
                title={'Play Now'}
                onPress={() => {
                    dispatch(PlayVideoAction(openedItem.id));
                    setOpenedItem(null);
                }}
            />
            <StyledMenuItem
                activeOpacity={0.3}
                accessoryLeft={() => <MaterialIcons name={'close'} size={16} color={'white'} />}
                title={'Remove'}
                onPress={() => {
                    dispatch(RemoveVideoAction(openedItem.id));
                    setOpenedItem(null);
                }}
            />
        </Overlay>
    );
}

const StyledMenuItem = styled(MenuItem)`
    background-color: rgb(35, 35, 35);
    padding: 24px;
    width: 100%;
`;
