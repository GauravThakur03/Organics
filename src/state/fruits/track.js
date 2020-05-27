import t from 'tcomb';

const Track = t.struct({
    email: t.String,
    lastUpdated: t.String,
    mobile: t.Number,
    orderID: t.String,
    status: t.String,
    trackID: t.String
}, 'Track');

export default Track;
