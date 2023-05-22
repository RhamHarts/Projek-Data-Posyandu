import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Notifications() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>PENGUMUMAN</Text>
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationDate}>Tanggal : 06 March 2020</Text>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationDate}>Tanggal : 06 March 2020</Text>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationDate}>Tanggal : 06 March 2020</Text>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#03a9f4',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  notificationContainer: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    padding: 10,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#0a0a0a',
  },
  notificationDate: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  notificationContent: {
    padding: 15,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 30,
  },
  notificationText: {
    color: 'black',
  },
});
