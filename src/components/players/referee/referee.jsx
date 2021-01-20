import React from 'react';
import { Controller } from 'react-hook-form';
import { 
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio
 } from '@material-ui/core';

function Referee (props) {
    const { control } = props;

    return (
        <div className = 'players-referee__block'>

        <div className = 'players-referee__spectators'>
    
          <div className = 'tr'>
            <Controller as={TextField} type="number" label="Кол-во зрителей" name="spectators" control={control} />
          </div>
    
          <div className = 'tr'>
            <Controller as={TextField} type="number" label="Вместимость зала" name="hallСapacity" control={control} />
          </div>
    
        </div>
    
        <div className = 'protests table__rul tr'>
          <div>Подача протестов</div>
          <Controller
            as={
              <RadioGroup aria-label="protests">
    
                <div className = 'protests__yes'>
                 <FormControlLabel
                   value="Yes"
                   control={<Radio />}
                   label="Да"
                 />
                </div>
    
                <div className = 'protests__no'>
                 <FormControlLabel
                   value="No"
                   control={<Radio />}
                   label="Нет"
                 />
                </div>
    
              </RadioGroup>
              }
              name="protests"
              control={control}
            />
        </div>
    
        <div className = 'players-referee__comments tr'>
          <Controller 
            as={
              <TextField
                placeholder="Замечания"
                multiline
                variant="outlined"
              />  
            } 
            name="comments" 
            control={control} 
          />
          
        </div>
    
        <div className = 'players-referee__num'>
          <div className = 'tr yellow'>
           <Controller as={TextField} label="Судья 1" placeholder="Фамилия, город" name="referee1" control={control} />
          </div>
    
          <div className = 'players-referee__signature tr'>Подпись</div>
    
          <div className = 'tr yellow'>
            <Controller as={TextField} label="Судья 2" placeholder="Фамилия, город" name="referee2" control={control} />
          </div>
          <div className = 'players-referee__signature tr'>Подпись</div>
    
          <div className = 'tr yellow'>
            <Controller as={TextField} label="Инспектор" placeholder="Фамилия, город" name="inspector" control={control} />
          </div>
    
          <div className = 'players-referee__signature tr'>Подпись</div>
    
          <div className = 'tr yellow'>
            <Controller as={TextField} label="Главный судья" placeholder="Фамилия, город" name="mainReferee" control={control} />
          </div>
          <div className = 'players-referee__signature tr'>Подпись</div>
    
        </div>
    
      </div>
    )
}

export default Referee;