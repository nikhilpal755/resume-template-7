import { Text, View } from '@react-pdf/renderer'
import styles from '../../../../styles'

export const EmploymentHistoryItem = ({
  text,
  company,
  from,
  to,
  description,
  responsibilities,
}) => (
  <View style={{ paddingBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', paddingRight: '20px'}}>
  <div style={{marginTop: '2', width: '15%'}}>
      <Text style={{ fontSize: '9', color: '#959ba6', paddingBottom: '5' }}>
        {from} -
      </Text>
      <Text style={{ fontSize: '9', color: '#959ba6', paddingBottom: '5' }}>
        {to}
      </Text>
  </div>

  <div style={{width: '85%', float: 'right'}}>
      <Text
        style={{
          color: '#000',
          fontSize: '13',
          color:'#000080'
        }}
      >
        {text}
      </Text>
      <Text
        style={{
          color: '#000',
          fontSize: '13',
          color: '#000',
          fontWeight: '900',
        }}
      >
        {company}
      </Text>
      <Text style={{ fontSize: '11' }}>{description}</Text>
      <Text style={{ fontSize: '11', marginLeft: '15px', marginTop: '4' }}>
        {responsibilities}
      </Text>
  </div>
  </View>
)
