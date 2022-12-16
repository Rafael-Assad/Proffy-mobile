import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import GiveClasses from "../pages/GiveClasses"
import Home from "../pages/Home"
import StudyTabs from "./StudyTabs"

const { Navigator, Screen } = createStackNavigator()

const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} >
        <Screen name="Home" component={Home} />

        <Screen name="GiveClasses" component={GiveClasses} />

        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack