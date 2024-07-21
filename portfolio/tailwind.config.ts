import { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

import { shadcnPlugin } from "./app/lib/shadcn-plugin";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [tailwindAnimate, shadcnPlugin],
} satisfies Config;

export default config;
