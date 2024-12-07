import { FC } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

const Text: FC<TypographyProps> = ({ fontFamily, children, ...props }) => {
  // TODO: use context here for fontFamily, lightTheme, darkTheme, etc...
  const selectedFontFamily = fontFamily ?? "Bauhaus-Medium";

  return (
    <Typography fontFamily={selectedFontFamily} {...props}>
      {children}
    </Typography>
  );
};

export default Text;
