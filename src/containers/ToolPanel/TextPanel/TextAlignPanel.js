import React from 'react'
import styles from './index.css';

const buttonsConfig = [
    {
        value: 'left',
        label: 'Left',
    },
    {
        value: 'center',
        label: 'Center',
    },
    {
        value: 'right',
        label: 'Right',
    }
]

class TextAlignPanel extends React.Component {
    onClick(e) {
        this.props.setTextAlign(e.target.value);
    }

    render() {
        let self = this;

        return (
            <div>
                Text Align

                <div className="text-align-btn-group">

                    {
                        buttonsConfig.map((button) => {
                            return (
                                <button
                                    className={self.props.activeValue === button.value ? 'text-align-btn-group__btn text-align-btn-group__btn_active' : 'text-align-btn-group__btn'}
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

export default TextAlignPanel;
