/*
变量 Header 就是一个组件类。模板插入 <Header /> 时，会自动生成 Header 的一个实例（下文的"组件"都指组件类的实例）。所有组件类都必须有自己的 render 方法，用于输出组件
*/
window.Header = React.createClass({
  render () {
    return <h1> {this.props.title} </h1>;
  }
});