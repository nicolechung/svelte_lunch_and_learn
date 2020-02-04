import React, { useRef, useEffect } from "react";

const SvelteComponent = props => {
  const { component: Constructor, ...data } = props;
  const container = useRef();
  const instance = useRef();

  useEffect(() => {
    const { component: Constructor, ...data } = props;
    instance.current = new Constructor({
      target: container.current
    });
    instance.current.$set(data);
    return () => {
      instance.current.$$.fragment.d(1);
    };
  }, [Constructor, data]);

  return <div ref={container} />;
};

export { SvelteComponent };
