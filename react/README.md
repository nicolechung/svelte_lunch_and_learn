# Install

```
npm install
```

# Dev mode

```
npm run dev
```

## Notes about `public` folder

`Index.html` must exist. The bundle files are created by webpack.

## Notes about the webpack configuration

This is a bare minimum webpack config.

React needs `@babel/preset-env` and `@babel/preset-react` (to handle JSX files). For this we ignore `node_modules`.

In a real React project, we would use other webpack plugins and loaders, for example:

- @svgr/webpack
- babel-jest
- @babel/plugin-transform-runtime

Svelte's `library` files (meaning: `node_modules/svelte`) needs `@babel/preset-env`. This is different from a typical webpack setup where `node_modules` is excluded!

Meanwhile, files with the `.svelte` extension need the `svelte-loader`
