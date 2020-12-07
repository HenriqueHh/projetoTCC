import { Calendar } from 'react-native-calendars'; // 1.5.3
import { View } from 'react-native';
import { StyleSheet, Text} from 'react-native';
import React from 'react';

export default class Agenda extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Calendar style={styles.calendarAgenda}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat= {'MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={0}
        />
        
        <View style={styles.containerTarefa}>
          
            
        </View>
         
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
calendarAgenda: {
},
container:{
  flex:1,
},
  
});