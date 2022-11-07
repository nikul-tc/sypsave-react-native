import React, {useState, useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import Home from './src/screens/Home';
import {WithSplashScreen} from './src/components/WithSplashScreen';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>
    </WithSplashScreen>
  );
}
