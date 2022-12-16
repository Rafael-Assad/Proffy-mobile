import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Favorites from "../pages/Favorites"
import TeacherList from "../pages/TeacherList"
import { Entypo } from '@expo/vector-icons';

const { Navigator, Screen} = createBottomTabNavigator()

const StudyTabs = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarInactiveBackgroundColor:'#FAFAFC',
      tabBarInactiveTintColor:'#C1BCCC',
      tabBarActiveBackgroundColor:'#EBEBF5',
      tabBarActiveTintColor:'#32264D',
      tabBarStyle:{
        height: 64,
        elevation: 0,
        shadowOpacity: 0
      },
      tabBarItemStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      tabBarLabelStyle:{
        marginLeft: 16,
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
      },
      tabBarIconStyle:{
        width: 25,
        height: 25,
        flex: 0,
      }
    }}>
      <Screen name="TeacherList" 
        component={TeacherList} 
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ size, color, focused }) =>{
            return (
              <Entypo name="blackboard" size={size} color={focused ? '#8257E5' :color}/>
            )
          }
        }}
      />

      <Screen name="Favorites" 
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, color, focused }) =>{
            return (
              <Entypo name="heart" size={size} color={focused ? '#8257E5' :color}/>
            )
          }
        }}
      />
    </Navigator>
  )
}

export default StudyTabs