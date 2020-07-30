import * as React from 'react'
import { FAB } from 'react-native-paper'

const Fab = ({ navigation }) => {
  const [state, setState] = React.useState({ open: false })

  const onStateChange = ({ open }) => setState({ open })

  const { open } = state
  return (
    <>
      <FAB.Group
        open={open}
        icon={open ? 'close' : 'camera'}
        actions={[
          {
            icon: 'star',
            label: 'Star',
            // eslint-disable-next-line no-console
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: 'Email',
            // eslint-disable-next-line no-console
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'camera',
            label: 'Camera',
            onPress: () => navigation.navigate('Camera'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </>
  )
}

export default Fab
