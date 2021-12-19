import React, { Component } from 'react';
import JsBarcode from 'jsbarcode';
import PropTypes from 'prop-types';

export default class Barcode extends Component {
  //   format: "CODE39",//选择要使用的条形码类型
//  width:3,//设置条之间的宽度
//  height:100,//高度
//  displayValue:true,//是否在条形码下方显示文字
//  text:"456",//覆盖显示的文本
//  fontOptions:"bold italic",//使文字加粗体或变斜体
//  font:"fantasy",//设置文本的字体
//  textAlign:"left",//设置文本的水平对齐方式
//  textPosition:"top",//设置文本的垂直位置
//  textMargin:5,//设置条形码和文本之间的间距
//  fontSize:15,//设置文本的大小
//  background:"#eee",//设置条形码的背景
//  lineColor:"#2196f3",//设置条和文本的颜色。
//  margin:15//设置条形码周围的空白边距
  static defaultProps = {
    format: 'CODE128',
    renderer: 'svg',
    width: 2,
    height: 100,
    displayValue: true,
    textAlign: 'center',
    textPosition: 'bottom',
    textMargin: 6,
    fontSize: 20,
    background: '#ffffff',
    lineColor: '#000000',
    margin: 10,
    marginBottom: 24,
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    renderer: PropTypes.string,
    format: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    displayValue: PropTypes.bool,
    textAlign: PropTypes.string,
    textPosition: PropTypes.string,
    textMargin: PropTypes.number,
    fontSize: PropTypes.number,
    background: PropTypes.string,
    lineColor: PropTypes.string,
    margin: PropTypes.number,
    marginBottom: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  };

  componentDidMount() {
    this.update();
  };

  componentDidUpdate() {
    this.update();
  };

  handleBarcode = (r) => {
    this.barcode = r;
  }
  update() {
    const {
      value,
      format,
      width,
      height,
      displayValue,
      textAlign,
      textPosition,
      textMargin,
      fontSize,
      background,
      margin,
      lineColor,
      marginBottom,
    } = this.props;
    JsBarcode(this.barcode, value, {
      format,
      width,
      height,
      displayValue,
      textAlign,
      textPosition,
      textMargin,
      fontSize,
      background,
      margin,
      lineColor,
      marginBottom,
    })
  };

  render() {
    const { renderer } = this.props;
    if (renderer === 'svg') {
      return (
        <svg ref={this.handleBarcode} />
      );
    } else if (renderer === 'canvas') {
      return (
        <canvas ref={this.handleBarcode} />
      );
    } else if (renderer === 'img') {
      return (
        <img ref={this.handleBarcode} alt="" />
      );
    }
  };
}