import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Question } from '../common/types';
import { placeholderImageUrl } from '../data';
import { MAIN_DOMAIN, MAIN_DOMAIN_PHOTO } from '../services/api';

interface FeaturedQuestionProps {
  question: Question;
  md?: number
}

export default function MyQuestion(props: FeaturedQuestionProps) {
  const { question, md = 6 } = props;
  const imageUrl = question?.photo ? `${MAIN_DOMAIN_PHOTO}/media/${question?.photo}` : placeholderImageUrl

  return (
    <Grid item xs={12} md={md} sx={{ mt: 1 }}>
      <CardActionArea component="a">
        <Card sx={{ display: 'flex', borderRadius:'20px' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" fontWeight="bold">
              {question.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" fontSize={13}>
              {`${question?.lang} ${question?.tech}`}
            </Typography>
            <Typography variant="subtitle1" paragraph fontWeight="light" fontSize={12}>
              {question.describe}
            </Typography>
            <Typography variant="subtitle1" paragraph fontWeight="light" fontSize={10}>
              Статус: {question.verify ? 'опубликован' : 'рассматривается'}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160 }}
            image={imageUrl}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}