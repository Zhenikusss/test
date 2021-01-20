import React, { useRef, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import {
  Link,
} from 'react-router-dom';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  MenuItem
} from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import $ from 'jquery-ajax';
import Players from '../players';
import { defaultValues, team } from '../defaultValues';

function Table () {
  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = data => {
    console.log(data);
    // event.preventDefault();

    //         console.log(event);

    //         $.ajax ({
              
    //           type:'POST',
    //           url:'http://handball.devitgso.iron.hostflyby.net',
    //           dataType:'json',
    //           data:'gender=' + gender
    //         });
  };

  // useEffect(() => {
  //   fetch('http://handball.devitgso.iron.hostflyby.net', {
  //     method : 'GET',
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     setGender(data[data.length - 1].gender);
  //     console.log(data[data.length - 1].gender);
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log('Ошибка!' + error);
  //   });
  // }, []);

  return (
    <div>

        <form onSubmit={handleSubmit(onSubmit)} className="form table">

          <div className = 'table__title'>Белорусская федерация гандбола</div>

          <div className = 'table__contact'>
            <div className = 'table__phone'>Факс: 017-2909654 / Моб. 029-1826983</div>
            <div className = 'table__email'><a href='mailto:handball_blr@mail.ru'>handball_blr@mail.ru</a></div>
          </div>

          <div className = 'table__row'>
            <div className = 'table__rang tr yellow'>Ранг матча</div>
            <div className = 'table__protocol'>
                <div className = 'table__row'>


                  <section className = 'table__rul table__gender tr'>

                  <Controller
                    as={
                       <RadioGroup aria-label="gender">

                        <div className = 'gender__male'>
                         <FormControlLabel
                           value="male"
                           control={<Radio />}
                           label="Мужчины"
                         />
                        </div>

                        <div className = 'gender__female'>
                         <FormControlLabel
                           value="female"
                           control={<Radio />}
                           label="Женщины"
                         />
                        </div>

                       </RadioGroup>
                     }
                      name="gender"
                      control={control}
                  />

                  </section>


                  <div className = 'table__prot tr yellow'>Протокол матча</div>
                  
                </div>

                <div className = 'table__row'>

                <section className = 'table__rul table__tournament tr'>

                <Controller
                    as={

                    <RadioGroup aria-label="tournament">

                     <div className = 'tournament__adults'>
                      <FormControlLabel
                        value="adults"
                        control={<Radio />}
                        label="Взрослые"
                      />
                     </div>

                     <div className = 'tournament__juniors'>
                      <FormControlLabel
                        value="juniors"
                        control={<Radio />}
                        label="Юниоры"
                      />
                     </div>

                     <div className = 'tournament__international'>
                      <FormControlLabel
                        value="international"
                        control={<Radio />}
                        label="Международный"
                      />
                     </div>

                     

                    </RadioGroup>
                    }
                      name="age"
                      control={control}
                  />

                    </section>

                </div>


            </div>

          </div>

          <div className = 'table__row'>
            <div className = 'team'>
              <div className = 'team__item team__home'>

                <div className = 'table__row tr team__title green'>Хозяева</div>
                <div className = 'table__row tr'>
                  <div className = 'team__title-A green'>A</div>
                  <div className = 'team__name'>

                  <Controller
                    as={
                      <TextField
                        select
                        helperText="Пожалуйста, выберите команду"
                      >
                        {team.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                      name="teamA"
                      control={control}
                  />

                  </div>
                </div>
                
              </div>
              <div className = 'team__item team__guest'>
                
              <div className = 'table__row tr team__title blue'>Гости</div>
                <div className = 'table__row tr'>
                  <div className = 'team__title-B blue'>Б</div>
                  <div className = 'team__name'>
                  
                  <Controller
                    as={
                      <TextField
                        select
                        helperText="Пожалуйста, выберите команду"
                      >
                        {team.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                      name="teamB"
                      control={control}
                  />

                  </div>
                </div>

              </div>
            </div>
            <div className = 'result tr'>

              <div className = 'result__title'>Финальный результат</div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="A" name="resultGameA" control={control} />
              </div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="Б" name="resultGameB" control={control} />
              </div>

            </div>
          </div>

          <div className = 'table__row result__time'>

            <div className = 'result tr'>
              <div className = 'result__title yellow'>После 1 тайма (30`)</div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="A" name="resultGame30A" control={control} />
              </div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="Б" name="resultGame30B" control={control} />
              </div>
            </div>

            <div className = 'result tr'>
              <div className = 'result__title yellow'>После основного времени (60`)</div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="А" name="resultGame60A" control={control} />
              </div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="Б" name="resultGame60B" control={control} />
              </div>
            </div>

            <div className = 'result tr'>
              <div className = 'result__title yellow'>1 доп. время</div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="А" name="resultGameAddOneA" control={control} />              
              </div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="Б" name="resultGameAddOneB" control={control} />              
              </div>
            </div>

            <div className = 'result tr'>
              <div className = 'result__title yellow'>2 доп. время</div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="А" name="resultGameAddTwoA" control={control} />              
              </div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="Б" name="resultGameAddTwoB" control={control} />              
              </div>
            </div>

            <div className = 'result tr'>
              <div className = 'result__title yellow'>После 7м бросков</div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="А" name="resultGameAdd7A" control={control} />              
              </div>
              <div className = 'result__team tr'>
                <Controller as={TextField} type="number" label="Б" name="resultGameAdd7B" control={control} />             
              </div>
            </div>

          </div>

          <div className = 'table__row info-match'>
            <div className = 'info-match__item info-match__city tr'>
              <Controller as={TextField} label="Город" name="city" control={control} />           
            </div>
            <div className = 'info-match__item info-match__place tr'>
              <Controller as={TextField} label="Зал" name="place" control={control} />            
            </div>

            <div className = 'info-match__item info-match__date tr'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  as={
                    <KeyboardDatePicker
                      invalidDateMessage='Неверный формат даты'
                      disablePast
                      disableToolbar
                      variant="inline"
                      format="dd.MM.yyyy"
                      label="Дата"
                    />
                  }
                  control={control}
                  name="date"
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className = 'info-match__item info-match__time tr'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  as={
                    <KeyboardTimePicker
                      invalidDateMessage='Неверный формат времени'
                      variant="inline"
                      ampm={false}
                      label="Время"
                    />
                  }
                  control={control}
                  name="time"
                />
              </MuiPickersUtilsProvider>
            </div>

          </div>

          <Players control = {control}/>
      
          <div className="account__func">
            <button className="button">Сохранить</button>
            <button onClick={() => window.print()}>Печать</button>
            <Link to="/account"><button className="button">Назад</button></Link>
          </div>
    
    </form>
    </div> 
  );
}

export default Table;