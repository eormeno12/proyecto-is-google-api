import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    google: {
      maps: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
  };
});
