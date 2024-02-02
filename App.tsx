import React, { useEffect } from 'react'
import { store, persistor } from './src/store/store'
import { Provider } from 'react-redux'
import Navigator from './src/screens/navigation'
import { PersistGate } from 'redux-persist/integration/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Toast from 'react-native-toast-message'
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native'
const App = () => {

  const queryClient = new QueryClient()

  useEffect(() => {
    if (Platform.OS === "android") {

      SplashScreen.hide();
    }
  }, [])


  return (
    <QueryClientProvider client={queryClient}>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <Navigator />
        </PersistGate>
      </Provider>
      <Toast />
    </QueryClientProvider>
  )
}

export default App