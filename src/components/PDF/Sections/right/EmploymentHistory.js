import { EmploymentHistoryItem } from './EmploymentHistoryItem'
import { Text, View } from '@react-pdf/renderer'
import Divider from './Divider'

const EmploymentHistory = ({ items }) => {
  return (
    <View style={{ paddingTop: '10px' }}>
      <Text
        style={{
          color: '#000080',
          fontSize: '15',
        }}
      >
        Experience
      </Text>
      <Divider />
      {items.map((item, index) => (
        <EmploymentHistoryItem
          key={index}
          text={item.position}
          company={item.company}
          from={item.from}
          to={item.to}
          description={item.description}
          responsibilities={item.responsibilities}
        />
      ))}
    </View>
  )
}

export default EmploymentHistory
