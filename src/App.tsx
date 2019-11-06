import React, {FC} from 'react'
import {SafeAreaView} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {Provider} from 'react-redux'
import routes from './routes'
import store from './store'
const Navigator = createAppContainer(routes)
const App: FC = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  )
}

export default App
