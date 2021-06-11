import React from 'react';
import styled from '@emotion/native';
import { RemoteHeader } from 'components/RemoteHeader';
import { Queue } from 'components/Queue';
import { Search } from 'components/Search';
import { View } from 'react-native';

export function RemotePanel({ sheetRef }) {
    return (
        <FullHeightPanel>
            <View style={{ flex: 1 }}>
                <RemoteHeader />
                <View style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 8 }}>
                    <Search />
                </View>
                <Queue sheetRef={sheetRef} />
            </View>
        </FullHeightPanel>
    );
}

const FullHeightPanel = styled.View`
    flex: 1;
    background: rgb(35, 35, 35);
    align-items: stretch;
`;
