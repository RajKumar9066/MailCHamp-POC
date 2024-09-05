import { Hono } from 'hono'
import {v4 as uuid} from 'uuid'
import Track from '../model/track.model';
import { sendMail } from '../utils/sendMail';
const app = new Hono()
app.post('/send-mail', async(c) =>{
    const {emails, password } = await c.req.json();

    //check
    if(!emails || !password) return c.json({ error: "Email and password are required"})

    //password validation
    if(password !== Bun.env.PASSWORD) return c.json({error: "wrong password"})

    //tracking id, data => db
    const trackingId = uuid();

    try {
        await Track.create({trackingId})
        // mail sending--
        await sendMail(emails, trackingId)

        return c.json({
            trackingId: trackingId,
            message:"Email sent Sucessfully"
        })
    } catch (error) {
        console.log(error)
        return c.json({error: "Failed to send message"})
    }


})


export default app