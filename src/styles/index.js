import { StyleSheet } from '@react-pdf/renderer'

export default StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
  },
  section__top: {
    flexGrow: 1,
    backgroundColor: '#084c41',
    height: '100%',
  },

  section__right: {
    margin: 10,
    padding: 10,
    paddingTop: 20,
    width: '70%',
    alignSelf: 'flex-end',
    height: '100%',
  },
  section__left: {
    width: '30%',  
    alignSelf: 'flex-start',
    height: '100%',
    color: 'black',
    marginLeft: '10'
  },
  name_text: {
    paddingTop: '10px',
    paddingBottom: '5px',
    fontSize: '30px',
    fontWeight: '900',
    color: '#000080',
  },
  profession_text: {
    // fontFamily: 'Roboto',
    color: '#000080',
    fontSize: '15px',
  },
  heading__text: {
    fontSize: '14',
  },
  main__text: { 
    fontSize: '11',
    letterSpacing: '0.25px',
    lineHeight: '1.5'
  },
  left__section__heading: {
    fontSize: '12',
  },
  items__container: {
    marginLeft: '15',
    marginRight: '15',
    fontSize: '11',
  },
  skill__item__container: {
    paddingTop: '3px',
  },
  skill__item: {
    width: '100%',
    height: '5px',
    marginTop: '5px',
    backgroundColor: 'whitesmoke',
  },
  skill__item__fill: {
    width: '30%',
    height: '51px',
    backgroundColor: '#000080',
  },
  skill__item__text: {
    // color: '#FFF',
    fontSize: '12',
  },
  socials__container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '20',
  },
})
