require('dotenv').config();

// 필요한 모듈 다운
const express = require('express');
const cors = require('cors');
const app = express();
const { Grew } = require('./models');
const { Op } = require('sequelize');
const port = process.env.HTTP_PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

app.get('/', () => {
  console.log('hey');
});

app.get('/searching', async (req, res) => {
  const { name, team } = req.query;
  try {
    let grewInfo;
    const nameCondition = [
      {
        name,
      },
      {
        nickname: name,
      },
      {
        nicknameEng: name,
      },
    ];
    if (name === 'all' && team === 'all') {
      grewInfo = await Grew.findAll({
        raw: true,
      });
    } else if (team === 'all' && name !== 'all') {
      grewInfo = await Grew.findAll({
        raw: true,
        where: {
          [Op.or]: nameCondition,
        },
      });
    } else if (team !== 'all' && name === 'all') {
      grewInfo = await Grew.findAll({
        raw: true,
        where: {
          belongsTo: team,
        },
      });
    } else {
      grewInfo = await Grew.findAll({
        raw: true,
        where: {
          [Op.or]: nameCondition,
          belongsTo: team,
        },
      });
    }

    if (!!grewInfo.length) {
      res.json(grewInfo);
    } else {
      res.status(400).send('조건을 만족하는 분이 안 계십니다');
    }
  } catch (err) {
    res.status(500).send('네트워크가 불안정합니다');
  }
});

app.get('/grew-person', async (req, res) => {
  const { id } = req.query;
  console.log(id);
  try {
    const grewInfo = await Grew.findOne({
      raw: true,
      where: {
        id,
      },
    });

    if (grewInfo) res.json(grewInfo);
    else res.status(400).send('조건을 만족하는 분이 안 계십니다');
  } catch (err) {
    res.status(500).send('네트워크가 불안정합니다');
  }
});

app.get('/grew/');

app.listen(port, () => {
  console.log(`          server listening on ${port}`);
});
