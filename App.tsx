import React, { useEffect } from 'react'
import { store, persistor } from './src/store/store'
import { Provider } from 'react-redux'
import Navigator from './src/screens/navigation'
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from 'react-native-splash-screen';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const App = () => {

  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <Navigator />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}

export default App