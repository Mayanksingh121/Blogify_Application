import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { genders } from '../../utils/constants';
import { fontOBJ } from '../../assets/fonts';

const {Montserrat} = fontOBJ;

const CustomDropDown = ({value, setValue}:any) => {

  return (
    <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          data={genders}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          searchPlaceholder="Search..."
          placeholder='Select Your Gender'
          placeholderStyle={{fontFamily: Montserrat.semiBold}}
          selectedTextStyle={{fontFamily: Montserrat.semiBold}}
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>
  )
}

export default CustomDropDown

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f4f4f0',
    },
    dropdown: {
      height: 50,
      borderRadius: 2,
      paddingHorizontal: 8,
      fontFamily: Montserrat.bold
    },
  });