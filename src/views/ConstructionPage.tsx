import { FC, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

import Text from "../views/text/Text";

import logo from "../assets/logo_large.svg"
// import winAppsLogo from "../assets/WinAppsLogo.svg"

const Construction: FC = () => {
  const [emailAddressInput, setEmailAddressInput] = useState<string>("");
  const [invalidEmailInput, setInvalidEmailInput] = useState<boolean>(false);

  const handlePreRegistration = async () => {
    console.log("Pre-registering email address:", emailAddressInput);
    setEmailAddressInput("");
    setInvalidEmailInput(false);
    const response = await fetch("https://aspirewithalina.com:22221/send-verification-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: emailAddressInput }),
    });

    if (response.status === 200) {
      alert(response.text());
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      <Box>
          <img style={{ height: 400, width: 400, borderRadius: "50%" }} src={logo} className="logo" alt="AspireWithAlina logo" />
      </Box>
      <Text variant="h2">Aspire to Expand</Text>
      <Text variant="body1" className="read-the-docs">
        Please be patient as we are working on the website. In the meantime, you can read about and see the desktop version of this app at <a href="https://github.com/mrrobotisreal/AspireWithAlinaTeacherDesktop/blob/main/README.md">https://github.com/mrrobotisreal/AspireWithAlinaTeacherDesktop/blob/main/README.md</a>.
      </Text>
      <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }} direction="row" spacing={2}>
        <TextField
          variant="outlined"
          value={emailAddressInput}
          onChange={(e) => {
            setEmailAddressInput(e.target.value);
            setInvalidEmailInput(
              !/(^[A-Za-z0-9._%+-]+)@([A-Za-z0-9.-]+)\.([A-Za-z]{2,3}$)/.test(
                e.target.value
              )
            );
          }}
          label="Email address"
          sx={{ input: { width: "300px", color: "#fff", backgroundColor: "#000", fontFamily: "Bauhaus-Medium" }, label: { color: "#888", fontFamily: "Bauhaus-Medium" } }}
          error={invalidEmailInput}
          helperText={invalidEmailInput ? "Invalid email address" : ""}
        />
        <Button variant="contained" color="primary" onClick={handlePreRegistration} disabled={invalidEmailInput}>
          <Text variant="button">Pre-register</Text>
        </Button>
      </Stack>
      <Stack direction="column" spacing={2}>
        <Text variant="body2" sx={{ height: "50px" }}>
          This app is powered by <a href="https://winapps.io">©2024 WinApps Solutions LLC</a>.
        </Text>
        {/* <Box>
          <img style={{ borderRadius: "25%" }} src={winAppsLogo} className="logo" alt="WinApps Solutions LLC logo" />
        </Box> */}
      </Stack>
    </Stack>
  )
}

export default Construction
