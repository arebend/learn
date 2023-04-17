const home = (req, res, next) => {
  res.render('index', {
    title: 'Express',
    subtitle: 'Express JS Boiler Plate Example'
  });
}

const about = (req, res, next) => {
  res.render('about', {
    title: 'About',
    subtitle: 'About page Boiler Plate Example'
  });
}

const faq = (req, res, next) => {
  const faqs = [
    {
      "question": "Bagainama cara login",
      "answer": "Anda perlu memiliki akun terlebih dahulu",
      "important" : true
    },
    {
      "question": "Bagainama cara membuat akun",
      "answer": "Masuk ke menu register dan ikuti petunjuk yang ada di halam tersebut",
      "important" : true
    },
    {
      "question": "X",
      "answer": "X"
    },
    {
      "question": "Contoh pake important",
      "answer": "Contoh pake important",
      "important" : true

    }
  ]
  res.render('faq', {
    faqs : faqs,
    title: 'FAQ',
  });
}

module.exports = {
  home,
  about,
  faq
};