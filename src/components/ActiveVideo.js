import React from 'react';
import styled from '@emotion/native';
import CatImage from '../../assets/cats.png';
import { Dimensions, Image } from 'react-native';


export function VideoView() {
    const { width } = Dimensions.get('window');
    return (
        <Container>
            <Image source={CatImage} style={{ width: width, height: width * 9/16}} resizeMode={'cover'} />
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
`;
