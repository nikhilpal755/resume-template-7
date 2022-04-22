import styles from '../../../styles'
import About from './right/About'
import EmploymentHistory from './right/EmploymentHistory'
import { View, Text } from '@react-pdf/renderer'
import { BuilderContext } from '../../../App'
import { useContext } from 'react'
import KeySkills from './right/KeySkills'
import Projects from './right/Projects'
import Divider from './right/Divider'


const Wrapper = ({ heading, ...props }) => {
  return (
    <View style={{ marginRight: '10', marginTop: '10', marginLeft: '5' }}>
      <Text
        style={{
         
          fontSize: '15',
          color: '#000080',
        }}  
      >
        {heading}
      </Text>
      <Divider />
      {props.children}
    </View>
  )
}
const EducationText = ({ text, date }) => (
  <View style={{ paddingBottom: '10' }} key={text}>
    <Text style={{ fontSize: '12' }}>{text}</Text>
    <Text style={{  fontSize: '9', paddingTop: '3' }}>
      {date}
    </Text>
  </View>
)
export const Right = () => {
  const ctx = useContext(BuilderContext)
  const education = ctx.getComponentData('Education')
  const certificates= ctx.getComponentData('Certifications')
  return (
    <View style={styles.section__right}>
      {/* <About text={ctx.getComponentData('Profile').about} /> */}
      <div style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{
            width: '1',
            height: '100%',
            backgroundColor: '#909090',
            marginTop: '8px',
            marginBottom: '8px',
            marginRight: '10px'
          }} />
          <div>

          <EmploymentHistory items={ctx.getComponentData('Employment').items} />
            
            <View style={{marginTop: '-10'}}>

              <Wrapper heading={education.header}>
                {education.items.map((item, index) => (<>
                  <EducationText text={item.degree} date={item.date} key={index} />
                </>))}
              </Wrapper>
            </View>
          
          <KeySkills skills={ctx.getComponentData('KeySkills')} />
          {/* <Projects projects={ctx.getComponentData('Projects')} /> */}
          <Wrapper heading={certificates.header}>
            {certificates.items.map((item, index) => (<>
               <EducationText text={item.name} key={index}/>
            </>))}
           </Wrapper>
          </div>
      </div>
    </View>
  )
}
