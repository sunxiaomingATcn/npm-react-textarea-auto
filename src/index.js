/**
 * 高度自动撑开的textarea
 * params maxLength: 默认3000
 * params placeholder: 默认'请输入'
*/
import React from 'react';
import './index.css';

class AutoTextarea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    onKeyUp (ev){
        const { onChange } = this.props;
        onChange && onChange(ev.target.value);
        this.setState({ value: ev.target.value })
    };

    render() {
        const { value } = this.state;
        const { placeholder = '请输入', maxLength = 3000, value: initValue = '', onChange } = this.props;
        return <div
        className="autoTextarea"
        >
            <pre>
                <span>{value}</span>
                <br />
            </pre>
            <textarea
                value={value}
                placeholder={placeholder}
                onChange={this.onKeyUp.bind(this)}
                onKeyUp={this.onKeyUp.bind(this)}
                maxLength={maxLength}
            ></textarea>
        </div>
    }
}

export default AutoTextarea;