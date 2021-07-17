import styles from './CharacterForm.module.scss';
import { Form, Input, Slider, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import {
    setCharacterBaseAttack,
    setCharacterBonusAttack,
    setCharacterCritDamage,
    setCharacterCritRate,
    setCharacterElementalBonus,
    setCharacterElementalDamageProportion,
    setCharacterPhysicalBonus,
} from '../../../app/characterSlice';
import { calculateDV } from '../../../util/damageValue';
import { setDamageValue } from '../../../app/artifactsSlice';

const CharacterForm = () => {
    const dispatch = useDispatch();

    const artifacts = useSelector((state: RootState) => state.artifacts.items);

    const character = useSelector((state: RootState) => state.character);

    const {
        baseAttack,
        bonusAttack,
        critRate,
        critDamage,
        elementalBonus,
        physicalBonus,
        elementalDamageProportion,
    } = character;

    useEffect(() => {
        console.log('Effect');
        for (let i: number = 0; i < artifacts.length; i++) {
            dispatch(
                setDamageValue({
                    id: i,
                    damageValue: calculateDV(character, artifacts[i]),
                })
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [character]);

    const handleBaseAttackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCharacterBaseAttack(+e.currentTarget.value));
    };

    const handleBonusAttackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCharacterBonusAttack(+e.currentTarget.value));
    };

    const handleCritRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCharacterCritRate(+e.currentTarget.value));
    };

    const handleCritDamageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCharacterCritDamage(+e.currentTarget.value));
    };

    const handleElementalBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCharacterElementalBonus(+e.currentTarget.value));
    };

    const handlePhysicalBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCharacterPhysicalBonus(+e.currentTarget.value));
    };

    const handleElementalDamageProportionChange = (value: number) => {
        dispatch(setCharacterElementalDamageProportion(value));
    };

    return (
        <div className={styles.character}>
            <Form className={styles.form} layout={'vertical'}>
                <Typography.Title className={styles.form__title} level={2}>
                    Character
                </Typography.Title>
                <Form.Item>
                    <Input
                        type="number"
                        prefix={<div className={styles.field__prefix}>Base Attack</div>}
                        placeholder="Character's Base Attack"
                        value={baseAttack}
                        onChange={handleBaseAttackChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        type="number"
                        prefix={<div className={styles.field__prefix}>Bonus Attack</div>}
                        placeholder="Character's Bonus Attack"
                        value={bonusAttack}
                        onChange={handleBonusAttackChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        type="number"
                        prefix={<div className={styles.field__prefix}>Crit Rate</div>}
                        placeholder="Character's Crit Rate"
                        min={5}
                        value={critRate}
                        onChange={handleCritRateChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        type="number"
                        prefix={<div className={styles.field__prefix}>Crit Damage</div>}
                        placeholder="Character's Crit Damage"
                        min={50}
                        value={critDamage}
                        onChange={handleCritDamageChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        type="number"
                        prefix={<div className={styles.field__prefix}>Elemental Bonus</div>}
                        placeholder="Character's Elemental Bonus"
                        value={elementalBonus}
                        onChange={handleElementalBonusChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        type="number"
                        prefix={<div className={styles.field__prefix}>Physical Bonus</div>}
                        placeholder="Character's Physical Bonus"
                        value={physicalBonus}
                        onChange={handlePhysicalBonusChange}
                    />
                </Form.Item>
                <Form.Item label="Elemental Damage Proportion (%)">
                    <Slider
                        marks={{
                            0: 'Physical',
                            25: '25%',
                            50: '50%',
                            75: '75%',
                            100: 'Elemental',
                        }}
                        value={elementalDamageProportion}
                        onChange={handleElementalDamageProportionChange}
                    />
                </Form.Item>
            </Form>
        </div>
    );
};

export default React.memo(CharacterForm);
