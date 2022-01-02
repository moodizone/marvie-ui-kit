import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

const tsconfigOverride = {
  compilerOptions: {
    jsx: "react",
    sourceMap: true,
    declaration: true,
    declarationDir: "./types",
  },
  include: ["lib/**/*", "config/**/*", "style/**/*"],
};
const external = {
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
};

export const components = {
  external,
  input: "lib/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    terser(),
    typescript({
      clean: true,
      tsconfigOverride,
    }),
    copy({
      targets: [
        { dest: "dist", src: "./lib/package.json" },
        { dest: "dist", src: "./README.md" },
      ],
    }),
  ],
};

export default components;
