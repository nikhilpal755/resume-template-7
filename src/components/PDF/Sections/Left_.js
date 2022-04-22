import React, { useContext } from 'react'
import { View, Text } from '@react-pdf/renderer'
import { ProfileContainer } from './left/ProfileContainer'
import { SVGItem } from './left/SVGItem'
import styles from '../../../styles'
import { SkillItem } from './left/SkillItem'
import { BuilderContext } from '../../../App'
import Divider from './right/Divider'


const Wrapper = ({ heading, ...props }) => {
  return (
    <View style={{ marginTop: '25', marginLeft: '15', marginRight: '15' }}>
      <Text
        style={{
          // color: '#FFF',
          fontSize: '17',
          // paddingBottom: '10', 
          color: '#000080',
          fontWeight: '900'
        }}
      >
        {heading}
      </Text>
      <Divider />
      {props.children}
    </View>
  )
}


export const Left = () => {
  const ctx = useContext(BuilderContext)

  const profile = ctx.getComponentData('Profile')
  const contact = ctx.getComponentData('Contact')
  const languages = ctx.getComponentData('Languages')
  return (
    <View style={styles.section__left}>
      <ProfileContainer
        name={profile.name}
        profession={profile.profession}
        url={profile.profileImageURL}
        display={profile.display}
      />
      <View style={{marginTop: '-20'}}>
    
       
          <Wrapper heading={contact.header}>
            {contact.items.map((item, index) => (
              <div key={index}>
            
                    <Text
                        
                        style={{fontSize: '13', marginBottom: '8px' , fontWeight: '900'}}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{fontSize: '11', marginBottom: '8px' , color: 'grey', paddingBottom: '7'}}
                      >
                        {item.text}
                      </Text>
                      
               
              </div>
            ))}
          </Wrapper>
          <Wrapper heading={languages.header}>
            {languages.items.map((item, index) => (<>
                    {console.log(item)}
                    <SkillItem name={item.text} fillSkill={item.level} key={index}/>
              
            </>))}

          </Wrapper>
        
    
      </View>
    </View>
  )
}
