import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

let imgName = 'nice-day';

const capitalize = s => s && String(s[0]).toUpperCase() + String(s).slice(1).toLowerCase();

export default function InfoBox({result}){
    let arr = ['clear-day', 'clear-night', 'cloudy', 'fog', 'hail', 'rain', 'sleet', 'snow', 'thunder', 'wind'];
    for (let str of arr){
        if (str === result.icon || result.icon.includes(str)){
            imgName = str;
            break;
        }
    }
    return (
    <div className="InfoBox">
        <Typography variant="h5" component="div">
            {capitalize(result.city)} <br />
        </Typography>
        <Card sx={{ minWidth: 275}}>
            <CardMedia
                sx={{ height: 120 }}
                image={`./src/assets/cardImages/${imgName}.jpg`}
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