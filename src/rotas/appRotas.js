import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/buttom-tabs";

import home from "../telas/home";
import MelhoresProdutores from "../telas/melhoresProdutores";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const tab = createBottomTabNavigator();

export default function appRotas() {
    return (
        <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name="Home" component={home} />
            <tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
        </tab.Navigator>
        </NavigationContainer>
    );
    }