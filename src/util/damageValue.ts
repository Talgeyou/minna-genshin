type Character = {
    baseAttack: number;
    bonusAttack: number;
    critRate: number;
    critDamage: number;
    elementalBonus: number;
    physicalBonus: number;
    elementalDamageProportion: number;
};

type Artifact = {
    rawAttack: number;
    attackPercentage: number;
    critRate: number;
    critDamage: number;
    elementalBonus: number;
    physicalBonus: number;
};

export const calculateDV = (character: Character, artifact: Artifact) => {
    const rawAttackDV = calculateRawAttackDV(
        character.baseAttack,
        character.bonusAttack,
        artifact.rawAttack
    );
    const attackPercentageDV = calculateAttackPercentageDV(
        character.baseAttack,
        character.bonusAttack,
        artifact.attackPercentage
    );
    const critDV = calculateCritDV(
        character.critRate,
        character.critDamage,
        artifact.critRate,
        artifact.critDamage
    );

    const elementalBonusDV = calculateDamageTypeBonusDV(
        character.elementalBonus,
        artifact.elementalBonus,
        character.elementalDamageProportion
    );
    const physicalBonusDV = calculateDamageTypeBonusDV(
        character.physicalBonus,
        artifact.physicalBonus,
        100 - character.elementalDamageProportion
    );

    return rawAttackDV + attackPercentageDV + critDV + elementalBonusDV + physicalBonusDV;
};

const calculateRawAttackDV = (
    characterBaseAttack: number,
    characterBonusAttack: number,
    artifactRawAttack: number
) => {
    return artifactRawAttack / (characterBaseAttack + characterBonusAttack);
};

const calculateAttackPercentageDV = (
    characterBaseAttack: number,
    characterBonusAttack: number,
    artifactAttackPercentage: number
) => {
    return (
        (characterBaseAttack * (artifactAttackPercentage / 100)) /
        (characterBaseAttack + characterBonusAttack)
    );
};

const calculateCritDV = (
    characterCritRate: number,
    characterCritDamage: number,
    artifactCritRate: number,
    artifactCritDamage: number
) => {
    if (characterCritRate + artifactCritRate > 100) {
        artifactCritRate = 100 - characterCritRate;
    }
    return (
        ((characterCritRate * characterCritDamage) / 10000 +
            (characterCritRate * artifactCritDamage) / 10000 +
            (characterCritDamage * artifactCritRate) / 10000 +
            (artifactCritRate * artifactCritDamage) / 10000 +
            1) /
            ((characterCritRate * characterCritDamage) / 10000 + 1) -
        1
    );
};

const calculateDamageTypeBonusDV = (
    characterElementalBonus: number,
    artifactElementalBonus: number,
    characterElementalDamageProportion: number
) => {
    if (characterElementalBonus === 0) {
        return ((artifactElementalBonus / 100) * characterElementalDamageProportion) / 100;
    }
    return (
        ((characterElementalBonus / 100 + artifactElementalBonus / 100) /
            (characterElementalBonus / 100)) *
        (characterElementalDamageProportion / 100)
    );
};
