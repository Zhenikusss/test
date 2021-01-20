import React from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from "react-hook-form";

const tableRow = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

function Info (props) {
    const { control } = props;

    console.log(props);

    return (
            <div className = 'info-players__block'>

                <table className = 'info-players__table' border="1">
                <tbody>
                    <tr className={props.color}>
                        <th>{props.team}</th>
                        <th colSpan = '9'>Фамилия, имя игроков и официальных лиц (Оф. А-Г)</th>
                    </tr>
                    <tr className={props.color}>
                        <th>№</th>
                        <th>Команда {props.team}</th>
                        <th>Г</th>
                        <th>П</th>
                        <th>2`</th>
                        <th>2`</th>
                        <th>2`</th>
                        <th>2`</th>
                        <th>ДР</th>
                        <th>КШ</th>
                    </tr>

                    {tableRow.map((num, index) =>

                        <tr>
                            <td><Controller as={TextField} type="number" label="" name={'player-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} label="" name={'teamPlayer-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} type="number" label="" name={'gPlayer-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} type="number" label="" name={'pPlayer-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} type="number" label="" name={'t1Player-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} type="number" label="" name={'t2Player-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} type="number" label="" name={'t3Player-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} type="number" label="" name={'t4Player-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} type="number" label="" name={'drPlayer-' + (index+1)} control={control} /></td>
                            <td><Controller as={TextField} type="number" label="" name={'kshPlayer-' + (index+1)} control={control} /></td>
                        </tr>

                    )}

                    <tr>
                        <td>Оф. А</td>
                        <td><Controller as={TextField} label="" name="teamOfA" control={control} /></td>
                        <td rowSpan = '2'><Controller as={TextField} label="" name="teamOfAPoint" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="1" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="2" control={control} /></td>
                        <td rowSpan = '4'>х</td>
                        <td rowSpan = '4'>х</td>
                        <td><Controller as={TextField} type="number" label="" name="3" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="4" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="5" control={control} /></td>
                    </tr>

                    <tr>
                        <td>Оф. Б</td>
                        <td><Controller as={TextField} label="" name="11" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="12" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="13" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="14" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="15" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="16" control={control} /></td>
                    </tr>

                    <tr>
                        <td>Оф. В</td>
                        <td><Controller as={TextField} label="" name="21" control={control} /></td>
                        <td rowSpan = '2'>Итого</td>
                        <td><Controller as={TextField} type="number" label="" name="22" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="23" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="24" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="25" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="26" control={control} /></td>
                    </tr>

                    <tr>
                        <td>Оф. Г</td>
                        <td><Controller as={TextField} label="" name="31" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="32" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="33" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="34" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="35" control={control} /></td>
                        <td><Controller as={TextField} type="number" label="" name="36" control={control} /></td>
                    </tr>
                </tbody>
                </table>    
                    
            </div>
    )
}

export default Info;