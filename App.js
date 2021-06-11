import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, View } from 'react-native';
import { VideoView } from 'components/ActiveVideo';
import { RemotePanel } from 'components/RemotePanel';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

LogBox.ignoreLogs([  "ReactNativeFiberHostComponent: Calling getNode() on the ref of an Animated component is no longer necessary. You can now directly use the ref instead. This method will be removed in a future release.",]);

export default function App() {

    const [ loaded, setLoaded ] = React.useState(false);
    const sheetRef = React.useRef(null);

    Font.loadAsync({
        'RB-Medium': require('./assets/fonts/RB-Medium.otf'),
        'RB-Bold': require('./assets/fonts/RB-Bold.otf'),
        'RB-Light': require('./assets/fonts/RB-Light.otf'),
    }).then(() => setLoaded(true));

    if (!loaded) return null;


    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <View style={{ flex: 1 }}>
                <StatusBar style='light' />
                <VideoView />
                {/*<View*/}
                {/*    style={{*/}
                {/*        flex: 1,*/}
                {/*        backgroundColor: 'papayawhip',*/}
                {/*        alignItems: 'center',*/}
                {/*        justifyContent: 'center',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Button*/}
                {/*        title="Open Bottom Sheet"*/}
                {/*        onPress={() => sheetRef.current.snapTo(0)}*/}
                {/*    />*/}
                {/*</View>*/}
                <RemotePanel sheetRef={sheetRef} />
            </View>
        </ApplicationProvider>
    );
}
