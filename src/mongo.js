import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_MAIN });

export const addDocument = async (userName) => {
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);
    const mongodb = app.currentUser.mongoClient("mongodb-atlas")
    const dbcc = mongodb.db("preity").collection("warehouse");
    const data = await dbcc.insertMany(userName)
        .then(result => {
            console.log(`Successsssss: ${result.name}`)
        }).catch(err => console.error(`Failed to insert item: ${err}`))
}

export const showDocument = async () => {
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);
    const mongodb = app.currentUser.mongoClient("mongodb-atlas")
    const dbcc = mongodb.db("preity").collection("warehouse");
    const showData = await dbcc.find();
    console.log(showData);
    return showData;
}

export const updateDocument = async (data, oldData) => {
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);
    const mongodb = app.currentUser.mongoClient("mongodb-atlas")
    const dbcc = mongodb.db("preity").collection("warehouse");
    const query = { "name": oldData.name }
    const updateData = await dbcc.updateOne(query,
        { $set: { "name": data.name, "city": data.city, "cluster": data.cluster, "space_available": parseInt(data.space), "is_live": Boolean(data.live) } });
}