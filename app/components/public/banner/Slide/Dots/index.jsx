/**
 * slide dots 指示器
 */

import React, { Component } from 'react'
import CSSModules from 'react-css-modules/dist'
import styles from './style.css'

class Dots extends Component {
	render() {
		return (
			<span styleName="dots" className={this.props.active} onClick={this.props.clickDots}></span>
		)
	}
}

export default CSSModules(Dots, styles)