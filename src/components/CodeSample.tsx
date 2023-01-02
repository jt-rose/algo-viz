import SyntaxHighlighter, {
  PrismLanguage,
  prismLanguageKeys,
  PrismTheme,
  prismThemeKeys,
  prismThemes,
  Sample,
} from "./SyntaxHighlighter";
import type { RootState } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import {
  cyclePrismTheme,
  selectPrismTheme,
  toggleShowLineNumbers,
  cyclePrismLanguage,
  selectPrismLanguage,
} from "../store/prismSettingsSlice";

interface Props {
  sample: Sample;
}

const CodeSample = (props: Props) => {
  const { code, language } = props.sample;

  const prismSettings = useSelector((state: RootState) => state.prismSettings);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        name="show lines"
        id="show-lines"
        checked={prismSettings.showLineNumbers}
        onChange={() => dispatch(toggleShowLineNumbers())}
      />
      <select
        name="plk"
        id="plk"
        value={prismSettings.preferredLanguage}
        onChange={(e) =>
          dispatch(selectPrismLanguage(e.target.value as PrismLanguage))
        }
      >
        {prismLanguageKeys.map((lk) => (
          <option value={lk}>{lk}</option>
        ))}
      </select>

      <select
        name="ptk"
        id="ptk"
        value={prismSettings.theme}
        onChange={(e) =>
          dispatch(selectPrismTheme(e.target.value as PrismTheme))
        }
      >
        {prismThemeKeys.map((tk) => (
          <option value={tk}>{tk}</option>
        ))}
      </select>
      <p>Theme: {prismSettings.theme}</p>
      <p onClick={() => dispatch(cyclePrismLanguage())}>
        Preferred Language: {prismSettings.preferredLanguage}
      </p>
      <SyntaxHighlighter
        showLineNumbers={prismSettings.showLineNumbers}
        customStyle={{
          borderRadius: "5px",
          fontSize: "1em",
          lineHeight: "1.5em",
          padding: "1em",
          margin: "0.5em 0px",
          border: "0 solid black",
        }}
        onClick={() => dispatch(cyclePrismTheme())}
        language={language}
        style={prismThemes[prismSettings.theme]}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSample;
