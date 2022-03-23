import React from 'react';

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  FlatList,
} from 'react-native';

import { styles } from './styles';

interface TaksButtonProps extends TouchableOpacityProps {
    name: string;
    onPress: () => void;
}

export function TaskCard({ name, onPress, ...rest }: TaksButtonProps) {
  return (
      <TouchableOpacity
        style={styles.buttonTask}
        onPress={onPress}{...rest}
      >
          <Text style={styles.textTask}>
            {name}
        </Text>
      </TouchableOpacity>
  );
}