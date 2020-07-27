import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Camera } from 'expo-camera'
import { DarkTheme, FAB } from 'react-native-paper'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperCameraView: {
    height: 50,
    width: Dimensions.get('screen').width,
    backgroundColor: DarkTheme.colors.background,
  },
  bottomCameraView: {
    height: 100,
    width: Dimensions.get('screen').width,
    backgroundColor: DarkTheme.colors.background,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    right: Dimensions.get('screen').width / 2,
    bottom: 0,
  },
})

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back) // font or back camera types
  const cameraRef = useRef(null)
  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <ActivityIndicator />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  const cameraButtonPressed = async () => {
    const photo = await cameraRef.current.takePictureAsync()
    console.log(photo)
  }
  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.cameraView} type={type}>
        <View style={styles.upperCameraView} />
        <View style={styles.bottomCameraView}>
          <FAB
            style={styles.fab}
            large
            icon="camera"
            onPress={cameraButtonPressed}
          />
        </View>
      </Camera>
    </View>
  )
}
