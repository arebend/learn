const express = require('express');
const router = express.Router();

const homeView = (req, res) => {
  console.log('test test test test ');
  res.render("pages/home", {
    layout: "layout/default"
  });
};

const notFoundView = (req, res) => {
  res.status(404);
  res.render("pages/not-found", {
    layout: "layout/default"
  });
};

const errorView = (err, req, res, next) => {
  res.status(500);
  res.render("pages/error", {
    layout: "layout/default"
  });
};

module.exports = {
  homeView,
  notFoundView,
  errorView
}