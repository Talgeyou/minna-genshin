import styles from './MyCharacter.module.scss';
import React from 'react';
import {
    changeMyCharacterLevel,
    changeMyCharacterName,
    Character,
} from '../../../app/myCharactersSlice';
import { Card, Col, Grid, Input, Row, Select, Space, Typography } from 'antd';
import { useDispatch } from 'react-redux';

interface Props {
    character: Character;
}

export const MyCharacter = ({ character }: Props) => {
    const dispatch = useDispatch();

    const handleCharacterNameChange = (value: string) => {
        dispatch(changeMyCharacterName({ id: character.id, name: value }));
    };

    const handleCharacterLevelChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(
            changeMyCharacterLevel({
                id: character.id,
                level: +e.currentTarget.value,
            })
        );
    };

    return (
        <Card className={styles.myCharacter} style={{ width: '50vh' }}>
            <Space size={[8, 16]}>
                <Row>
                    <Col span={8}>
                        <Typography.Title level={3}>
                            {character.name}
                        </Typography.Title>
                    </Col>
                    <Col span={16}>
                        <Typography.Title level={5}>Level</Typography.Title>
                        {character.level}
                    </Col>
                </Row>
                <Row justify={'space-between'}>
                    <Col span={8}>
                        <Typography.Title level={4}>Weapon</Typography.Title>
                    </Col>
                    <Col span={16}>
                        <Row justify={'center'}>
                            <Col span={24}>
                                <Typography.Title level={5}>
                                    Name
                                </Typography.Title>
                                {character.weapon?.name}
                            </Col>
                        </Row>
                        <Row justify={'center'}>
                            <Col span={24}>
                                <Typography.Title level={5}>
                                    Rarity
                                </Typography.Title>
                                {character.weapon?.rarity}
                            </Col>
                        </Row>
                        <div>
                            Level: <Input value={character.weapon?.level} />
                        </div>
                        <div>
                            <div>Stats</div>
                            <div>
                                <div>Main</div>
                                <div>
                                    Type:{' '}
                                    <Input
                                        value={
                                            character.weapon?.stats.main?.type
                                        }
                                    />
                                </div>
                                <div>
                                    Value:{' '}
                                    <Input
                                        value={
                                            character.weapon?.stats.main?.value
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <div>Sub</div>
                                <div>
                                    Type:{' '}
                                    <Input
                                        value={
                                            character.weapon?.stats.sub?.type
                                        }
                                    />
                                </div>
                                <div>
                                    Value:{' '}
                                    <Input
                                        value={
                                            character.weapon?.stats.sub?.value
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div>
                    <div>Artifacts</div>
                    <div>
                        <div>{character.artifacts.flower?.name}</div>
                        <div>{character.artifacts.flower?.set}</div>
                        <div>
                            <div>
                                <div>
                                    {
                                        character.artifacts.flower?.stats.main
                                            ?.type
                                    }
                                </div>
                                <div>
                                    {
                                        character.artifacts.flower?.stats.main
                                            ?.value
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    {
                                        character.artifacts.flower?.stats.sub
                                            ?.type
                                    }
                                </div>
                                <div>
                                    {
                                        character.artifacts.flower?.stats.sub
                                            ?.value
                                    }
                                </div>
                            </div>
                        </div>
                        <div>{character.artifacts.plume?.name}</div>
                        <div>{character.artifacts.plume?.set}</div>
                        <div>
                            <div>
                                <div>
                                    {
                                        character.artifacts.plume?.stats.main
                                            ?.type
                                    }
                                </div>
                                <div>
                                    {
                                        character.artifacts.plume?.stats.main
                                            ?.value
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    {character.artifacts.plume?.stats.sub?.type}
                                </div>
                                <div>
                                    {
                                        character.artifacts.plume?.stats.sub
                                            ?.value
                                    }
                                </div>
                            </div>
                        </div>
                        <div>{character.artifacts.sands?.name}</div>
                        <div>{character.artifacts.flower?.set}</div>
                        <div>
                            <div>
                                <div>
                                    {
                                        character.artifacts.sands?.stats.main
                                            ?.type
                                    }
                                </div>
                                <div>
                                    {
                                        character.artifacts.sands?.stats.main
                                            ?.value
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    {character.artifacts.sands?.stats.sub?.type}
                                </div>
                                <div>
                                    {
                                        character.artifacts.sands?.stats.sub
                                            ?.value
                                    }
                                </div>
                            </div>
                        </div>
                        <div>{character.artifacts.goblet?.name}</div>
                        <div>{character.artifacts.goblet?.set}</div>
                        <div>
                            <div>
                                <div>
                                    {
                                        character.artifacts.goblet?.stats.main
                                            ?.type
                                    }
                                </div>
                                <div>
                                    {
                                        character.artifacts.goblet?.stats.main
                                            ?.value
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    {
                                        character.artifacts.goblet?.stats.sub
                                            ?.type
                                    }
                                </div>
                                <div>
                                    {
                                        character.artifacts.goblet?.stats.sub
                                            ?.value
                                    }
                                </div>
                            </div>
                        </div>
                        <div>{character.artifacts.circlet?.name}</div>
                        <div>{character.artifacts.circlet?.set}</div>
                        <div>
                            <div>
                                <div>
                                    {
                                        character.artifacts.circlet?.stats.main
                                            ?.type
                                    }
                                </div>
                                <div>
                                    {
                                        character.artifacts.circlet?.stats.main
                                            ?.value
                                    }
                                </div>
                            </div>
                            <div>
                                <div>
                                    {
                                        character.artifacts.circlet?.stats.sub
                                            ?.type
                                    }
                                </div>
                                <div>
                                    {
                                        character.artifacts.circlet?.stats.sub
                                            ?.value
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{character.constellation}</div>
                <div>
                    <div>{character.talents.normalAttack}</div>
                    <div>{character.talents.elementalSkill}</div>
                    <div>{character.talents.elementalBurst}</div>
                </div>
            </Space>
        </Card>
    );
};
