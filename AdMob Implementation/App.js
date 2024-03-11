import { StyleSheet, Text, View } from 'react-native';
import "expo-dev-client";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
//const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-5493895558739657/8148127375';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> BANNER AD </Text>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
