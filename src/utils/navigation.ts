import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  Dashboard: undefined;
  ControlPanel: undefined;
};

export type DashboardScreenProps = NativeStackNavigationProp<StackParamList, "Dashboard">;
export type AlarmDetailsScreenProps = NativeStackNavigationProp<StackParamList, "ControlPanel">;
