import { GetServerSideProps } from "next";
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { Microphone } from '../../../model/Microphone';
import { openDB } from '../../db';

interface MicrophoneDetailProps {
  mic: Microphone[]
}

export default function MicrophoneDetail({ mic }: MicrophoneDetailProps) {
  if (!mic) {
    return <div>Loading......I'm sorry for the wait!!</div>;
  }

  return (
    <Grid container spacing={3}>

    {mic.map((microphone) => (
      <Grid item xs={12} sm={3} key={microphone.id}>

        <Link href="/microphone/[id]" as={`/microphone/${microphone.id}`}>
          <a>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={microphone.brand + ' ' + microphone.model}
                  height="300"
                  image={microphone.imageUrl}
                  title={microphone.brand + ' ' + microphone.model}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {microphone.brand + ' ' + microphone.model}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </a>
        </Link>
      </Grid>
    ))}
  </Grid>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const name = ctx.params.name as string
  const db = await openDB();
  const microphones = await db
    .from('microphone')
    .select("*")
    .eq('brand', capitalize(name));

  const mic = microphones.data;
  console.log(JSON.stringify(mic));
  return { props: { mic }};
}

function capitalize(string: any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}