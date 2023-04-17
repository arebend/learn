const moment = require('moment');

const post = [{
    id: 1,
    title: "post 1",
    body: "Body post 1",
    createdAt: Date(),
  },
  {
    id: 2,
    title: "post 2",
    body: "Body post 2",
    createdAt: Date(),
  }
]

const postView = (req, res) => {
  console.log('postView postView postView postView ');
  res.render("pages/post", {
    layout: "layout/dashboard",
    data: {
      posts: post.map(post => {
        post.fromNow = moment(post.createdAt).fromNow();
        // post.fromNow = "dummy"
        return post;
      })
    },
    contentName: "Post"
  });
};

const dashboardView = (req, res) => {
  res.render("pages/dashboard", {
    layout: "layout/dashboard",
    data: {
      statistic: [{
          title: "post",
          value: 10,
        },
        {
          title: "visitor",
          value: 100,
        },
        {
          title: "reader",
          value: 80,
        }
      ]
    },
    contentName: "Statistic"
  });
}
module.exports = {
  postView,
  dashboardView
}