import React from 'react';
import { Typography } from '@mui/material';

interface TabProps {
  label: string;
}

const Tab: React.FC<TabProps> = ({ label }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <Typography variant="body1">{label}</Typography>
      {/* Add more content or customize as needed */}
    </div>
  );
};

export default Tab;
