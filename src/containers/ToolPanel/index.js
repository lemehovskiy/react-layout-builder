import React from 'react'
import TextPanel from './TextPanel';
import SizePanel from './SizePanel';
import PositionPanel from './PositionPanel';
import FillPanel from './FillPanel/FillPanel';
import StrokePanel from './StrokePanel/StrokePanel';
import Figures from './Figures/Figures'

import styles from './index.module.scss';

class ToolPanel extends React.Component {
    render() {
        return (
            <div className={styles.toolPanel}>
                <Figures/>
                <TextPanel/>
                <PositionPanel/>
                <SizePanel/>
                <FillPanel/>
                <StrokePanel/>
            </div>
        )
    }
}

export default ToolPanel
