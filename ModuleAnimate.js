import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import AnimateData from './AnimateData';
import SvgAnimate from './SvgAnimate';
let i = 0;
class ModuleAnimate extends Component {
        constructor(props, context)
        {
            super(props, context);
            this.state = {
                isBgShow: true,
                tweenData: 'M300-10c0,0,0,164,0,410c0,232,0,410,0,410',
            };
        };
        handleClick()
        {
            const {pathState} = this.props;
            const tweenData = pathState[i];
            this.setState({isBgShow: !this.state.isBgShow, tweenData});
            i++;
            i = i >= pathState.length ? 0 : i;
        }
        //时间延迟
        // componentDidMount() {
        //     const {pathState} = this.props;
        //     const tweenData = pathState[i];
        //     this.setState({tweenData});
        //     i++;
        //     i = i >= pathState.length ? 0 : i;
        //     this.timer = setTimeout(
        //         () => {
        //             this.setState({isBgShow: !this.state.isBgShow});
        //         },
        //         250
        //     );
        // }
        render()
        {
            let classString = 'menu';
            if (this.state.isBgShow) {
                classString = 'menu ';
            } else {
                classString = 'menu menu--anim menu--open';//menu--open 250
            }
            return (
                <div className="container">
                    <nav id="menu" className={classString}>
                        <button className="menu__handle" onClick={this.handleClick.bind(this)}><span>Menu</span>
                        </button>
                        <div className="menu__inner">
                            <ul id="menu_nav">
                                {this.getItems()}
                            </ul>
                        </div>
                        <div className="morph-shape">
                            <SvgAnimate tweenData={this.state.tweenData}/>
                        </div>
                    </nav>
                </div>
            )
        }
    getItems(){
        const {data} = this.props;
        return data.map((data, i) => {
            return  <AnimateData className={data.className} name={data.name} key={data.key}/>
        });
    }
}
export default ModuleAnimate;
