import React from 'react';
import { View } from 'react-native';
import { Input } from '@ui-kitten/components';
import { MaterialIcons } from '@expo/vector-icons';

export function Search() {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                status='info'
                placeholder='Search'
                placeholderTextColor={'#b1b3b8'}
                accessoryLeft={() => <MaterialIcons name={'search'} size={16} color='#b1b3b8' />}
                size={'small'}
                style={{
                    borderRadius: 25,
                    borderColor: '#333',
                    backgroundColor: '#333435',
                }}
                textStyle={{ color: 'white' }}
            />
        </View>
    );
}
