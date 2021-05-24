import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function List() {
  const DATA = [
    {
      id: 0,
      name: 'a',
      email: '1@test.test',
      number: '0',
    },
    {
      id: 1,
      name: 'b',
      email: '2@test.test',
      number: '1',
    },
    {
      id: 2,
      name: 'c',
      email: '3@test.test',
      number: '2',
    },
    {
      id: 3,
      name: 'd',
      email: '4@test.test',
      number: '3',
    },
    {
      id: 4,
      name: 'e',
      email: '5@test.test',
      number: '4',
    },
    {
      id: 5,
      name: 'f',
      email: '6@test.test',
      number: '5',
    },
    {
      id: 6,
      name: 'g',
      email: '7@test.test',
      number: '6',
    },
    {
      id: 7,
      name: 'h',
      email: '8@test.test',
      number: '7',
    },
    {
      id: 8,
      name: 'i',
      email: '9@test.test',
      number: '8',
    },
    {
      id: 9,
      name: 'j',
      email: '10@test.test',
      number: '9',
    },
    {
      id: 10,
      name: 'k',
      email: '11@test.test',
      number: '10',
    },
    {
      id: 11,
      name: 'l',
      email: '12@test.test',
      number: '11',
    },
    {
      id: 12,
      name: 'm',
      email: '13@test.test',
      number: '12',
    },
    {
      id: 13,
      name: 'n',
      email: '14@test.test',
      number: '13',
    },
    {
      id: 14,
      name: 'o',
      email: '15@test.test',
      number: '14',
    },
    {
      id: 15,
      name: 'p',
      email: '16@test.test',
      number: '15',
    },
    {
      id: 16,
      name: 'q',
      email: '17@test.test',
      number: '16',
    },
    {
      id: 17,
      name: 'r',
      email: '18@test.test',
      number: '17',
    },
    {
      id: 18,
      name: 's',
      email: '19@test.test',
      number: '18',
    },
    {
      id: 19,
      name: 't',
      email: '20@test.test',
      number: '19',
    },
  ];
  const [newList, setNewList] = useState(DATA);
  const [nameToggle, setInputNameToggle] = useState(false);
  const [emailToggle, setInputEmailToggle] = useState(false);
  const [numberToggle, setInputNumberToggle] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemEditData, setItemEditData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [caseHandler, setCaseHandler] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  let emailInput;
  let numberInput;

  function deleteItemById(id) {
    const filteredData = newList.filter(item => item.id !== id);
    setNewList(filteredData);
  }

  function sortList(event) {
    let sortedList;

    switch (event) {
      case 'name':
        if (!nameToggle) {
          setInputNameToggle(true);
          sortedList = newList.sort((a, b) => b.name.localeCompare(a.name));
        }
        if (nameToggle) {
          setInputNameToggle(false);
          sortedList = newList.sort((a, b) => a.name.localeCompare(b.name));
        }
        setNewList(sortedList);
        break;
      case 'email':
        if (!emailToggle) {
          setInputEmailToggle(true);
          sortedList = newList.sort((a, b) => b.email.localeCompare(a.email));
        }
        if (emailToggle) {
          setInputEmailToggle(false);
          sortedList = newList.sort((a, b) => a.email.localeCompare(b.email));
        }
        setNewList(sortedList);
        break;
      case 'number':
        if (!numberToggle) {
          setInputNumberToggle(true);
          sortedList = newList.sort((a, b) => b.number.localeCompare(a.number));
        }
        if (numberToggle) {
          setInputNumberToggle(false);
          sortedList = newList.sort((a, b) => a.number.localeCompare(b.number));
        }
        setNewList(sortedList);
        break;
      default:
        break;
    }
  }

  function renderListSeparator() {
    return <View style={styles.separator} />;
  }

  function editContact(item) {
    setInputName(item.name);
    setInputEmail(item.email);
    setInputNumber(item.number);
    setItemEditData(item);
    setModalVisible(true);
  }

  function saveEditedData(selectedItem) {
    const editedData = newList.map(item => {
      if (item.id === selectedItem.id) {
        item.name = inputName;
        item.email = inputEmail;
        item.number = inputNumber;
        return item;
      }
      return item;
    });
    setNewList(editedData);
  }

  function addContact() {
    setInputName('');
    setInputEmail('');
    setInputNumber('');
    setModalVisible(true);
  }

  function saveNewContact() {
    let i = -1;
    newList.map(listItem => {
      if (i < listItem.id) {
        i = listItem.id;
      }
    });
    const newArray = [
      ...newList,
      {id: i + 1, name: inputName, email: inputEmail, number: inputNumber},
    ];
    setNewList(newArray);
  }

  function modalHandler(event, item) {
    setCaseHandler(event);
    switch (event) {
      case 'addContact':
        addContact();
        break;
      case 'editContact':
        editContact(item);
        break;
      default:
        break;
    }
  }

  function saveEdit() {
    setNameError(false);
    setEmailError(false);
    setNumberError(false);

    switch (caseHandler) {
      case 'addContact':
        saveNewContact();
        break;
      case 'editContact':
        saveEditedData(itemEditData);
        break;
      default:
        break;
    }
    setModalVisible(false);
  }

  function formValidation() {
    if (!inputName.trim()) {
      setNameError(true);
      return;
    }
    if (!inputEmail.trim()) {
      setEmailError(true);
      return;
    }
    if (!inputNumber.trim()) {
      setNumberError(true);
      return;
    }
    saveEdit();
  }

  function renderListItem({item}) {
    return (
      <SafeAreaView style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{flex: 8}}
          onPress={() => modalHandler('editContact', item)}>
          <View style={styles.row_container}>
            <Text style={{flex: 4}}>{item.name}</Text>
            <Text style={{flex: 4}}>{item.email}</Text>
            <Text style={{flex: 5}}>{item.number}</Text>
            <Icon style={{flex: 1}} name="pencil" size={20} color="#909090" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => deleteItemById(item.id)}>
          <View style={[styles.row_container]}>
            <Icon name="trash" size={20} color="#909090" />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  function showFlatlist(items) {
    return (
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          ItemSeparatorComponent={renderListSeparator}
          data={items}
          renderItem={renderListItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.headerBlocks, styles.addContact]}
        onPress={() => modalHandler('addContact')}>
        <View style={[styles.headerBlocks, {justifyContent: 'center'}]}>
          <Text>Add new contact</Text>
          <Icon
            style={{marginLeft: 10}}
            name="plus"
            size={20}
            color="#909090"
          />
        </View>
      </TouchableOpacity>

      <View style={[styles.headerBlocks, {marginBottom: 1}]}>
        <TouchableOpacity style={{flex: 4}} onPress={() => sortList('name')}>
          <Text>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 4}} onPress={() => sortList('email')}>
          <Text>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 5}} onPress={() => sortList('number')}>
          <Text>Phone number</Text>
        </TouchableOpacity>
        <View style={{flex: 3}} />
      </View>
      {showFlatlist(newList)}
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  onChangeText={text => setInputName(text)}
                  editable={true}
                  value={inputName}
                  placeholder={'Full Name'}
                  onSubmitEditing={() => {
                    emailInput.focus();
                  }}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: 'red'}}>
                    {nameError ? 'please insert a name' : ''}
                  </Text>
                </View>
                <TextInput
                  style={styles.input}
                  ref={input => {
                    emailInput = input;
                  }}
                  onChangeText={text => setInputEmail(text)}
                  value={inputEmail}
                  placeholder={'E-mail address'}
                  onSubmitEditing={() => {
                    numberInput.focus();
                  }}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: 'red'}}>
                    {emailError ? 'please insert an email' : ''}
                  </Text>
                </View>
                <TextInput
                  style={styles.input}
                  ref={input => {
                    numberInput = input;
                  }}
                  onChangeText={text => setInputNumber(text)}
                  value={inputNumber}
                  placeholder={'Phone number'}
                  keyboardType={'numeric'}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{color: 'red'}}>
                    {numberError ? 'please insert a phone number' : ''}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 10,
                }}>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: '#EDEDED'}]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{color: '#0077FF'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: '#07f'}]}
                  onPress={() => formValidation()}>
                  <Text style={{color: 'white'}}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}
