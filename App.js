import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const image = require('./assets/bruschetta.png');
const ingredients = { tomato: 4, basil: 6, garlic: 3, oil: 3 };

function HomeScreen({ navigation, route }) {
  const [servings, setServings] = useState(0);

  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Bruschetta Recipe</Text>
      <Image source={image} style={styles.image} />
      <TextInput style={styles.input} value={servings} onChangeText={setServings}
        placeholder='Enter the Number of Servings'></TextInput>
      <Pressable style={styles.button} onPress={() => navigation.navigate({
        name: 'Recipe',
        params: { recipe: servings }, merge: true,
      })}><Text style={styles.buttonText}>View Recipe</Text></Pressable>
    </View>
  )
}

function RecipeScreen({ navigation, route }) {
  return (
    <View style={styles.recipes}>
      <Text style={styles.homeText}>Bruschetta</Text>
      <Text style={styles.recipeHead}>Ingredients</Text>
      <Text style={styles.ingredients}>
        {ingredients.tomato * route.params.recipe} plum tomatoes {'\n'}
        {ingredients.basil * route.params.recipe} basil leaves {'\n'}
        {ingredients.garlic * route.params.recipe} garlic cloves, chopped {'\n'}
        {ingredients.oil * route.params.recipe} TB olive oil
      </Text>
      <Text style={styles.recipeHead}>Directions</Text>
      <Text style={styles.ingredients}>
        Combine the ingredients. Add Salt to taste. Top French bread slices with mixture
      </Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#f4511e', },
        headerTintColor: '#fff'
      }}>
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} />
        <Stack.Screen options={{ title: " " }} name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  recipes: {
    flex: 1,
    justifyContent: 'center',
  },
  homeText: {
    textAlign: 'center',
    fontSize: 42,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#808080',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  input: {
    fontSize: 20,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  recipeHead: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 20,
    fontSize: 35,
    fontWeight: 'bold'
  },
  ingredients: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26,
    marginLeft: 50,
    fontWeight: 'bold',
  },

});
