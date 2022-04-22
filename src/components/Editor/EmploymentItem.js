import TextArea from './TextArea'
import TextInput from './TextInput'
import { useState } from 'react'
import { Hide } from './Icons/Hide'
import Show from './Icons/Show'
const EmploymentItem = ({ data, index, handleChange }) => {
  const [isToggled, setIsToggled] = useState(true)
  return (
    <div className='px-5 py-2'>
      {!isToggled ? (
        <Hide
          handleClick={() => {
            setIsToggled(true)
          }}
        />
      ) : (
        <Show
          handleClick={() => {
            setIsToggled(!isToggled)
          }}
        />
      )}

      <TextInput
        placeholder='Postion Title'
        style='pb-2'
        isDisabled={isToggled}
        name='position'
        defaultValue={data.position}
        handleChange={(e) => handleChange(index, e)}
      />
      <TextInput
        placeholder='Company'
        style='pb-2'
        isDisabled={isToggled}
        name='position'
        defaultValue={data.company}
        handleChange={(e) => handleChange(index, e)}
      />
      {!isToggled && (
        <div>
          <TextInput
            placeholder='Date From'
            style='pb-2'
            name='date'
            defaultValue={data.from}
            handleChange={(e) => handleChange(index, e)}
          />
          <TextInput
            placeholder='To'
            style='pb-2'
            name='date'
            defaultValue={data.to}
            handleChange={(e) => handleChange(index, e)}
          />
          <TextArea
            placeholder='Position Description'
            name='description'
            defaultValue={data.description}
            handleChange={(e) => handleChange(index, e)}
          />
          <TextArea
            placeholder='Responsibilities'
            name='responsibilities'
            defaultValue={data.responsibilities}
            handleChange={(e) => handleChange(index, e)}
          />
        </div>
      )}
    </div>
  )
}

export default EmploymentItem
