import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function routes(fastify: FastifyInstance){
    fastify.get('/check', async (_req: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send({
            message: 'Api online!'
        });
    });

}