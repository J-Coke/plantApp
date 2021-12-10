import React, { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { userContext } from "../contexts/userContext";
import { grains } from "../test-data/plants";
import { WeeklyCount } from "./WeeklyCount";
import { PlantsToGo } from "./PlantsToGo";
import AutocompleteInput from "react-native-autocomplete-input";
import { AutoInput } from "./AutoComplete";

export const HomeScreen = () => {
    const { user } = useContext(userContext);
    const [weekCount, setWeekCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>My Current Total:</Text>
            <WeeklyCount weekCount={weekCount} setWeekCount={setWeekCount} />
            <PlantsToGo weekCount={weekCount} />
            <Text>Current streak 2 weeks!</Text>
            <Text>Add new plant:</Text>
            {/* <TextInput
                onChange={(e) => {
                    const input = e.nativeEvent.text;
                    setPlantToAdd(input);
                    console.log(plantToAdd);
                }}
                style={{
                    height: 30,
                    width: 100,
                    borderColor: "gray",
                    borderWidth: 1,
                }}
            ></TextInput> */}
            <AutoInput weekCount={weekCount} setWeekCount={setWeekCount} />
        </View>
    );
};
const styles = StyleSheet.create({
    weeklyCount: {
        fontSize: 100,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: "red",
    },
    container: {
        alignItems: "center",
    },
});
