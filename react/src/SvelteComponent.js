import * as React from "react";

class SvelteComponent extends React.Component {
  constructor() {
    super();

    this.container = React.createRef();
    this.instance = null;
  }

  componentDidMount() {
    const { component: Constructor, ...data } = this.props;

    this.instance = new Constructor({
      target: this.container.current
    });
    this.instance.$set(data);
  }

  componentDidUpdate(prevProps) {
    const { component: Constructor, ...data } = this.props;
    this.instance.$set(data);
  }

  componentWillUnmount() {
    this.instance.destroy();
  }

  render() {
    return <div ref={this.container} />;
  }
}

export { SvelteComponent };
