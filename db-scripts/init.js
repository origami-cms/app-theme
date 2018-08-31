db = db.getSiblingDB('origami-plugin-theme');

db.createUser({
    user: "origami",
    pwd: "origami",
    roles: ["readWrite", "dbAdmin"]
});
