
//Menu
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Ícones
import Ionicons from '@expo/vector-icons/Ionicons';
//Menu SOBRE
import telaSobre from "./telas/Sobre"


//Menu  - BOTTOM TABS
const Tab = createBottomTabNavigator();
function Menu(){
  return <Tab.Navigator
              screenOptions={(route)=>({
                  tabBarIcon:({focused, color, size})=>{
                    let iconName: any;

                    if(route.name==="Sobre"){
                      iconName = focused ? 'paw' : 'paw-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                  },
                  headerShown: false,
                  tabBarActiveTintColor: 'blue',
                  tabBarInactiveTintColor: 'orange',
                })}
              >
                <Tab.Screen name="Sobre" component={telaSobre}/>
                <Tab.Screen name="Sobre2" component={telaSobre}/>
                <Tab.Screen name="Sobre3" component={telaSobre}/>
                <Tab.Screen name="Sobre4" component={telaSobre}/>
        </Tab.Navigator>
}

export default function App() {
  return <NavigationContainer>
            <Menu />
        </NavigationContainer>

}