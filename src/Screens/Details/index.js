import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Header} from '../../Components/Headers';
import {
  BookMarkWithBG,
  boy1,
  GPS,
  Loc2,
  Loc3,
  Loc4,
  Loc5,
  Loc6,
  Loc7,
  Star,
} from '../../Assets/Images';
import {respFontSize, responsiveSize} from '../../utils/responsiveSize';
import {ROUTES} from '../../utils/constants';
import {navigationRef} from '../../Navigators/utils';

const Details = () => {
  const displayImages = ({item, index}) => {
    return (
      <View style={styles.flatlistImagesView}>
        <Image style={styles.locImages} source={item.location} />
      </View>
    );
  };

  const dummyImagesData = [
    {location: Loc2, id: 1},
    {location: Loc3, id: 2},
    {location: Loc4, id: 3},
    {location: Loc5, id: 4},
    {location: Loc6, id: 5},
    {location: Loc7, id: 7},
    {location: Loc2, id: 8},
    {location: Loc2, id: 9},
  ];

  return (
    <>
      <StatusBar backgroundColor={'rgb(120,207,234)'} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ImageBackground source={Loc5} style={{flex: 0.4}}>
          <Header
            hasBackButton
            title={'Details'}
            titleTextStyle={{color: Colors.white}}
            hasRightIcon
            rightIcon={BookMarkWithBG}
          />
        </ImageBackground>

        <View style={styles.secondParent}>
          <View style={styles.selfClosingView} />
          <View style={styles.locationHeaderView}>
            <View>
              <Text style={styles.textStyles}>Niladri Reservoir</Text>
              <Text style={styles.locationTextStyles}>Tekergat Sunamhj</Text>
            </View>
            <View style={styles.imageView}>
              <Image source={boy1} style={{resizeMode: 'contain'}} />
            </View>
          </View>

          <View style={styles.locationDetailsView}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.gpsImage} source={GPS} />
              <Text style={{color: Colors.silver}}>Tekerat</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.starImage} source={Star} />
              <Text style={{fontWeight: '600'}}>
                4.7 <Text style={{color: Colors.silver}}>(2498)</Text>
              </Text>
            </View>
            <Text
              style={{color: Colors.ButtonBlue, fontSize: respFontSize(15)}}>
              $50
              <Text style={{color: Colors.silver, fontSize: respFontSize(15)}}>
                /Person
              </Text>
            </Text>
          </View>

          <View
            style={{
              marginVertical: responsiveSize(20),
              marginHorizontal: responsiveSize(20),
              justifyContent: 'center',
            }}>
            <FlatList
              scrollEnabled
              contentContainerStyle={{alignItems: 'center'}}
              ItemSeparatorComponent={
                <View style={{width: responsiveSize(20)}} />
              }
              horizontal
              data={dummyImagesData}
              keyExtractor={index => 'key' + index}
              renderItem={displayImages}
            />
          </View>

          <View style={{marginHorizontal: responsiveSize(20)}}>
            <Text
              style={{
                color: Colors.BLACK,
                fontSize: respFontSize(20),
                fontWeight: '600',
              }}>
              About Destination
            </Text>

            <Text
              style={{
                color: Colors.silver,
                fontWeight: '400',
                fontSize: respFontSize(14),
              }}>
              You will get a complete travel package on the beaches. Packages in
              the form of airline tickets, recommended Hotel rooms,
              Transportation, Have you ever been on holiday to the Greek ETC...
            </Text>
            <Pressable
              style={styles.bookNowBtn}
              onPress={() => {
                navigationRef.navigate(ROUTES.VIEWSCREEN);
              }}>
              <Text style={{color: Colors.white, fontWeight: '400'}}>
                Book Now
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  bookNowBtn: {
    marginTop: responsiveSize(25),
    backgroundColor: Colors.ButtonBlue,
    width: '100%',
    height: responsiveSize(50),
    borderRadius: responsiveSize(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistImagesView: {
    height: responsiveSize(42),
    width: responsiveSize(42),
    borderRadius: responsiveSize(14),
  },
  secondParent: {
    top: -20,
    backgroundColor: 'white',
    flex: 0.6,
    borderTopLeftRadius: responsiveSize(20),
    borderTopRightRadius: responsiveSize(20),
  },
  selfClosingView: {
    opacity: 0.4,
    top: responsiveSize(10),
    borderRadius: responsiveSize(15),
    backgroundColor: Colors.silver,
    height: responsiveSize(5),
    width: responsiveSize(45),
    alignSelf: 'center',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightgreen,
    width: responsiveSize(48),
    height: responsiveSize(48),
    borderRadius: responsiveSize(24),
  },
  locationDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveSize(20),
  },
  starImage: {
    alignSelf: 'center',
    right: responsiveSize(5),
  },
  gpsImage: {
    height: responsiveSize(16),
    width: responsiveSize(16),
    alignSelf: 'center',
    top: -1,
    right: 2,
  },
  textStyles: {
    fontSize: respFontSize(24),
    fontWeight: '500',
  },

  locationTextStyles: {
    fontSize: respFontSize(15),
    color: '#7D848D',
  },
  locationHeaderView: {
    paddingVertical: responsiveSize(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: responsiveSize(15),
  },
  locImages: {
    resizeMode: 'contain',
    height: responsiveSize(42),
    width: responsiveSize(42),
  },
});
