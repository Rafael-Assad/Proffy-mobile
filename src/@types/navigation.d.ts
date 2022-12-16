import { CompositeNavigationProp, NavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";


// declare global {
//   namespace ReactNavigation {
//     interface RootParamList {
//       Home: undefined;
//       GiveClasses: undefined;
//     }
//   }
// }


type RootStackParamsList = {
  Home: undefined;
  GiveClasses: undefined;
}

export type RootNavigationProp = CompositeNavigationProp<
StackNavigationProp<RootStackParamsList>
>
