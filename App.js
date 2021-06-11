import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, View } from 'react-native';
import { VideoView } from 'components/ActiveVideo';
import { RemotePanel } from 'components/RemotePanel';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button } from '@ui-kitten/components';
import { createStore } from 'redux';
import QueueReducer from 'redux/QueueReducer';
import { Provider } from 'react-redux';

LogBox.ignoreLogs([
    'ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.',
]);

const store = createStore(QueueReducer);
export default function App() {
    const sheetRef = React.useRef();
    const [loaded, setLoaded] = React.useState(false);

    Font.loadAsync({
        'RB-Medium': require('./assets/fonts/RB-Medium.otf'),
        'RB-Bold': require('./assets/fonts/RB-Bold.otf'),
        'RB-Light': require('./assets/fonts/RB-Light.otf'),
    }).then(() => setLoaded(true));

    if (!loaded) return null;

    return (
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={{ ...eva.dark, 'color-primary-500': '#333435' }}>
                <View style={{ flex: 1, backgroundColor: 'rgb(100, 100, 100)' }}>
                    <StatusBar style='light' />
                    <VideoView />
                    <Button onPressIn={() => sheetRef.current.expand()}>Open Queue</Button>
                </View>
                <RemotePanel ref={sheetRef} />
            </ApplicationProvider>
        </Provider>
    );
}
