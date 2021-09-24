const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello 2 from server!'
    });
};

module.exports.saySomething = saySomething;