const authorise = (permitedRoles) => {

    return (req, res, next) => {
        const user = req.user;
        let isAllowed = false;

        for (let i = 0; i < user.roles.length; i++) {
            if (permitedRoles.includes(user.roles[i])) {
                isAllowed = true;
                break;
            }
        }

        if (isAllowed) {
            next();
        }
        else {
            return res.status(500).send("permission denied")
        }
    }
};
module.exports = authorise;
