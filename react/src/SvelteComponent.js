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

  componentDidUpdate() {
    const { component: Constructor, ...data } = this.props;
    this.instance.$set(data);
  }

  componentWillUnmount() {
    this.instance.$$.fragment.d(1);
    this.instance = null;
  }

  render() {
    return <div ref={this.container} />;
  }
}

export { SvelteComponent };
