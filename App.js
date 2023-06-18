import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CatagoriesScreen from "./screens/CatagoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreen from "./screens/FavoritesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#573623" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#cfcfcf",
      }}
    >
      <Drawer.Screen
        name="Meal Categories"
        component={CatagoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Favorites Screen"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "Category Select",
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer Screen"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Meals Overview Screen"
            component={MealsOverviewScreen}
          ></Stack.Screen>
          <Stack.Screen
            name="Meal Screen"
            component={MealDetailScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({});
