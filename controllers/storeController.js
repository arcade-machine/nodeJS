const mongoose = require('mongoose');

const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    res.render('index');
};

exports.addStore = (req, res) => {
    res.render('editStore', {
        title: 'Add store'
    })
};

exports.createStore = async (req, res) => {
    const store = new Store(req.body);
    await store.save();
    req.flash('success', `Successfully created ${store.name}. Care to leave a review?`);
    res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
    const stores = await Store.find();
    res.render('stores',{
        title: 'stores',
        stores
    })
};

exports.editStore = async (req, res) => {
    const store = await Store.findOne({ _id: req.params.id });

    res.render('editStore', { title: `Edit ${store.name}`, store});
};

exports.updateStore = async (req, res) => {
    console.log('keppo');

    const store = await Store.findOneAndUpdate({ _id: req.params.id}, req.body, {
        new: true,
        runValidators: true
    }).exec();

    console.log('keppo');

    req.flash('success', `Successfully updated <strong>${store.name}</strong> <a href="/store/${store.slug}">View store</a>`)
    res.redirect(`/stores/${store._id}/edit`);
};

