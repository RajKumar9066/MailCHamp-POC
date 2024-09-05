import {Hono} from 'hono'
import Track from '../model/track.model';
const app = new Hono()

app.get('/get-mail-status/:id',async(c) =>{
    const id = c.req.param('id');
    if(!id) return c.json({ error: "Tracking Id is required"})
        try {
            const track = await Track.findOne({ trackingId: id});
            if(!track) return c.json({error: "Tracking Id not found"});
            return c.json({ data:track });
        } catch (error) {
            console.log(error);
            return c.json({error: "failed to get email Status"})
        }
})

export default app;