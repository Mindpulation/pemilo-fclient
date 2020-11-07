import { useRouter } from 'next/router';

export const useLink = () => {
  const router = useRouter();
  return router.query;
}