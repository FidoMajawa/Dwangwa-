const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const auth = new google.auth.GoogleAuth({
  keyFile: 'C:\Users\LENOVO\OneDrive\Desktop\Dwangwa Web\dwangwaweb\client_secret_436936443232-ic7ppcgjf2vs0k40pj5fcvs8h991iis0.apps.googleusercontent.com.json', // Change this to your JSON file path
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

app.post('/api/register-church', async (req, res) => {
  const { churchName, address, city, state, zipCode, pastorName, email, phone, denomination, memberCount, serviceTime } = req.body;

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '1IKTUNsHDxAIZbY4Yy16faOvY6mB8XYvSa11GmkmgPUA', // Change this to your Google Sheet ID
      range: 'Sheet1!A1', // Change this to the range where you want to start adding data
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          [churchName, address, city, state, zipCode, pastorName, email, phone, denomination, memberCount, serviceTime],
        ],
      },
    });

    res.status(200).send('Data added successfully');
  } catch (error) {
    console.error('Error adding data to Google Sheet:', error);
    res.status(500).send('Failed to add data to Google Sheet');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
