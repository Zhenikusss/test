import React from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

function Match (props) {
    const { control } = props;
    const classForSignature = `players-match__signature ${props.color}`;

    return (
        
        <div className = 'players-match__block'>

            <div className = 'tr'>
              Командный тайм-аут
              <Controller as={TextField} type="number" label="Т-А №1" name="timeOut1" control={control} />
              <Controller as={TextField} type="number" label="Т-А №2" name="timeOut2" control={control} />
              <Controller as={TextField} type="number" label="Т-А №3" name="timeOut3" control={control} />
            </div>
            <div className = 'tr'>
              <Controller as={TextField} type="number" label="Кол-во 7 м" name="num7m" control={control} />
              <Controller as={TextField} type="number" label="Кол-во голов" name="numGoals" control={control} />
            </div>
            <div className = {classForSignature}>Подпись представителя команды {props.team} (оф.А)</div>

          </div>
        
    )
}

export default Match;