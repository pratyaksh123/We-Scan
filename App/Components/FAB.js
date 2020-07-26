import * as React from 'react'
import { FAB, Portal } from 'react-native-paper'

const Fab = () => {
  const [state, setState] = React.useState({ open: false })

  const onStateChange = ({ open }) => setState({ open })

  const { open } = state
  return (
    <>
      <Portal>
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
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </>
  )
}

export default Fab
