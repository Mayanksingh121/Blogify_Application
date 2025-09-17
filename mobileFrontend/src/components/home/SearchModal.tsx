import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import {fontOBJ} from '../../assets/fonts';
import { fetchUserSearch } from '../../services/homeScreensApis';
import imagesOBJ from '../../assets/images';
import CustomBackButton from '../common/CustomBackButton';
import QuizContainer from './QuizContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

const { Montserrat } = fontOBJ;

const SearchModal = ({
  searchModalVisible,
  handleModal,
  modalType,
}: {
  searchModalVisible: boolean;
  handleModal: (visible: boolean, type: string) => void;
  modalType: string;
}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchText) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutValue = setTimeout(() => {
      fetchSearchResults(signal);
    }, 300);

    return () => {
      clearTimeout(timeoutValue);
      controller.abort();
    };
  }, [searchText]);

  const fetchSearchResults = async (signal: AbortSignal) => {
    const results = await fetchUserSearch(searchText, signal);
    if (results) {
      setSearchResults(results);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity>
        <Text numberOfLines={1}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const EmptyComponent = () => {
    return (
      <View style={{flex: 1}}>
        <Image
          style={{width: 100, height: 300}}
          resizeMode="contain"
          source={imagesOBJ?.noResults}
        />
      </View>
    );
  };

  return (
    <Modal visible={searchModalVisible} animationType="fade">
      {modalType == 'searchModal' ? (
        <SafeAreaView style={styles.scrollView}>
          <View style={styles.inputBoxContainer}>
            <Ionicons name="search" size={20} color="#64748b" />
            <TextInput
              onChangeText={text => setSearchText(text)}
              placeholderTextColor="#64748b"
              placeholder="Search articles, topics..."
              style={styles.textInput}
            />
            <TouchableOpacity onPress={() => handleModal(false, '')}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            ListEmptyComponent={EmptyComponent}
            data={searchResults}
            renderItem={renderItem}
          />
        </SafeAreaView>
      ) : (
        <View style={styles.scrollView}>
          <View style={styles.backButtonContainer}>
            <CustomBackButton
              handleBackPress={() => handleModal(false, '')}
              buttonData={{
                buttonText: 'Quiz for you',
              }}
            />
          </View>
          <QuizContainer/>
        </View>
      )}
    </Modal>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fafbfd',
    flex: 1
  },
  inputBoxContainer: {
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 12,
    gap: 9,
    borderWidth: 0.5,
    borderColor: '#e2e8f0',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: Montserrat.medium,
    color: '#64748b',
    fontSize: 15,
  },
  closeModalText: {
    fontFamily: Montserrat.bold,
    color: '#0ea5e9',
  },
  backButtonContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 16,
  }
});