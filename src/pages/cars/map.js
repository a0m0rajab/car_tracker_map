import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Map from '../../components/Map';
import Layout from '../../components/layout'

import Head from 'next/head'
import styles from '../../../styles/Home.module.css';
import dynamic from 'next/dynamic'

const DEFAULT_CENTER = [38.907132, -77.036546]
function createData(name, langitude,longitude) {
  return { name, langitude,longitude};
}
const rows = [
  createData('Ahmet', 38.907132, -77.036546),
  createData('Semih', 36.907132, -78.036546),
  createData('Özgür', 37.907132, -79.036546),
  createData('işte', 38.907132, -75.036546),
  createData('Abdurrahman', 39.907132,-74.036546),
];

export default function map() {
  return (
    <Layout>
         <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={4}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {rows.map((row) => (
             <Marker position={[row.langitude,row.longitude]}>
             <Popup>
                {row.name}
             </Popup>
           </Marker>
            ))}
             
            </>
          )}
        </Map>
      </Layout>
  );
}
