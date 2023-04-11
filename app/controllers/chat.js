module.exports.initChat = function(application, req, res) {
    
    var dataForm = req.body;

    req.assert('apelido', 'Name or nick is mandatory').notEmpty();
    req.assert('apelido', 'Name or nick must have between 3 and 20 characters').len(3, 20);

    var errs = req.validationErrors();

    if (errs) {
        res.render('index', {validacao : errs});
        return;
    }

    res.render("chat");

}