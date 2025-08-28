import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(2222)
});

const _env = envSchema.safeParse(process.env);

if(!_env.success){
    console.error('❌ Error on environment variables');
    throw new Error('Error on environment variables');
}

export const env = _env.data;