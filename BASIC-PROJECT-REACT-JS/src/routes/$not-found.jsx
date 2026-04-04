import { createFileRoute } from '@tanstack/react-router';
import NotFound from '../Pages/NotFound';

export const Route = createFileRoute('/$not-found')({
  component: NotFoundPage,
});

function NotFoundPage() {
  return <NotFound />;
}
