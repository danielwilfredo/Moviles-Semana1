# Navegacion entre pantallas (Expo + React Navigation)

Este proyecto usa Expo SDK 54, por lo que se recomienda instalar dependencias de navegacion con `expo install` para evitar conflictos de versiones.

## Orden de instalacion recomendado

1. Instalar la libreria base de navegacion:

```bash
npx expo install @react-navigation/native
```

2. Instalar el stack navigator:

```bash
npx expo install @react-navigation/native-stack
```

3. Instalar dependencias nativas requeridas por el stack:

```bash
npx expo install react-native-screens react-native-safe-area-context
```

## Instalacion en una sola linea (opcional)

Si prefieres, puedes instalar todo junto con:

```bash
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
```

## Iniciar el proyecto

```bash
npm start
```

Luego ejecuta en emulador o dispositivo:

- Android: presiona `a` en la terminal de Expo.
- iOS: presiona `i` (solo macOS).
- Web: presiona `w`.

## Nota importante

Evita usar `npm install` directo para estas dependencias en Expo cuando haya conflictos de versiones. `expo install` selecciona versiones compatibles con tu SDK.

## Ejemplo minimo de App.js (2 pantallas)

```jsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InfoScreen from "./src/screens/InfoScreen";
import FlatlistScreen from "./src/screens/FlatlistScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Info">
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{ title: "Pantalla 1" }}
        />
        <Stack.Screen
          name="Lista"
          component={FlatlistScreen}
          options={{ title: "Pantalla 2" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Botones de navegacion esperados:

- En `InfoScreen`: `navigation.navigate("Lista")`
- En `FlatlistScreen`: `navigation.navigate("Info")`
