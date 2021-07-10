import styles from './DamageValueCalculatorUsage.module.scss';
import { Steps } from 'antd';
import { useState } from 'react';

export const DamageValueCalculatorUsage = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className={styles.steps}>
            <Steps
                current={currentStep}
                onChange={(step: number) => setCurrentStep(step)}
                direction="vertical"
            >
                <Steps.Step
                    title="Step 1"
                    description="Unequip artifact from it's slot to compare it with another artifact"
                />
                <Steps.Step
                    title="Step 2"
                    description="Input your character's stats in Character form"
                />
                <Steps.Step
                    title="Step 3"
                    description="Input artifacts' stats in Artifacts' forms"
                />
            </Steps>
        </div>
    );
};
