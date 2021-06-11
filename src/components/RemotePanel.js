import React from 'react';
import styled from '@emotion/native';
import { RemoteHeader } from 'components/RemoteHeader';
import { Queue } from 'components/Queue';
import { Search } from 'components/Search';
import { StyleSheet, View } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';

export const RemotePanel = React.forwardRef((props, ref) => {
    const isDragging = useSelector(state => state.isDragging);
    return (
        <BottomSheet
            ref={ref}
            backdropComponent={props => <BottomSheetBackdrop {...props} />}
            backgroundComponent={() => <BackgroundContainer style={StyleSheet.absoluteFill} />}
            handleComponent={() => (
                <HandleContainer>
                    <HandleLine />
                </HandleContainer>
            )}
            enableHandlePanningGesture={!isDragging}
            enableContentPanningGesture={!isDragging}
            snapPoints={['0%', '50%', '90%']}
        >
            <FullHeightPanel>
                <View style={{ flex: 1 }}>
                    <RemoteHeader />
                    <View style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 8 }}>
                        <Search />
                    </View>
                    <Queue />
                </View>
            </FullHeightPanel>
        </BottomSheet>
    );
});

const BackgroundContainer = styled.View`
    border-radius: 16px;
    background-color: rgb(35, 35, 35);
`;

const HandleContainer = styled.View`
    align-self: center;
`;

const HandleLine = styled.View`
    width: 40px;
    height: 3px;
    border-radius: 3px;
    background-color: #fff;
    margin-top: 8px;
`;

const FullHeightPanel = styled.View`
    flex: 1;
    background: rgb(35, 35, 35);
    align-items: stretch;
`;
