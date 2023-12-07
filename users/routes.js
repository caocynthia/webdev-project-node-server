import * as dao from "./dao.js"
function UserRoutes(app) {
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers().then((users) => res.json(users));
        res.send(users)
    }
    const findUserById = async (req, res) => {
        const { id } = req.params;
        const user = await dao.findUserById(id);
        res.send(user)
    }
    const findUserByUsername = async (req, res) => {
        const { username } = req.params;
        const user = await dao.findUserByUsername(username);
        res.send(user)
    }
    const findUserByCredentials = async (req, res) => {
        const { username, password } = req.params;
        const user = await dao.findUserByCredentials(username, password);
        res.send(user);
    }
    const createUser = async (req, res) => {
        const {username, password, firstName, lastName} = req.params;
        const user = await dao.createUser({
            username,
            password,
            firstName,
            lastName
        });
        res.send(user)
    }
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:id", findUserById);
    app.get("/api/users/username/:username", findUserByUsername);
    app.get("/api/users/:username/:password", findUserByCredentials);
    app.get("/api/users/:username/:password/:firstName/:lastName", createUser);
}

export default UserRoutes;