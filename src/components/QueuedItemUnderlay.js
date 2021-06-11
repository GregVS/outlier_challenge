import Animated from 'react-native-reanimated';
import { RemoveVideoAction } from 'redux/QueueReducer';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import styled from '@emotion/native';
import { useDispatch } from 'react-redux';

const { multiply, sub } = Animated;
export function QueuedItemUnderlay({ item, percentOpen }) {
    const dispatch = useDispatch();

    return (
        <StyledView
            style={{
                transform: [{ translateX: multiply(sub(1, percentOpen), -100) }],
            }}
        >
            <UnderlayContainer onPress={() => dispatch(RemoveVideoAction(item.id))}>
                <MaterialIcons name={'delete-outline'} color={'#fff'} size={32} />
            </UnderlayContainer>
        </StyledView>
    );
}

const StyledView = styled(Animated.View)`
    width: 64px;
    height: 100%;
`;

const UnderlayContainer = styled.TouchableOpacity`
    background: rgba(256, 86, 86, 0.9);
    flex: 1;
    align-items: center;
    justify-content: center;
`;
