import { FC, useEffect, useState } from "react";
import { Box, Stack} from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";

import Text from "../views/text/Text";

import logo from "../assets/logo_large.svg"

const Verification: FC = () => {
  const navigate = useNavigate();
  const [searchParams,] = useSearchParams();
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    if (!searchParams.has("token")) {
      navigate("/");
      return;
    }

    if (!isVerified && searchParams.has("token")) {
      fetch("https://aspirewithalina.com:22221/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token: searchParams.get("token") }),
      }).then((response) => {
        if (response.status === 200) {
          setIsVerified(true);
        }
      });
    }
  }, [searchParams, navigate, isVerified]);

  return (
    <Stack direction="column" spacing={2}>
      <Box>
          <img style={{ height: 400, width: 400, borderRadius: "50%" }} src={logo} className="logo" alt="AspireWithAlina logo" />
      </Box>
      <Text variant="h2">Aspire With Alina</Text>
      <Text variant="h6">Thanks for verifying your email address! Please read the instructions below:</Text>
      <Text variant="body1" className="read-the-docs">
        We've generated a unique registration code for you. Please check your email for this code, copy the code, download the desktop app from one of the links below (depending on which operating system you have), start the app and then enter this code on the registration page. Once you've done this, it'll take you to the "Student Info Form" where you'll fill out some information about yourself and create a password for your account. After you've done this, you'll be able to log in and start using the app!
      </Text>
    </Stack>
  );
};

export default Verification;
