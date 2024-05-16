import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Select, MenuItem, Typography, Grid, Paper } from '@mui/material';
import BarCharts from './barChart';
import PieCharts from './pieChart';
import ApiFetcher from './ApiFetcher';
import 'chart.js/auto';

function AdminPanel() {
  const [data, setData] = useState([]);
  const [pieKey, setPieKey] = useState('drug_type');
  const [barKey, setBarKey] = useState('drug_type');
  const [selectedYear, setSelectedYear] = useState(''); // State for the selected year
  const fields = [
    'drug_name', 'drug_type', 'January_purchase', 'February_purchase', 'March_purchase',
    'April_purchase', 'May_purchase', 'June_purchase', 'July_purchase', 'August_purchase', 'September_purchase', 'October_purchase', 'December_purchase', 'total_Quantity', 'price', 'total_price'
  ];

  const years = Array.from(new Set(data.map(item => item.year)));

  const filteredData = selectedYear
    ? data.filter(item => item.year === selectedYear)
    : data;

  useEffect(() => {
    setSelectedYear('');
  }, [data]);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link to="/sales" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">Sales</Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/predicted" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">Predicted Data</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Purchased Data</Typography>
        <ApiFetcher setData={setData} />

        {/* Bar chart section */}
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>Bar Chart</Typography>
          <Select
            value={barKey}
            onChange={(e) => setBarKey(e.target.value)}
            fullWidth
          >
            {fields.map(field => (
              <MenuItem key={field} value={field}>{field}</MenuItem>
            ))}
          </Select>
          <BarCharts data={data} groupKey={barKey} />
        </Paper>

        {/* Pie Chart section */}
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>Pie Chart</Typography>
          <Select
            value={pieKey}
            onChange={(e) => setPieKey(e.target.value)}
            fullWidth
          >
            {fields.map(field => (
              <MenuItem key={field} value={field}>{field}</MenuItem>
            ))}
          </Select>
          <PieCharts data={data} groupKey={pieKey} />
        </Paper>
      </div>
    </>
  );
}

export default AdminPanel;
