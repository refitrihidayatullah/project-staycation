// IMPORT MODEL
const Category = require('../models/Category');
const Bank = require('../models/Bank');
const fs = require('fs-extra');
const path = require('path');




module.exports = {
    viewDashboard: (req, res) => {
        const title = "Staycation | Dashboard";
        res.render('admin/dashboard/view_dashboard', { title });
    },
    viewCategory: async(req, res) => {
        try {
            const title = "Staycation | category";
            const category = await Category.find();
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };
            // console.log(category);
            res.render('admin/category/view_category', { category, alert, title });
        } catch (error) {
            res.redirect('/admin/category');
        }

    },
    addCategory: async(req, res) => {
        try {
            const { name } = req.body;
            // console.log(name);
            await Category.create({ name });
            req.flash('alertMessage', 'Success Add Category');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/category');
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category');
        }

    },
    editCategory: async(req, res) => {
        try {
            const { id, name } = req.body;
            const category = await Category.findOne({ _id: id });
            // console.log(id);
            // console.log(category);
            category.name = name;
            await category.save();
            req.flash('alertMessage', 'Success Update Category');
            req.flash('alertStatus', 'success');
            res.redirect("/admin/category");
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category');
        }
    },
    deleteCategory: async(req, res) => {
        try {
            const { id } = req.params;
            const category = await Category.findOne({ _id: id });
            await category.remove();
            req.flash('alertMessage', 'Success Delete Category');
            req.flash('alertStatus', 'success');
            res.redirect('/admin/category');

        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/category');
        }
    },
    viewBank: async(req, res) => {
        try {
            const title = "Staycation | Bank";
            const bank = await Bank.find();

            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMessage, status: alertStatus };


            res.render('admin/bank/view_bank', { bank, title, alert });

        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');
        }

    },
    addBank: async(req, res) => {
        try {
            const { name, nameBank, nomorRekening } = req.body;

            await Bank.create({
                name,
                nameBank,
                nomorRekening,
                imageUrl: `images/${req.file.filename}`
            });
            req.flash('alertMessage', 'Success Add Bank');
            req.flash('alertStatus', 'success');
            // console.log(name, nameBank, nomorRekening, imageUrl);

            // console.log(nameBank + noRek, name);~
            res.redirect('/admin/bank');

        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');
        }
    },
    editBank: async(req, res) => {
        try {
            const { id, nameBank, nomorRekening, name } = req.body;
            const bank = await Bank.findOne({ _id: id });
            if (req.file == undefined) {
                bank.name = name;
                bank.nameBank = nameBank;
                bank.nomorRekening = nomorRekening;
                await bank.save();
                req.flash('alertMessage', 'Success Update Bank');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/bank');
            } else {
                await fs.unlink(path.join(`public/${bank.imageUrl}`));
                bank.name = name;
                bank.nameBank = nameBank;
                bank.nomorRekening = nomorRekening;
                bank.imageUrl = `images/${req.file.filename}`
                await bank.save();
                req.flash('alertMessage', 'Success Update Bank');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/bank');
            }
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');
        }
    },
    viewItem: (req, res) => {
        const title = "Staycation | Item";
        res.render('admin/item/view_item', { title });
    },
    viewBooking: (req, res) => {
        const title = "Staycation | Booking";
        res.render('admin/booking/view_booking', { title });
    }
}