import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

const config = [
  { ignores: ["node_modules/**", ".next/**", "out/**", "public/**", "assets/**", "docs/**", "next-env.d.ts"] },
  ...compat.config({ extends: ["next/core-web-vitals", "next/typescript"] }),
 ];

export default config;

