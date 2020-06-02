exports.myMiddleware = (req, res, next) => {
    req.name = 'Sergei';
    res.cookie('name', 'Sergei', { maxAge: 900 });
    if (req.name === 'Sergei') {
        throw Error('That is a stupid name')
    }
    next();
};

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
};
