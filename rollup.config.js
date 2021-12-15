import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import fs from 'fs';
import svg from 'rollup-plugin-svg';
import path from 'path';
import pkg from "./package.json";
import tailwind from "rollup-plugin-tailwindcss";

const input = "./src/index.ts";
const copyConfig = {
  targets: [
    {
      src: "src/variables.scss",
      dest: "build",
      rename: "variables.scss"
    },
    {
      src: "src/typography.scss",
      dest: "build",
      rename: "typography.scss"
    }
  ]
};

const getDirectories = (srcpath) => {
  return fs.readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

const addToConfig = (component, fileName) => {
  if (fileName.includes(".scss") || fileName.includes(".svg")) {
    copyConfig.targets.push({
      src: `${component}/${fileName}`,
      dest: `build/${component.replace('src/', '')}`,
      rename: fileName
    }) 
  }
}

// css and svg files
const processCSSandSVGs = (directory) => {
  for (let directoryItems of directory) {
    processCSSandSVGs(getDirectories(directoryItems));
    const fileNames = fs.readdirSync(directoryItems);
    for (const fileName of fileNames) {
      addToConfig(directoryItems, fileName);
    }
  }
}

const components = getDirectories('./src/');
processCSSandSVGs(components);

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  postcss({ 
    extensions: ['.css', '.less'],
    config: {
      path: './postcss.config.js',
      ctx: null
    }
  }),
  tailwind({
    input: 'build/esm/index.es.css', // required
    // Tailor the emitted stylesheet to the bundle by removing any unused CSS
    // (highly recommended when packaging for distribution).
    purge: false
  }),
  copy(copyConfig),
  svg()
];

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const exports = [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
    external,
  }
];

export default exports;