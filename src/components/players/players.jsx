import React from 'react';
import Match from './match'
import Info from './info'
import Referee from './referee'

function Players (props) {
    const { control } = props;

    return (
        <div className = 'table-players table__row'>

            <div className = 'table-players__team'>
                <div className = 'players-all team-1'>
                    <div className = 'players-match tr'>
                        <Match color={'green'} team = {'A'} control = {control} />
                    </div>
                    <div className = 'players-info'>
                        <Info color={'green'} team = {'A'} control = {control} />
                    </div>
                </div>

                <div className = 'players-all team-2'>
                    <div className = 'players-match tr'>
                        <Match color={'blue'} team = {'Б'} control = {control} />
                    </div>
                    <div className = 'players-info'>
                        <Info color={'blue'} team = {'Б'} control = {control} />
                    </div>
                </div>
            </div>
            
            <div className = 'referee-right'>
                <Referee control = {control} />
            </div>
        </div>
    )
}

export default Players;