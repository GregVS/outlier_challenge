import React from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { QueuedItem } from 'components/QueuedItem';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ReorderQueueAction, SetDraggingAction } from 'redux/QueueReducer';
import { QueuedItemMenu } from 'components/QueuedItemMenu';

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
            />
            <QueuedItemMenu openedItem={openedQueueItem} setOpenedItem={setOpenedQueueItem} />
        </View>
    );
}
