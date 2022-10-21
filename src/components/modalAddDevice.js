import React, { useState } from 'react'
import { Modal } from 'react-native'
import Panel from './panel'

export const modalAddDevice = (valueVisible = false) => {
    const [isVisible, setisVisible] = useState(valueVisible)
  return (
    <>
    <Panel setisVisible={setisVisible}/>
        <Modal visible={isVisible}>

        </Modal>
    </>
  )
}
