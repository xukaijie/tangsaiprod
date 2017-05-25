/**
 * Slide 
 * 
 * author 许智源
 *
 * 参数说明：
 *
 * baseWidth:宽度
 * baseHeight：高度
 * continuous:是否循环
 * slideSpeed:滚动速度
 *
 * 使用方法
 *
 * <div className={style.conRight}>
 <Slide opts={[{
			link: 'javascript:;',
			src: banner1
		},{
			src: banner2
		},{
			link: '#',
			src: banner3
		},{
			link: '#',
			src: banner3
		}]}  baseWidth ={this.state.bannerweight} />
 </div>
 *
 */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules/dist'
import styles from './style.css'

import Sliders from './Sliders'
import Dots from './Dots'

var SlideInter;

class Slide extends Component {
	constructor(props) {
		super(props)
		this.autoSlideFun = this.autoSlideFun.bind(this)
	}

	state = {
		baseWidth: this.props.baseWidth, //宽度
		baseHeight: this.props.baseHeight,//高度
		startX: "",
		curX: "",
		moveX: "",
		time: 0,
		distance: 0, //移动距离
		index: 0,
		length: this.props.opts.length,
		continuous: true, //是否循环滚动
		autoSlide: true,
		slideSpeed: 2000
	}

	/**
	 * index控制
	 * @param  {num} go   指定index数值
	 * @param  {num} time transition时间
	 */
	slideFun (go, time) {
		var _index = this.state.index
		if(typeof go === "number") {
			_index = go
		} else if(go == "next") {
			_index ++
		} else if(go == "prev") {
			_index --
		}

		// 是否循环滚动
		if(this.state.continuous) {
			if(_index > this.state.length) {
				this.scrollFun(_index, time)
				//返回第一个
				_index = 1
				setTimeout(() => {
					this.scrollFun(_index, 0)
					this.autoSlideFun()
					this.setState({
						index: _index
					})
				}, 500);
			} else if(_index < 1) {
				this.scrollFun(_index, time)
				//返回最后一个
				_index = this.state.length
				setTimeout(() => {
					this.scrollFun(_index, 0)
					this.autoSlideFun()
					this.setState({
						index: _index
					})
				}, 500)
			} else {
				this.scrollFun(_index, time)
				this.setState({
					index: _index
				})
			}
		} else {
			if(_index >= this.state.length) {
				_index = 0;
			} else if(_index < 0) {
				_index = this.state.length - 1;
			}
			this.scrollFun(_index, time)
			this.setState({
				index: _index
			})
		}
	}

	/**
	 * 滚动函数
	 * @param  {num} index 指定滚动的index
	 * @param  {num} time  transition的时间
	 */
	scrollFun (index, time) {
		this.setState({
			time: time,
			distance: -(index * this.state.baseWidth)
		})
	}

	autoSlideFun() {
		if(this.state.autoSlide) {
			this.stopSlideFun()
			SlideInter = setInterval(() => {
				this.slideFun('next', '.5')
			}, this.state.slideSpeed)
		}
	}

	stopSlideFun() {
		clearInterval(SlideInter)
	}


	componentWillUnmount(){
		if (SlideInter){
			this.stopSlideFun()
		}
	}

	componentDidMount() {
		// 循环滚动 index+1
		if(this.state.continuous) {
			var newIndex = this.state.index + 1
			this.setState({
				index: newIndex,
				distance: -(newIndex * this.state.baseWidth)
			})
		}
		this.autoSlideFun();
	}

	ClickDots(index){
		this.slideFun(index+1,'.3')
	}



	render() {
		var opts = this.props.opts
		var slideStyle = {
			width: (this.state.baseWidth * (opts.length + 2)) + "px",
			WebkitTransform: 'translate3d(' + this.state.distance + "px,0,0)",
			transform: 'translate3d(' + this.state.distance + "px,0,0)",
			WebkitTranstion: "all " + this.state.time + "s",
			transition: "all " + this.state.time + "s"
		}
		var sliders = opts.map((item, i) => {
			return (
				<Sliders link={item.link} src={item.src} key={i} width={this.state.baseWidth} height={this.state.baseHeight}/>
			)
		})

		var dots = opts.map((item, i) => {
			return (

				<Dots key={i} clickDots={this.ClickDots.bind(this,i)} active={(this.state.continuous ? (this.state.index-1) : this.state.index) == i ? 'active' : ''} />
			)
		}) 

		return (
			<div styleName="slide-wrap">
				<div styleName="slide-ul" style={slideStyle} onMouseOver={e=>this.stopSlideFun(e)} onMouseOut={e=>this.autoSlideFun(e)} >
					{this.state.continuous ? <Sliders link={opts[opts.length-1].link} src={opts[opts.length-1].src} picWidth={this.state.baseWidth} width={this.state.baseWidth} height={this.state.baseHeight} /> : ""}
					{sliders} 
					{this.state.continuous ? <Sliders link={opts[0].link} src={opts[0].src} picWidth={this.state.baseWidth} width={this.state.baseWidth} height={this.state.baseHeight} /> : ""}
				</div>
				<div styleName="dots-wrap">
					{dots}
				</div>
			</div>
		);
	}
}

export default CSSModules(Slide, styles);