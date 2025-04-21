import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'
import { Platform } from 'react-native'

export function usePushNotifications() {
  useEffect(() => {
    const configure = async () => {
      const { status } = await Notifications.getPermissionsAsync()
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync()
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
        })
      }
    }

    configure()
  }, [])
}
