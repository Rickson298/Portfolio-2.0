import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      textPrimary: string;
      textSecundary: string;

      backgroundPrimary: string;
      backgroundSecundary: string;
    };
  }
}
