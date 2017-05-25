/**
 * Sliders
 */
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules/dist'
import styles from './style.css'

const propTypes = {
	link: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired
}

const defaultProps = {
	link: "javascript:void(0);"
}

class Sliders extends Component {
	constructor(props) {
		super(props)
		this.state={
			width:this.props.width,
			paddingTop:this.props.height
		}
	}

    linClick = ()=>{

		if (this.props.link){

            this.props.link();
		}
	}

	render() {
		var aStyles = {
			width: this.state.width + "px"
		}
		var picStyles = {
			paddingTop:this.state.paddingTop+'px',
			backgroundImage: "url(" + this.props.src + ")"
			
		}
		return (
			<a styleName="slide-a" style={aStyles} onClick={this.linClick.bind(this)}>
				<div styleName="slide-li" style={picStyles}></div>
			</a>
		)
	}
}

Sliders.propTypes = propTypes
Sliders.defaultProps = defaultProps

export default CSSModules(Sliders, styles);