import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  hourItemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    marginBottom: 20
  },
  hourItemHeading: {
    marginBottom: 12,
    fontSize: 16,
    fontWeight: 'bold'
  },
  hourItemTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  hourItemBtnTab: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8
  },
  hourItemBtnText: {
    color: '#857E7F',
    fontSize: 14,
    fontWeight: 'bold'
  },
  hourItemTabView: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hourItemTabTime: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    width: '48%',
    padding: 12
  },
  hourItemHours: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  hourItemTabTimeHeading: {
    fontSize: 14,
    color: '#2D1F21',
    marginBottom: 8
  },
  hourItemHour: {
    borderRadius: 8,
    width: '46%',
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 14,
    color: '#2D1F21',
    backgroundColor: '#E9F4FF'
  },
  activeBtn: {
    backgroundColor: '#DB147F'
  },
  activeText: {
    color: '#FFF'
  }
})

export default styles
