import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import svg from 'rollup-plugin-svg'
import fs from 'fs';
import image from 'rollup-plugin-img';
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

// css files
const components = getDirectories('./src/');
for (let component of components) {
  const fileNames = fs.readdirSync(component);
  for (const fileName of fileNames) {
    if (fileName.includes(".scss")) {
      copyConfig.targets.push({
        src: `${component}/${fileName}`,
        dest: `build/${component.replace('src/', '')}`,
        rename: fileName
      }) 
    }
  }
}

const plugins = [
  peerDepsExternal(),
  image(),
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
  copy(copyConfig)
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

// svg files
const svgFiles = fs.readdirSync('./src/assets/icons/')
for (const file of svgFiles) {
  exports.push({
    input: `./src/assets/icons/${file}`,
    output: {
      file: `./build/assets/icons/${file}`,
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      svg()
    ]
  })
}

export default exports;