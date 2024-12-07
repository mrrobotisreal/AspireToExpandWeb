import { Box, Stack } from "@mui/material";

import Text from "./views/text/Text";

import logo from "./assets/logo_large.svg"
import winAppsLogo from "./assets/WinAppsLogo.svg"

import './App.css'

function App() {

  return (
    <Stack direction="column" spacing={2}>
      <Box>
          <img style={{ height: 400, width: 400, borderRadius: "50%" }} src={logo} className="logo" alt="AspireWithAlina logo" />
      </Box>
      <Text variant="h2">Aspire With Alina</Text>
      <Text variant="body1" className="read-the-docs">
        Please be patient as we are working on the website. In the meantime, you can read about and see the desktop version of this app at <a href="https://github.com/mrrobotisreal/AspireWithAlinaTeacherDesktop/blob/main/README.md">https://github.com/mrrobotisreal/AspireWithAlinaTeacherDesktop/blob/main/README.md</a>.
      </Text>
      <Stack direction="column" spacing={2}>
        <Text variant="body2" sx={{ height: "50px" }}>
          This app is powered by <a href="https://winapps.io">©2024 WinApps Solutions LLC</a>.
        </Text>
        <Box>
          <img style={{ borderRadius: "25%" }} src={winAppsLogo} className="logo" alt="WinApps Solutions LLC logo" />
        </Box>
      </Stack>
    </Stack>
  )
}

export default App
