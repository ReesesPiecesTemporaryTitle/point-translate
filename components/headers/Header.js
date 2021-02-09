import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity
            styles={styles.btn}
            onPress={() => props.navigation.navigate("Home")}
          >
            <AntDesign name="home" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View styles={styles.title}>
          <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    paddingTop: 36,
    backgroundColor: "#FB7573",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  headerTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    height: 50,
    width: "100%",
    // marginTop: ,
    fontFamily: "Staatliches",
  },
  button: {
    flex: 0.5,
    alignSelf: "flex-start",
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 5,
    marginBottom: 3
  },
});
export default Header;
