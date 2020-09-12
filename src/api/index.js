import http from '@/services/http';

export const fetchTestApi = () => http.get('/test');
