import React from 'react'
import {
  AntDesign
} from '@expo/vector-icons'
import {
  Box, Center, Pressable, Text
} from 'native-base'

export function SettingHeader ({ navigation }) {
  return (
    <Box flexDirection="row" backgroundColor="#FFFFFF" borderBottomWidth={10} borderBottomColor="#ffffff" paddingTop={5}>
        <Center>
            <Pressable flex={1.5} marginLeft={6}>
                <AntDesign
                name="arrowleft"
                size={28}
                color="#476685"
                onPress={() => { navigation.navigate('homepage') }}
                />
            </Pressable>
        </Center>
        <Box flex={2} />
        <Box flex={4}>
            <Text fontSize="2xl" color="#28527A" justifyContent="center" marginTop="-1.5">設定</Text>
        </Box>
    </Box>

  )
}
export default { SettingHeader }
