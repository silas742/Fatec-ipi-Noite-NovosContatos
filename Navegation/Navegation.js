import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Cores from "../constantes/Cores";
import ListaDeContatoTela from '../screen/ListaDeConatato';
import NovoContatoTela from '../screen/NovoContato';

const Navigator = createStackNavigator({
  ListaContatos: ListaDeContato,
  novoContato: NovoContato,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
  }
});

export default createAppContainer(Navigator);
