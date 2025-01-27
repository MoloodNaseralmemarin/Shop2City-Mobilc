// src/app/config/api-config.ts
import { environment } from '../../environments/environment';


export const APIConfig = environment.production ? 'https://api.madwin.ir' : 'http://localhost:5081';

