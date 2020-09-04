import { AsyncStorage } from 'react-native';

export const getId = () => AsyncStorage.getItem("id");

export const salvarId = (id) => {
    AsyncStorage.setItem("id", id);
};

export const logout = () => {
    AsyncStorage.removeItem("id");
};