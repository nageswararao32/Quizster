import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CompSc from '../Images/ComSc.jpeg';
import Film from '../Images/Film.jpeg';
import Geogrphy from '../Images/Geogrphy.jpeg';
import GK from '../Images/GK.jpeg';
import History from '../Images/History.jpeg';
import Img1 from '../Images/Img1.jpg';
import Nature from '../Images/Nature.png';
import Sports from '../Images/Sports.jpeg';
import { Button, CardActions } from '@mui/material';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Tv from '../Images/Tv.png'

function MyPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", margin: "20px", flexDirection: "row", flexWrap: "wrap", }}>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate('/ComputerScience')}} >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={CompSc}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ComputerScience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Test your Knowledge in Computer Science. The topics are Data Structures and Algorithms, Networkings, Web Programming, etc,.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate('/ComputerScience')}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/Politics")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://www.kindpng.com/picc/m/79-796888_politics-clipart-hd-png-download.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Politics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Test your Knowledge in Politics. The topics are Local Governments, Central Governments, Indian Laws, etc,.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/Politics")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/Film")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Film}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Film
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Test your Knowledge in Filmography. The topics are basic film details such as film names, artists, etc,.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/Film")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/Geography")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Geogrphy}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Geography
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Test your Knowledge in Geography. Geography Topics that are relevant to today such as climate change, water availability.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/Geography")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/GeneralKnowledge")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={GK}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  General Knowledge
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Test knowledge in General Knowledge. Topics are Cookery, Discovery and Exploration, Fashion, Biology, Finance.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/GeneralKnowledge")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/History")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={History}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  History
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Topics related to the past societies, systems, ideologies, governments, cultures and technologies were built, how they operated.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/History")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/Music")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Img1}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Music
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Test your Knowledge in Music. Topics related to the music Directors, artists, singers, lyrics, movie names, etc,.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/Music")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/Television")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Tv}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Television
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Topics related to algorithms, applied mathematics, calculus, commutative algebra, computational mathematics.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/Television")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/Nature")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Nature}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Nature
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Topics related to how myths and legends link the past with the present and provide continuity from ancient times to the modern.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/Nature")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
        <div style={{ display: "flex", margin: "20px" }} className='div1' onClick={()=>{navigate("/Sports")}}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={Sports}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sports
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Test your Knowledge in Sports. Topics related to Cricket, Hockey, Bascket Ball, Tennis, vooleyBall, Golf, BaseBall, etc,.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{navigate("/Sports")}}>
                Take Test
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MyPage;