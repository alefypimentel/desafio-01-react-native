import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

interface themeProps {
  themes: boolean;
}

export function Header({ themes }: themeProps ) {

  return (
    <SafeAreaView style={[styles.container, themes ? dark.container : styles.container]}>
      <View style={[styles.header, themes ? dark.header : styles.container]}>
        <Text style={[styles.headerText, themes ? dark.headerText : styles.container]}>to.</Text>
        <Text style={[styles.headerText, themes ? dark.headerText : styles.container, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
  },
});

const dark = StyleSheet.create({
  container: {
    backgroundColor: '#282B5A',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#282B5A',
  },
  headerText: {
    color: '#fff',
  },
  themeBtn: {
    backgroundColor: '#01ff0e',
  },
  themeText: {
    color: '#fff',
  }
});
