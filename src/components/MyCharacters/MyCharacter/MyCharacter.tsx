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
        <Card title={'Character'} type={'inner'}>
            <Card
                className={styles.myCharacter}
                style={{ width: '50vh' }}
                title={<Input defaultValue={character.name} />}
                type={'inner'}
            >
                <Card.Grid>
                    <Statistic title={'Level'} value={character.level} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Constellation'} value={character.level} />
                </Card.Grid>
            </Card>

            <Card
                className={styles.myCharacter}
                style={{ width: '50vh' }}
                title={'Talents'}
                type={'inner'}
            >
                <Card.Grid>
                    <Statistic title={'Normal Attack'} value={character.talents.normalAttack} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Elemental Skill'} value={character.talents.elementalSkill} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Elemental Burst'} value={character.talents.elementalBurst} />
                </Card.Grid>
            </Card>

            <Card
                className={styles.myCharacter}
                style={{ width: '50vh' }}
                title={'Weapon'}
                type={'inner'}
            >
                <Card.Grid>
                    <span>Name: {character.weapon?.name}</span>
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Rarity'} value={character.weapon?.rarity} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Level'} value={character.weapon?.level} />
                </Card.Grid>
            </Card>

            <Card
                className={styles.myCharacter}
                style={{ width: '50vh' }}
                title={'Artifacts'}
                type={'inner'}
            >
                <Card.Grid>
                    <Statistic title={'Rarity'} value={character.weapon?.rarity} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Rarity'} value={character.weapon?.rarity} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Level'} value={character.weapon?.level} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Level'} value={character.weapon?.level} />
                </Card.Grid>
                <Card.Grid>
                    <Statistic title={'Level'} value={character.weapon?.level} />
                </Card.Grid>
            </Card>
        </Card>
    );
};
