import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.364763,
      longitude: 116.2175556,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.350263,
          longitude: 116.2241543
        },
        title: 'Air Terjun Gangga',
        subtitle: 'Salah satu Wisata Air Terjun Terpopuler'
      },
      {
        key:2,
        latlng: {
          latitude:-8.340050,
          longitude: 116.218776
        },
        title: 'Air Terjun Tiu Pituq',
        subtitle: 'Merupakan Air Terjun Dengan 7 Air terjun Utama'
      },
      {
        key:3,
        latlng: {
          latitude:-8.339705,
          longitude: 116.218738
        },
        title: 'Air Terjun Tiu Pupus'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.359354,
          longitude: 116.144968
        },
        title: 'Rumah Dewok'
      }
      ,
      {
        key:5,
        latlng: {
          latitude:-8.357396, 
          longitude: 116.081695
        },
        title: 'Gili Air'
      }
      ,
      {
        key:6,
        latlng: {
          latitude:-8.349849, 
          longitude: 116.057062
        },
        title: 'Gili Meno'
      }
       ,
      {
        key:7,
        latlng: {
          latitude: -8.348618, 
          longitude: 116.036141
        },
        title: 'Gili Terawangan'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Lokasi Wisata Lombok Utara
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Dewok Maps </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});