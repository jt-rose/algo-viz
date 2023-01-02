import { useState } from "react";
import SyntaxHighlighter, { prismThemes, Sample } from "./SyntaxHighlighter";

interface Props {
  sample: Sample;
}

const CodeSample = (props: Props) => {
  const { code, language } = props.sample;
  const styles = Object.entries(prismThemes);
  const [theme, setTheme] = useState(0);
  const [showLines, setShowLines] = useState(false);

  const updateTheme = () => {
    if (theme === styles.length - 1) {
      setTheme(0);
    } else {
      setTheme(theme + 1);
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        name="show lines"
        id="show-lines"
        checked={showLines}
        onChange={() => setShowLines(!showLines)}
      />
      <p>Theme: {styles[theme][0]}</p>
      <SyntaxHighlighter
        showLineNumbers={showLines}
        customStyle={{
          borderRadius: "5px",
          fontSize: "1em",
          lineHeight: "1.5em",
          padding: "1em",
          margin: "0.5em 0px",
          border: "0 solid black",
        }}
        onClick={updateTheme}
        language={language}
        style={styles[theme][1]}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSample;
