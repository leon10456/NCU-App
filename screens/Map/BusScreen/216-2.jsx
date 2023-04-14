import React, { useState } from 'react';

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../Styles';

const Separator = () => <View style={Styles.separator} />;
function List216() {
  const [workDay, setWorkDay] = useState(true);
  return (
    <SafeAreaView style={Styles.background}>
      <View>
        <Text style={{
          textAlign: 'center', backgroundColor: '#476685', color: 'white', height: 50, width: '100%', fontSize: 20, textAlignVertical: 'center', lineHeight: 50,
        }}
        >
          216公車時刻表
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', height: 50 }}>
          <TouchableOpacity
            onPress={() => { setWorkDay(true); }}
            style={{ width: '50%', backgroundColor: 'white' }}
          >
            <Text style={{
              textAlign: 'center', fontSize: 20, textAlignVertical: 'center', lineHeight: 50,
            }}
            >
              平日
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { setWorkDay(false); }}
            style={{ width: '50%', backgroundColor: 'white' }}
          >
            <Text style={{
              textAlign: 'center', fontSize: 20, textAlignVertical: 'center', lineHeight: 50,
            }}
            >
              假日
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.fixToText}>

        <Text style={{
          textAlign: 'center', width: '50%', fontSize: 20,
        }}
        >
          往中央大學
        </Text>
        <Text style={{
          textAlign: 'center', width: '50%', fontSize: 20,
        }}
        >
          往八德區公所
        </Text>

      </View>
      <Separator />
      <ScrollView>
        {workDay
          && (
          <View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                06:10
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                06:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                07:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                07:00
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                08:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                08:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                09:20
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                09:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                10:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                10:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                11:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                11:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                12:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                12:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                14:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                14:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                15:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                15:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                16:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                16:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                17:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                17:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                18:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                18:10
              </Text>
            </View>
          </View>
          )}
        {!workDay
          && (
          <View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                07:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                06:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                09:20
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                08:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                11:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                10:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                14:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                12:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                16:00
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                15:10
              </Text>
            </View>
            <View style={Styles.fixToText}>

              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                18:10
              </Text>
              <Text style={{
                textAlign: 'center', fontSize: 20, lineHeight: 50, backgroundColor: 'white', width: '50%',
              }}
              >
                17:10
              </Text>
            </View>
          </View>
          )}
      </ScrollView>

      <Text style={{ textAlign: 'center', backgroundColor: 'white', color: 'gray' }}>
        上次更新:2023/01/26
      </Text>

    </SafeAreaView>
  );
}
export default List216;
