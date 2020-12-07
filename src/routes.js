import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/Login';
import Home from './screens/Home';
import Veterinarios from './screens/Veterinarios';
import Menu from './screens/Menu';
import DicasMenu from './screens/DicasMenu';
import Dieta from './screens/Dieta';
import Agua from './screens/Agua';
import Manejo from './screens/Manejo';
import Agenda from './screens/Agenda';
import Setting from './screens/Setting';
import Cadastrar from './screens/Cadastrar';

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
            <Stack.Screen name="Cadastrar" component={Cadastrar}options={{ title: 'Cadastrar novo atendimento' }}/>
            <Stack.Screen name="Setting" component={Setting} options={{ title: 'Confirmação do usuário' }}/>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Atendimentos para realizar' }, {headerShown: false}}/>
            <Stack.Screen name="Veterinarios" component={Veterinarios}/>
            <Stack.Screen name="Dicas Menu" component={DicasMenu}  options={{ title: 'Dicas para o seu rebanho' }}/>
            <Stack.Screen name="Dieta" component={Dieta} options={{ title: 'Sobre a dieta' }}/>
            <Stack.Screen name="Agenda" component={Agenda} options={{ title: 'Calendário' }}/>
            <Stack.Screen name="Agua" component={Agua} options={{ title: 'Importância da água' }}/>
            <Stack.Screen name="Manejo" component={Manejo}/>
        </Stack.Navigator>
    );
}