import express from 'express';

const routes = express.Router();

const message = {
    user: { id: 1, name: 'Xavero' },
    theme: 'testing kafka',
};

routes.post('/certifications', async (req, res) => {
    await req.producer.send({
        topic: 'issue-certificate',
        messages: [
            { value: JSON.stringify(message) },
            { value: JSON.stringify({ ...message, user: { ...message.user, name: 'Xavero' } }) },
        ],
    })
    return res.json({ ok: true });
});

export default routes;