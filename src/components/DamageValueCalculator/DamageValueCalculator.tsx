import styles from './DamageValueCalculator.module.scss';
import { Button, Layout } from 'antd';
import CharacterForm from './CharacterForm/CharacterForm';
import { Header } from '../common/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addArtifact, resetArtifacts } from '../../app/artifactsSlice';
import { DamageValueCalculatorUsage } from './DamageValueCalculatorUsage/DamageValueCalculatorUsage';
import ArtifactForm from './ArtifactForm/ArtifactForm';

export const DamageValueCalculator = () => {
    const dispatch = useDispatch();
    const artifacts = useSelector((state: RootState) => state.artifacts.items);

    let renderedArtifacts = [];
    for (let i: number = 0; i < artifacts.length; i++) {
        renderedArtifacts.push(<ArtifactForm id={i} />);
    }

    const handleAddArtifactButtonClick = () => {
        dispatch(addArtifact());
    };

    const handleResetArtifactsButtonClick = () => {
        dispatch(resetArtifacts());
    };

    return (
        <div className={styles.forms}>
            <div className={styles.character}>
                <DamageValueCalculatorUsage />
                <CharacterForm />
            </div>
            <div className={styles.control}>
                <Button type={'primary'} onClick={handleAddArtifactButtonClick}>
                    Add Artifact
                </Button>
                <Button type={'primary'} danger onClick={handleResetArtifactsButtonClick}>
                    Reset Artifacts
                </Button>
            </div>
            <div className={styles.artifacts}>{renderedArtifacts}</div>
        </div>
    );
};
