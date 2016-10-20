import React, { Component, PropTypes } from 'react'
class AnimateData extends Component {

    render(){
            const {className,key,name} = this.props;
            return(
                    <li key={key}>
                        <a href="#">
                            <i className={className}></i>
                            <span>{name}</span>
                        </a>
                    </li>
            )
    }
}
export default AnimateData;
