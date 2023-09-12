import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import Welcome from '../screens/Welcome/Welcome';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import Profile from '../screens/Profile/Profile';
import Test from '../screens/Test/Test';
import Motivations from '../screens/Motivations/Motivations';
import RandomScreen from '../screens/Random/RandomMotivation';

 const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Welcome' component={Welcome}                              options={{ headerTitleAlign: 'center', headerLeft: null,  headerShown: false }}/>
      <Stack.Screen name='Profile' component={Profile}                              options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={HomeScreen}                              options={{ headerTitleAlign: 'center' }}/>
      <Stack.Screen name='Motivatin Gallery' component={CategoriesScreen}                  options={{ headerTitleAlign: 'center' }}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}                          options={{ headerShown: false }}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen}/>
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name='Test' component={Test}                                    options={{ headerTitleAlign: 'center' }}/>
      <Stack.Screen name='My Motivations' component={Motivations}                      options={{ headerTitleAlign: 'center' }}/>
      <Stack.Screen name='Random Motivation' component={RandomScreen}                    options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
} 



 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{ width: 250 }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;