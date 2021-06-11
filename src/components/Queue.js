import React from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { QueuedItem } from 'components/QueuedItem';
import { BoldText } from 'reuse/Text';
import { View } from 'react-native';
import { MOCK_QUEUE_DATA } from 'MockQueue';

export function Queue({sheetRef}) {
    const [data, setData] = React.useState(MOCK_QUEUE_DATA);

    return (
        <View style={{ flex: 1 }}>
            <DraggableFlatList
                keyExtractor={(item, index) => `draggable-item-${item.id}`}
                data={data}
                renderItem={props => <QueuedItem {...props} />}
                onDragEnd={({ data }) => {
                    setData(data);
                }}
                simultaneousHandlers={sheetRef}
                autoscrollSpeed={50}
                activationDistance={20}
                ListHeaderComponent={() => (
                    <BoldText fontSize={18} style={{ paddingLeft: 8, paddingBottom: 4 }}>
                        Up Next
                    </BoldText>
                )}
            />
        </View>
    );
}
