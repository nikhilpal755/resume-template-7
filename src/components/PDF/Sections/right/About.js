import { Text, View } from '@react-pdf/renderer'
import styles from '../../../../styles'
import Divider from './Divider'

const About = ({ text }) => (
  <View style={{width: '60%', float: 'right', padding: '18', paddingBottom: '0'}}>
    <Text style={styles.main__text}>{text}</Text>
  </View>
)
export default About
