import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  PrismLanguage,
  prismLanguageKeys,
  PrismTheme,
  prismThemeKeys,
} from "../components/SyntaxHighlighter";

// export interface PrismThemeState {
//   theme: keyof typeof prismThemes;
// }

interface PrismSettings {
  theme: PrismTheme;
  showLineNumbers: boolean;
  preferredLanguage: PrismLanguage;
}

const initialState: PrismSettings = {
  theme: "okaidia",
  showLineNumbers: false,
  preferredLanguage: "rust",
};

const cycleNext = <T>(arr: T[], current: T) => {
  // if not found, return first item
  if (!arr.includes(current)) return arr[0];

  // if current item is last, return to head of array
  const current_idx = arr.findIndex((x) => x === current);
  if (current_idx + 1 === arr.length) return arr[0];

  // return next item
  return arr[current_idx + 1];
};

export const prismSettingsSlice = createSlice({
  name: "prismSettings",
  initialState,
  reducers: {
    selectPrismTheme: (state, action: PayloadAction<PrismTheme>) => {
      if (prismThemeKeys.includes(action.payload)) {
        return { ...state, theme: action.payload };
      } else {
        return state;
      }
    },
    cyclePrismTheme: (state) => {
      // const themeKeys = Object.keys(
      //   prismThemes
      // ) as (keyof typeof prismThemes)[];
      // const idx = themeKeys.findIndex((k) => k === state.theme);
      // if (idx + 1 === themeKeys.length) {
      //   return { ...state, theme: themeKeys[0] };
      // } else {
      //   return { ...state, theme: themeKeys[idx + 1] };
      // }
      const newTheme = cycleNext(prismThemeKeys, state.theme);

      return { ...state, theme: newTheme };
    },
    toggleShowLineNumbers: (state) => {
      return { ...state, showLineNumbers: !state.showLineNumbers };
    },
    selectPrismLanguage: (state, action: PayloadAction<PrismLanguage>) => {
      if (prismLanguageKeys.includes(action.payload)) {
        return { ...state, preferredLanguage: action.payload };
      } else {
        return state;
      }
    },
    cyclePrismLanguage: (state) => {
      // const themeKeys = Object.keys(
      //   prismThemes
      // ) as (keyof typeof prismThemes)[];
      // const idx = themeKeys.findIndex((k) => k === state.theme);
      // if (idx + 1 === themeKeys.length) {
      //   return { ...state, theme: themeKeys[0] };
      // } else {
      //   return { ...state, theme: themeKeys[idx + 1] };
      // }
      const newLang = cycleNext(prismLanguageKeys, state.preferredLanguage);

      return { ...state, preferredLanguage: newLang };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  selectPrismTheme,
  cyclePrismTheme,
  toggleShowLineNumbers,
  selectPrismLanguage,
  cyclePrismLanguage,
} = prismSettingsSlice.actions;

export default prismSettingsSlice.reducer;
