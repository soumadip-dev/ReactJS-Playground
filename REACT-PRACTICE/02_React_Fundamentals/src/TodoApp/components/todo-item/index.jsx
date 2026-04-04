import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export default function TodoItem({ todo, fetchDetails }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s, boxShadow 0.2s',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: '1.1rem',
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {todo?.todo || 'No task provided'}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            bgcolor: '#1a1a1a',
            '&:hover': { bgcolor: '#333' },
          }}
          onClick={() => fetchDetails(todo?.id)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
