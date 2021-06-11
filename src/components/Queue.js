import React from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { QueuedItem } from 'components/QueuedItem';
import { BoldText } from 'reuse/Text';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PlayVideoAction, RemoveVideoAction, ReorderQueueAction, SetDraggingAction } from 'redux/QueueReducer';
import Overlay from 'react-native-modal-overlay';
import { MaterialIcons } from '@expo/vector-icons';
import styled from '@emotion/native';
import { MenuItem } from '@ui-kitten/components';

export function Queue() {
    const dispatch = useDispatch();

    const queue = useSelector(state => state.queue);
    const [openedQueueItem, setOpenedQueueItem] = React.useState(null);

    return (
        <View style={{ flex: 1 }}>
            <DraggableFlatList
                keyExtractor={(item, index) => `draggable-item-${item.id}`}
                data={queue}
                renderItem={props => <QueuedItem {...props} openMenu={item => setOpenedQueueItem(item)} />}
                onDragBegin={() => {
                    dispatch(SetDraggingAction(true));
                }}
                onDragEnd={({ data }) => {
                    dispatch(ReorderQueueAction(data));
                    dispatch(SetDraggingAction(false));
                }}
                autoscrollSpeed={50}
                activationDistance={20}
                // ListHeaderComponent={() => (
                //     <BoldText fontSize={18} style={{ paddingBottom: 4 }}>
                //         Up Next
                //     </BoldText>
                // )}
            />
            <QueuedItemMenu openedItem={openedQueueItem} setOpenedItem={setOpenedQueueItem} />
        </View>
    );
}

function QueuedItemMenu({ openedItem, setOpenedItem }) {
    const dispatch = useDispatch();

    return (
        <Overlay
            childrenWrapperStyle={{
                backgroundColor: 'rgb(35, 35, 35)',
                padding: 8,
                width: 200,
                alignSelf: 'center',
            }}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
            closeOnTouchOutside={true}
            onClose={() => setOpenedItem(null)}
            visible={Boolean(openedItem)}
        >
            <StyledMenuItem
                accessoryLeft={() => <MaterialIcons name={'play-arrow'} size={16} color={'white'} />}
                title={'Play Now'}
                onPress={() => {
                    dispatch(PlayVideoAction(openedItem.id));
                    setOpenedItem(null);
                }}
            />
            <StyledMenuItem
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
    background: rgb(35, 35, 35);
`;
