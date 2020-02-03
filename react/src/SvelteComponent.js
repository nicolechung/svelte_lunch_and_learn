import * as React from "react";

class SvelteComponent extends React.Component {
  constructor() {
    super();

    this.container = React.createRef();
    this.instance = null;
  }

  componentDidMount() {
    const { component: Constructor, count } = this.props;
    debugger;
    this.instance = new Constructor({
      target: this.container.current,
      count
    });
  }

  componentDidUpdate(prevProps) {
    const { component: Constructor, count } = this.props;
    this.container.current = null;
    this.instance = new Constructor({
      target: this.container.current,
      count
    });
  }

  componentWillUnmount() {
    this.instance.destroy();
  }

  render() {
    return <div ref={this.container} />;
  }
}

export { SvelteComponent };
