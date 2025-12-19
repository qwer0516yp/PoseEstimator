import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.body',
        p: 2,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 600,
          width: '100%',
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Typography level="h1" fontSize="xl2" fontWeight="lg">
              Welcome to PoseEstimator
            </Typography>
            
            <Typography level="body-md" textColor="text.secondary">
              A Next.js application with JoyUI for pose estimation proof of concept.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
              <Button variant="solid" color="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outlined" color="neutral" size="lg">
                Learn More
              </Button>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography level="title-md" mb={1}>
                Features:
              </Typography>
              <Stack spacing={1}>
                <Typography level="body-sm" startDecorator="✓">
                  Next.js 16 with App Router
                </Typography>
                <Typography level="body-sm" startDecorator="✓">
                  JoyUI Component Library
                </Typography>
                <Typography level="body-sm" startDecorator="✓">
                  TypeScript Support
                </Typography>
                <Typography level="body-sm" startDecorator="✓">
                  Modern React 19
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
