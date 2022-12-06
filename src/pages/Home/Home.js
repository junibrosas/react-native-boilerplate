import React from 'react'
import PropTypes from 'prop-types'
import * as reactNative from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = reactNative.StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = ({ navigation }) => (
  <reactNative.View style={styles.root}>
    <reactNative.StatusBar barStyle="light-content" />
    <reactNative.Text style={styles.title}>Homepage</reactNative.Text>
    <Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details', { from: 'Home' })
      }}
    />
  </reactNative.View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
