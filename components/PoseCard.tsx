'use client';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

interface PoseCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onAction?: () => void;
}

export default function PoseCard({ 
  title, 
  description, 
  imageUrl = '/placeholder.svg',
  onAction 
}: PoseCardProps) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <AspectRatio ratio="2">
        <Box
          sx={{
            bgcolor: 'neutral.softBg',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography level="body-lg" textColor="neutral.plainColor">
            Pose Preview
          </Typography>
        </Box>
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm" textColor="text.secondary">
          {description}
        </Typography>
        {onAction && (
          <Button
            variant="solid"
            color="primary"
            onClick={onAction}
            sx={{ mt: 2 }}
          >
            Analyze Pose
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
