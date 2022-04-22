import React,{useContext} from 'react'
import ProfileName from './ProfileName'


import { BuilderContext } from '../../../../App'
import About from '../right/About'


export default function Top() {
    const ctx = useContext(BuilderContext)
    const profile = ctx.getComponentData('Profile')

  return (
    <>
       <div style={{display: 'flex', flexDirection : 'row', justifyContent:'space-between', alignItems: 'flex-start'}}>

            <ProfileName 
             name={profile.name}
             profession={profile.profession}
             />

          <About text={ctx.getComponentData('Profile').about} />
       </div>
        
    </>
  )
}
