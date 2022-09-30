import './App.css'
import { useEffect, useState } from 'react'
import Showcard from './Showcard'
import { Grid } from '@mui/material'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <Grid container sx={{ backgroundColor: 'beige' }}>
      {data.map(each => {
        if (each.albumId === 1) {
          return (
            <Showcard
              album={each.albumId}
              title={each.title}
              key={each.id}
              url={each.url}
            />
          )
        }
      })}
    </Grid>
  )
}

export default App
