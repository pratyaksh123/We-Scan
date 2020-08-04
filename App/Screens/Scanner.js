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
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Scanner, { RectangleOverlay } from 'react-native-rectangle-scanner'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperCameraView: {
    height: 50,
    width: Dimensions.get('screen').width,
    backgroundColor: DarkTheme.colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomCameraView: {
    height: 90,
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
    left: Dimensions.get('screen').width / 2 - 28, // Width of a FAB is 56
    bottom: 17,
  },
  Icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureTypeButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
  },
})

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(true)
  const [focusedScreen, setFocusedScreen] = useState(false)
  const [detectedRectangle, setDetectedRectangle] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back) // font or back camera types
  const setPermissions = async () => {
    console.log('fjab')
    const { status } = await Camera.requestPermissionsAsync()
    setHasPermission(status === 'granted')
  }
  const cameraRef = useRef(null)
  useEffect(() => {
    setPermissions()
    navigation.addListener('didFocus', () => setFocusedScreen(true))
    navigation.addListener('willBlur', () => setFocusedScreen(false))
  }, [])

  const cameraButtonPressed = async () => {
    await cameraRef.current.capture()
  }
  const handleOnPictureProcessed = ({ croppedImage }) => {
    console.log(croppedImage)
    navigation.navigate('ProcessedDocumentScreen', { image: croppedImage })
  }
  console.log(detectedRectangle)
  if (hasPermission === null) {
    return <ActivityIndicator />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  if (focusedScreen) {
    return (
      <View style={styles.container}>
        <Scanner
          ref={cameraRef}
          style={styles.cameraView}
          onPictureProcessed={handleOnPictureProcessed}
          onRectangleDetected={({ detectedRectangle }) => {
            setDetectedRectangle(detectedRectangle)
          }}
        />
        <RectangleOverlay
          detectedRectangle={detectedRectangle}
          backgroundColor="rgba(255,181,6, 0.2)"
          borderColor="rgb(255,181,6)"
          borderWidth={4}
          // == These let you auto capture and change the overlay style on detection ==
          // detectedBackgroundColor="rgba(255,181,6, 0.3)"
          // detectedBorderWidth={6}
          // detectedBorderColor="rgb(255,218,124)"
          // onDetectedCapture={this.capture}
          // allowDetection
        />
        <View style={styles.upperCameraView}>
          <View style={styles.Icon}>
            <FontAwesome name="flash" color="white" size={30} />
          </View>
          <View style={styles.Icon}>
            <FontAwesome5 name="portrait" color="white" size={30} />
          </View>
          <View style={styles.Icon}>
            <MaterialIcons name="hd" color="white" size={30} />
          </View>
          <View style={styles.Icon}>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="white"
              size={30}
            />
          </View>
        </View>
        <View style={styles.bottomCameraView}>
          <FAB style={styles.fab} icon="camera" onPress={cameraButtonPressed} />
          <View style={styles.bottomBarIcons}>
            <View style={styles.Icon}>
              <MaterialCommunityIcons
                name="image-area"
                color="white"
                size={25}
              />
            </View>
            <View style={styles.captureTypeButtons}>
              <View style={styles.Icon}>
                <Ionicons name="document" color="white" size={25} />
              </View>
              <View style={styles.Icon}>
                <Ionicons name="documents-sharp" color="white" size={25} />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return <ActivityIndicator />
}
