import React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

type TimeLineItemProps = {
  timer: string;
  nameIcon: string;
  typographyTitle: string;
  typography?: string;
  variantIcon?: 'outlined' | 'filled' | undefined;
  colorIcon?:
    | 'inherit'
    | 'primary'
    | 'grey'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
};

function TimeLineItemCP({
  timer,
  nameIcon,
  typographyTitle,
  typography,
  colorIcon,
  variantIcon,
}: TimeLineItemProps) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align="right"
        variant="body2"
      >
        {timer}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color={colorIcon} variant={variantIcon}>
          <i className={nameIcon}></i>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          {typographyTitle}
        </Typography>
        <Typography>{typography}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimeLineItemCP;
