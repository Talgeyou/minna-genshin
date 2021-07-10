import styles from './MyCharacter.module.scss';
import React from 'react';
import {
    changeMyCharacterLevel,
    changeMyCharacterName,
    Character,
} from '../../../app/myCharactersSlice';
import { Card, Col, Grid, Input, Row, Select, Space, Statistic, Typography } from 'antd';
import { useDispatch } from 'react-redux';

interface Props {
    character: Character;
}

export const MyCharacter = ({ character }: Props) => {
    const dispatch = useDispatch();

    const handleCharacterNameChange = (value: string) => {
        dispatch(changeMyCharacterName({ id: character.id, name: value }));
    };

    const handleCharacterLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            changeMyCharacterLevel({
                id: character.id,
                level: +e.currentTarget.value,
            })
        );
    };

    return (
        <Card>
            <Card className={styles.myCharacter} style={{ width: '50vh' }} title={'Character'}>
                <Card.Grid>
                    <Statistic title={'Name'} value={character.name} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Level'} value={character.level} />
                </Card.Grid>
            </Card>

            <Card className={styles.myCharacter} style={{ width: '50vh' }} title={'Weapon'}>
                <Card.Grid>
                    <Statistic title={'Level'} value={character.level} />
                </Card.Grid>
            </Card>
        </Card>
    );
};
