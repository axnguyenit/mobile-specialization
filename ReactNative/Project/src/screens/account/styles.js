import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    paddingHorizontal: 15,
  },
  success: {
    marginTop: 80,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImg: {
    width: 80,
    height: 80,
  },
  passwordIcon: {
    position: 'absolute',
    right: 12,
    top: '25%',
  },
  forgotPass: {
    alignItems: 'flex-end',
    width: 120,
    marginVertical: 15,
  },

  contact: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: height - 510,
  },
  contact1: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: height - 550,
  },
  goBack: {
    marginTop: 40,
    marginBottom: 20,
    width: 28,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnRegister: {
    marginTop: 15,
  },
  warning: {
    color: '#E24C3F',
  },
  mt20: {
    marginTop: 20,
  },
  forgotPassLink: {
    alignItems: 'flex-end',
  },
  highLightDesc: {
    textAlign: 'center',
    color: '#DB147F',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default styles;
