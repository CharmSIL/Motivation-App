import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { affirmations } from '../../data/constants';
import { getRandomItem } from '../../data/utils';  // new helper function

const RandomScreen = ({ navigation }) => {
    const [affirmation, setAffirmation] = useState('');

    useEffect(() => {
        getRandomAffirmation();
    }, []);

    const getRandomAffirmation = async () => {
        try {
            const customAffirmations = JSON.parse(await AsyncStorage.getItem('customAffirmations')) || [];
            const allAffirmations = [...affirmations, ...customAffirmations];
            const randomAffirmation = getRandomItem(allAffirmations);  // using helper function
            setAffirmation(randomAffirmation);
        } catch (error) {
            console.error("Failed to fetch affirmation: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.affirmationText}>{affirmation}</Text>
            <TouchableOpacity style={styles.refreshButton} onPress={getRandomAffirmation}>
                <Text style={styles.refreshButtonText}>Refresh</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    affirmationText: {
        fontSize: 24,
        textAlign: 'center',
    },
    refreshButton: {
        backgroundColor: '#3498db',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    refreshButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default RandomScreen;
