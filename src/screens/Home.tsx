import { useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Tríceps', 'ombro']);
    const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra']);
    const [groupSelected, setgroupSelected] = useState('costas');

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenExerciseDetails() {
        navigation.navigate('exercise');
    }

    return (
        <VStack>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
                        onPress={() => setgroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }} // estilização interna
                my={10}
                maxH={10}
            />

            <VStack px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md" fontFamily="heading">
                        Exercícios
                    </Heading>

                    <Text color="gray.200" fontSize="sm">
                        {exercises.length}
                    </Text>
                </HStack>



                <FlatList
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <ExerciseCard onPress={handleOpenExerciseDetails} />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    )
}
