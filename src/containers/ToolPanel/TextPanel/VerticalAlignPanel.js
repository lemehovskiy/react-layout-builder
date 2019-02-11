import React from 'react'
import styles from './index.css';

const buttonsConfig = [
    {
        value: 'top',
        label: 'Top',
    },
    {
        value: 'middle',
        label: 'Middle',
    },
    {
        value: 'bottom',
        label: 'Bottom',
    }
]

class VerticalAlignPanel extends React.Component {
    onClick(e) {
        this.props.setVerticalAlign(e.target.value);
    }

    render() {
        let self = this;

        return (
            <div>
                Vertical Align

                <div className="vertical-align-btn-group">

                    {
                        buttonsConfig.map((button) => {
                            return (
                                <button
                                    className={self.props.activeValue === button.value ? 'vertical-align-btn-group__btn vertical-align-btn-group__btn_active' : 'vertical-align-btn-group__btn'}
                                    key={button.value} value={button.value}
                                    onClick={self.onClick.bind(this)}>{button.label}</button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default VerticalAlignPanel;
