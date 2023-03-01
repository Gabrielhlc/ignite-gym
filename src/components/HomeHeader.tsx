import { TouchableOpacity } from "react-native";
import { Heading, HStack, Text, VStack, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleProfile() {
        navigation.navigate('profile')
    }

    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">

            <TouchableOpacity onPress={handleProfile}>
                <UserPhoto
                    source={{ uri: 'https://github.com/Gabrielhlc.png' }}
                    alt="Imagem do usuário"
                    size={16}
                    mr={4}
                />
            </TouchableOpacity>

            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">
                    Olá,
                </Text>
                <Heading color="gray.100" fontSize="md">
                    Gabriel
                </Heading>
            </VStack>
            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                />
            </TouchableOpacity>

        </HStack>
    )
}