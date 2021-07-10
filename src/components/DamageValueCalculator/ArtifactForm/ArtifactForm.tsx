import styles from "./ArtifactForm.module.scss";
import { Button, Form, Input, Statistic, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import {
  deleteArtifact,
  setArtifactAttackPercentage,
  setArtifactCritDamage,
  setArtifactCritRate,
  setArtifactElementalBonus,
  setArtifactPhysicalBonus,
  setArtifactRawAttack,
  setDamageValue,
} from "../../../app/artifactsSlice";
import { calculateDV } from "../../../util/damageValue";
import { CloseOutlined } from "@ant-design/icons";

interface Props {
  id: number;
}

const ArtifactForm = ({ id }: Props) => {
  const dispatch = useDispatch();

  const character = useSelector((state: RootState) => state.character);

  const rawAttack = useSelector(
    (state: RootState) => state.artifacts.items[id].rawAttack
  );
  const attackPercentage = useSelector(
    (state: RootState) => state.artifacts.items[id].attackPercentage
  );
  const critRate = useSelector(
    (state: RootState) => state.artifacts.items[id].critRate
  );
  const critDamage = useSelector(
    (state: RootState) => state.artifacts.items[id].critDamage
  );
  const elementalBonus = useSelector(
    (state: RootState) => state.artifacts.items[id].elementalBonus
  );
  const physicalBonus = useSelector(
    (state: RootState) => state.artifacts.items[id].physicalBonus
  );
  const damageValue = useSelector(
    (state: RootState) => state.artifacts.items[id].damageValue
  );

  const handleDeleteButtonClick = () => {
    dispatch(deleteArtifact(id));
  };

  const handleRawAttackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setArtifactRawAttack({ id, rawAttack: +e.currentTarget.value }));
    dispatch(
      setDamageValue({
        id,
        damageValue: calculateDV(character, {
          rawAttack: +e.currentTarget.value,
          attackPercentage,
          critRate,
          critDamage,
          elementalBonus,
          physicalBonus,
        }),
      })
    );
  };

  const handleAttackPercentageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      setArtifactAttackPercentage({
        id,
        attackPercentage: +e.currentTarget.value,
      })
    );
    dispatch(
      setDamageValue({
        id,
        damageValue: calculateDV(character, {
          rawAttack,
          attackPercentage: +e.currentTarget.value,
          critRate,
          critDamage,
          elementalBonus,
          physicalBonus,
        }),
      })
    );
  };

  const handleCritRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setArtifactCritRate({ id, critRate: +e.currentTarget.value }));
    dispatch(
      setDamageValue({
        id,
        damageValue: calculateDV(character, {
          rawAttack,
          attackPercentage,
          critRate: +e.currentTarget.value,
          critDamage,
          elementalBonus,
          physicalBonus,
        }),
      })
    );
  };

  const handleCritDamageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setArtifactCritDamage({ id, critDamage: +e.currentTarget.value }));
    dispatch(
      setDamageValue({
        id,
        damageValue: calculateDV(character, {
          rawAttack,
          attackPercentage,
          critRate,
          critDamage: +e.currentTarget.value,
          elementalBonus,
          physicalBonus,
        }),
      })
    );
  };

  const handleElementalBonusChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      setArtifactElementalBonus({ id, elementalBonus: +e.currentTarget.value })
    );
    dispatch(
      setDamageValue({
        id,
        damageValue: calculateDV(character, {
          rawAttack,
          attackPercentage,
          critRate,
          critDamage,
          elementalBonus: +e.currentTarget.value,
          physicalBonus,
        }),
      })
    );
  };

  const handlePhysicalBonusChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      setArtifactPhysicalBonus({ id, physicalBonus: +e.currentTarget.value })
    );
    dispatch(
      setDamageValue({
        id,
        damageValue: calculateDV(character, {
          rawAttack,
          attackPercentage,
          critRate,
          critDamage,
          elementalBonus,
          physicalBonus: +e.currentTarget.value,
        }),
      })
    );
  };

  return (
    <div className={styles.artifact}>
      <Form className={styles.form} layout={"vertical"}>
        <div className={styles.form__header}>
          <Typography.Title className={styles.form__title} level={2}>
            Artifact {id + 1}
          </Typography.Title>
          <Button
            className={styles.close}
            type={"primary"}
            danger
            onClick={handleDeleteButtonClick}
          >
            <CloseOutlined />
          </Button>
        </div>
        <Form.Item>
          <Input
            type="number"
            prefix={<div className={styles.field__prefix}>Attack</div>}
            placeholder="Artifact's Raw Attack"
            value={rawAttack}
            onChange={handleRawAttackChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            prefix={<div className={styles.field__prefix}>Attack (%)</div>}
            placeholder="Artifact's Attack Percentage"
            value={attackPercentage}
            onChange={handleAttackPercentageChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            prefix={<div className={styles.field__prefix}>Crit Rate</div>}
            placeholder="Artifact's Crit Rate"
            value={critRate}
            onChange={handleCritRateChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            prefix={<div className={styles.field__prefix}>Crit Damage</div>}
            placeholder="Artifact's Crit Damage"
            value={critDamage}
            onChange={handleCritDamageChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            prefix={<div className={styles.field__prefix}>Elemental Bonus</div>}
            placeholder="Artifact's Elemental Bonus"
            value={elementalBonus}
            onChange={handleElementalBonusChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="number"
            prefix={<div className={styles.field__prefix}>Physical Bonus</div>}
            placeholder="Artifact's Physical Bonus"
            value={physicalBonus}
            onChange={handlePhysicalBonusChange}
          />
        </Form.Item>
        <Form.Item>
          <Statistic
            title={"Damage Value"}
            value={`${(damageValue * 100).toFixed(2)}%`}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(ArtifactForm);
