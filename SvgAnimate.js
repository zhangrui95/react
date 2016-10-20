import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import TweenOne from 'rc-tween-one';
import {Button} from 'antd';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
TweenOne.plugins.push(SvgMorphPlugin);
let i = 0;
class SvgAnimate extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            tweenData: '100%',
        };
    }
    render() {
        const {tweenData}=this.props;
        return (
            <div style={{ textAlign: 'center', marginTop: 0 }}>
                <svg width="600" height="800" version="1.2"
                     style={{ display: 'block', margin: 'auto' }}
                >
                    <TweenOne
                        animation={{
                          d: tweenData,
                          ease:"easeOutElastic",
                          yoyo: true,
                          repeat: 1,
                          duration:350,
                          }}
                        style={{ fill: 'none', strokeWidth:2, stroke: '#5F656F' }}
                        component="path"
                        d='M300-10c0,0,0,164,0,410c0,232,0,410,0,410'
                        attr="attr"
                    />
                </svg>
            </div>
        );
    }
}
SvgAnimate.propTypes = {
    children: React.PropTypes.any,
    className: React.PropTypes.string,
    paused: React.PropTypes.bool,
};
export default SvgAnimate;


