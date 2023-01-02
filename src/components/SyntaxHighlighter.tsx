// the default syntax highlighter is a very large download
// consisting of all themes and languages
// we will instead build a 'light' version
// getting only the themes and languages we need

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

/* --------------------------- import Prism themes -------------------------- */
import coldark from "react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";
import materialDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";
import nightOwl from "react-syntax-highlighter/dist/cjs/styles/prism/night-owl";
import nord from "react-syntax-highlighter/dist/cjs/styles/prism/nord";
import okaidia from "react-syntax-highlighter/dist/cjs/styles/prism/okaidia";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import pojoaque from "react-syntax-highlighter/dist/cjs/styles/prism/pojoaque";
import solarizedLight from "react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

/* ---------------------- import Prism language parsers --------------------- */
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import rust from "react-syntax-highlighter/dist/cjs/languages/prism/rust";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import elixir from "react-syntax-highlighter/dist/cjs/languages/prism/elixir";
import c from "react-syntax-highlighter/dist/cjs/languages/prism/c";
import csharp from "react-syntax-highlighter/dist/cjs/languages/prism/csharp";

/* -------------------------------------------------------------------------- */
/*                          REGISTER LANGUAGE PARSERS                         */
/* -------------------------------------------------------------------------- */
const languageParsers = {
  javascript,
  typescript,
  python,
  rust,
  java,
  elixir,
  c,
  csharp,
};

Object.entries(languageParsers).forEach(([title, parser]) =>
  SyntaxHighlighter.registerLanguage(title, parser)
);

/* -------------------------------------------------------------------------- */
/*                   EXPORT HIGHLIGHTER, THEMES, AND SAMPLE                   */
/* -------------------------------------------------------------------------- */

export const prismThemes = {
  coldark,
  dracula,
  vsDark,
  materialDark,
  a11yDark,
  nightOwl,
  nord,
  okaidia,
  vscDarkPlus,
  pojoaque,
  solarizedLight,
  atomDark,
  tomorrow,
};

export interface Sample {
  language: keyof typeof languageParsers;
  code: string;
}

export default SyntaxHighlighter;
