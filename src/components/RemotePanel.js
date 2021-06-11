import React from 'react';
import styled from '@emotion/native';
import { RemoteHeader } from 'components/RemoteHeader';
import { Queue } from 'components/Queue';
import { StyleSheet, View } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';
import { TitleText } from 'reuse/Text';
import { VideoInformation } from 'components/VideoInformation';
import { Button } from '@ui-kitten/components';
import { MaterialIcons } from '@expo/vector-icons';

export const RemotePanel = React.forwardRef((props, ref) => {
    const isDragging = useSelector(state => state.isDragging);
    const nowPlayingVideo = useSelector(state => state.nowPlaying);

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
            snapPoints={['0%', '70%']}
        >
            <FullHeightPanel>
                <View style={{ flex: 1 }}>
                    <PaddedView>
                        <RemoteHeader />
                        <Button
                            style={{ borderRadius: 24, marginBottom: 16 }}
                            accessoryLeft={() => <MaterialIcons name={'search'} size={16} color='#b1b3b8' />}
                        >
                            Search Youtube/Twitch
                        </Button>
                    </PaddedView>
                    {nowPlayingVideo && (
                        <>
                            <PaddedView>
                                <TitleText>Now Playing</TitleText>
                            </PaddedView>
                            <VideoInformation item={nowPlayingVideo} style={{ marginTop: 4, marginBottom: 16, paddingLeft: 16, paddingRight: 16 }} />
                        </>
                    )}
                    <PaddedView>
                        <TitleText>Up Next</TitleText>
                    </PaddedView>
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

const PaddedView = styled.View`
    padding: 0 16px;
`;

const FullHeightPanel = styled.View`
    flex: 1;
    background: rgb(35, 35, 35);
    align-items: stretch;
    //padding: 0 16px;
`;
