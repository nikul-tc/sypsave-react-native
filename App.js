import React, {useState, useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {WithSplashScreen} from './src/components/WithSplashScreen';
import SignIn from './src/screens/SignIn';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <NativeBaseProvider>
        <SignIn />
      </NativeBaseProvider>
    </WithSplashScreen>
  );
}

export default App;
