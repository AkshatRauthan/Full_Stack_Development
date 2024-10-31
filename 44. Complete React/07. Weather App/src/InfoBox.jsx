import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

let imgUrl = {
    winter : "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    haze : "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summer : "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rainy : "https://plus.unsplash.com/premium_photo-1676212747574-c401d596e853?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
const capitalize = s => s && String(s[0]).toUpperCase() + String(s).slice(1).toLowerCase();

export default function InfoBox({result}){
    return (
    <div className="InfoBox">
        <Typography variant="h5" component="div">
            {capitalize(result.city)} <br />
        </Typography>
        <Card sx={{ minWidth: 275}}>
            <CardMedia
                sx={{ height: 120 }}
                image={(result.temp<=15)?imgUrl.winter:(result.temp>=25)?imgUrl.summer:(result.humidity>=75)?imgUrl.rainy:imgUrl.haze}
            />
            <CardContent>            
                <img src={`./src/assets/weatherIcons/${result.icon}.png`} alt={result.icon} />
                <Typography gutterBottom variant="body1" sx={{ color: 'text.secondary' }}>
                    Temperature : {result.temp}&deg;C
                </Typography>

                <Typography gutterBottom variant="body1" sx={{color: 'text.secondary'}}>
                    Min Temp : {result.temp_min}&deg;C
                </Typography>

                <Typography gutterBottom variant="body1" sx={{color: 'text.secondary'}}>
                    Max Temp : {result.temp_max}&deg;C
                </Typography>

                <Typography gutterBottom variant="body1" sx={{color: 'text.secondary'}}>
                    Humidity : {result.humidity}%
                </Typography><br />

                <Typography gutterBottom variant="body1" sx={{color: 'text.secondary'}}>
                    {capitalize(result.description)}
                </Typography>

                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                    Feels like {result.feelsLike}&deg;C today.
                </Typography>
            </CardContent>
        </Card>
    </div>
)};