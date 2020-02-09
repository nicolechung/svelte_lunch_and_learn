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
    for (const key in data) {
      /**
       * brute force example, for better use refer to:
       * https://github.com/pngwn/svelte-adapter/blob/master/react.js
       */
      if (typeof data[key] === "function") {
        instance.current.$on('click', data[key])
      }
    }
    
    return () => {
      instance.current.$$.fragment.d(1);
    };
  }, [Constructor, data]);

  return <div ref={container} />;
};

export { SvelteComponent };
