import React from 'react';
import { Box } from 'rebass';

const App = ({ data }) => (
  <Box p={2} mb={2} display="flex" justifyContent="center" alignItems="center">
    MFE {data}
  </Box>
);

export default App;
