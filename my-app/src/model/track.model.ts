import { model, Schema } from "mongoose";
import {v4 as uuid} from 'uuid'


interface ITrack{
      trackingId : String;
      opens: number;
      userIps: String[];
}

const trackSchema = new Schema<ITrack>({

    trackingId:{
        type: String,
        required: true
    },
    opens:{
        type:Number,
        default: 0
    },
    userIps:{
        type:[String],
        default: []
    }
})

const Track = model<ITrack>("Track", trackSchema)
export default Track;