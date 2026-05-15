
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
              screenOptions={({route})=>({
                  tabBarIcon:({focused, color, size})=>{
                    let iconName: any;

                    if(route.name === "Sobre"){
                      iconName = focused ? 
                      'home' : 
                      'home-outline';
                    }
                    else if(route.name === "Tarefas"){
                      iconName = focused ? 
                      'clipboard' : 
                      'clipboard-outline';
                    }
                    else if(route.name === "Perfil"){
                      iconName = focused ? 
                      'person' : 
                      'person-outline';
                    }
                    else if(route.name === "Solicitação"){
                      iconName = focused ? 
                      'create' : 
                      'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                  },
                  headerShown: false,
                  tabBarActiveTintColor: 'blue',
                  tabBarInactiveTintColor: 'orange',
                })}
              >
                <Tab.Screen name="Sobre" component={telaSobre}/>
                <Tab.Screen name="Solicitação" component={telaSobre}/>
                <Tab.Screen name="Tarefas" component={telaSobre}/>
                <Tab.Screen name="Perfil" component={telaSobre}/>
        </Tab.Navigator>
}

export default function App() {
  return <NavigationContainer>
            <Menu />
        </NavigationContainer>

}