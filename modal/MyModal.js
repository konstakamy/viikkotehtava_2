import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

const MyModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showText = () => {
    setIsVisible(true);
  };

  const hideText = () => {
    setIsVisible(false);
  };

  return (
    <View>
      {!isVisible && <Button title="Show modal message" onPress={showText} />}
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={hideText}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>This is modal...</Text>
            <Button title="Close" onPress={hideText} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyModal;

