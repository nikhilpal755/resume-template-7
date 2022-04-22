import { Text, View, Image } from '@react-pdf/renderer'
import styles from '../../../../styles'

const ProfileImage = ({ url, display }) => (
  <>
    {display && (
      <Image
        style={{
          width: '160px',
          height: '150px',
          // borderRadius: '90',
        }}
        src={url}
      />
    )}
  </>
)

export const ProfileContainer = ({ name, profession, url, display }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20',
        marginBottom: display ? '20px' : '-65px',
        // height: '150',
        fontFamily: 'Helvetica-Bold',
      }}
    >
      <ProfileImage url={url} display={display} />
      </View>
  )
}
