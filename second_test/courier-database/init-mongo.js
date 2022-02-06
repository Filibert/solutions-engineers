db.createUser({
    user: 'test',
    pwd: 'toto',
    roles: [
        {
            role: 'readWrite',
            db: 'courierDB',
        },
    ],
});

db = new Mongo().getDB("courierDB");

db.createCollection('couriers', { capped: false });

