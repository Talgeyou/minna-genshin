import styles from './MyCharacters.module.scss';
import { Button, Layout, Typography } from 'antd';
import { Header } from '../common/Header/Header';
import { selectCurrentUser } from '../../app/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addMyCharacter, Character, selectMyCharacters } from '../../app/myCharactersSlice';
import { MyCharacter } from './MyCharacter/MyCharacter';

interface Props {}

export const MyCharacters = (props: Props) => {
    const currentUser = useSelector(selectCurrentUser);
    const myCharacters = useSelector(selectMyCharacters);

    const dispatch = useDispatch();

    const handleAddCharacterButtonClick = () => {
        const newCharacter: Character = {
            id:
                myCharacters && myCharacters.length > 0
                    ? myCharacters[myCharacters.length - 1].id + 1
                    : 0,
            name: '',
            level: 0,
            weapon: {
                name: '',
                rarity: 5,
                level: 0,
                stats: {
                    main: {
                        type: '',
                        value: 0,
                    },
                    sub: {
                        type: '',
                        value: 0,
                    },
                },
            },
            artifacts: {
                flower: {
                    name: '',
                    set: '',
                    stats: {
                        main: {
                            type: 'HP',
                            value: 0,
                        },
                        sub: {
                            type: '',
                            value: 0,
                        },
                    },
                },
                plume: {
                    name: '',
                    set: '',
                    stats: {
                        main: {
                            type: 'ATK',
                            value: 0,
                        },
                        sub: {
                            type: '',
                            value: 0,
                        },
                    },
                },
                sands: {
                    name: '',
                    set: '',
                    stats: {
                        main: {
                            type: 'HP%',
                            value: 0,
                        },
                        sub: {
                            type: 'HP%',
                            value: 0,
                        },
                    },
                },
                goblet: {
                    name: '',
                    set: '',
                    stats: {
                        main: {
                            type: 'HP%',
                            value: 0,
                        },
                        sub: {
                            type: 'HP%',
                            value: 0,
                        },
                    },
                },
                circlet: {
                    name: '',
                    set: '',
                    stats: {
                        main: {
                            type: 'HP%',
                            value: 0,
                        },
                        sub: {
                            type: 'HP%',
                            value: 0,
                        },
                    },
                },
            },
            constellation: 0,
            talents: {
                normalAttack: 0,
                elementalSkill: 0,
                elementalBurst: 0,
            },
        };
        dispatch(addMyCharacter(newCharacter));
    };

    if (!currentUser) {
        return (
            <div>
                <Typography.Title>My Characters</Typography.Title>
                <Typography.Paragraph className={styles.text}>
                    You should sign in to store your characters
                </Typography.Paragraph>
            </div>
        );
    }

    return (
        <div>
            <Typography.Title className={styles.title}>
                <span className={styles.title__text}>My Characters</span>
            </Typography.Title>
            <div className={styles.characters}>
                <div className={styles.characters__button}>
                    <Button type={'primary'} onClick={handleAddCharacterButtonClick}>
                        Add Character
                    </Button>
                </div>
                <div className={styles.charactersList}>
                    {myCharacters.length > 0
                        ? myCharacters.map((character) => <MyCharacter character={character} />)
                        : ''}
                </div>
            </div>
        </div>
    );
};
