import * as React from "react";

class SvelteComponent extends React.Component {
  constructor() {
    super();

    this.container = React.createRef();
    this.instance = null;
  }

  componentDidMount() {
    const { component: Constructor, ...data } = this.props;
    debugger;
    this.instance = new Constructor({
      target: this.container.current,
      data
    });
  }

  componentDidUpdate(prevProps) {
    const { component: Constructor, ...data } = this.props;
    this.instance = new Constructor({
      target: this.container.current,
      data
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
