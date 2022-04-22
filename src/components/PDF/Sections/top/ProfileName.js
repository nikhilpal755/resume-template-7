import React from 'react'
import {View, Text} from '@react-pdf/renderer'
import styles from '../../../../styles'

export default function ProfileName({name, profession}) {
    return (
        <>
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '20',
            paddingTop: '10'
        }}>

            <View>
                <Text style={styles.name_text}>{name}</Text>
            </View>
            <Text style={styles.profession_text}>{profession}</Text>
            <View
                style={{
                    marginTop: '10px',
                    width: '10%',
                    height: '1px',
                   
                    paddingBottom: '10'
                }}
            />
        </View>

        </>
    )
}
