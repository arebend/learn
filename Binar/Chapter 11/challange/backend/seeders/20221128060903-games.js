"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    //1
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "Gunting Batu Kertas",
          type: "traditional game",
          difficulty: "medium",
          description:
            'Rock paper scissors is a hand game originating from China, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). "Scissors" is identical to the two-fingered V sign except that it is pointed horizontally instead of being held upright in the air. A simultaneous, zero-sum game, it has three possible outcomes: a draw, a win or a loss. A player who decides to play rock will beat another player who has chosen scissors, but will lose to one who has played paper, a play of paper will lose to a play of scissors. If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie. The game spread from China while developing different variants in signs over time.',
          image: "gunting batu kertas.png",
          isPlayable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    //2
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "Kelereng",
          type: "traditional game",
          difficulty: "medium",
          description:
            "A marble is a small spherical object often made from glass, clay, steel, plastic, or agate. They vary in size, and most commonly are about 13 mm (1⁄2 in) in diameter. These toys can be used for a variety of games called marbles, as well being placed in marble runs or races, or created as a form of art. They are often collected, both for nostalgia and for their aesthetic colors",
          isPlayable: false,
          image: "kelereng.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    //3
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "Gasing",
          type: "traditional game",
          difficulty: "medium",
          description:
            "A spinning top, or simply a top, is a toy with a squat body and a sharp point at the bottom, designed to be spun on its vertical axis, balancing on the tip due to the gyroscopic effect. Once set in motion, a top will usually wobble for a few seconds, spin upright for a while, then start to wobble again with increasing amplitude as it loses energy, and finally tip over and roll on its side. Tops exist in many variations and materials, chiefly wood, metal, and plastic, often with a metal tip. They may be set in motion by twirling a handle with the fingers, by pulling a rope coiled around the body, or by means of a built-in auger (spiral plunger). Such toys have been used since antiquity in solitary or competitive games, where each player tries to keep one's top spinning for as long as possible, or achieve some other goal. Some tops have faceted bodies with symbols or inscriptions, and are used like dice to inject randomness into games, or for divination and ritual purposes. The ubiquity of spinning tops lends to the fact that the toy is used to name many living things such as Cyclosa turbinata, whose name comes from the Latin roots for spinning top.",
          isPlayable: false,
          image: "gasing.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    //4
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "Congklak",
          type: "traditional game",
          difficulty: "medium",
          description:
            "Congklak is a traditional game known by various names throughout Indonesia. Usually in the game, a kind of shell is used as congklak seeds and if not available, seeds from plants and small stones are sometimes used. The congklak game is played by two people. In the game they use a board called a congklak board and 98 (14 x 7) seeds called congklak seeds or congklak seeds. Congklak boards are generally made of wood and plastic, while the seeds are made of shells, seeds, stones, marbles or plastic. On the congklak board there are 16 holes consisting of 14 small holes facing each other and 2 large holes on both sides. Every 7 small holes on the player's side and the big hole on the right side are considered as belonging to the player.",
          image: "Congklak.png",
          isPlayable: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    //5
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "Bekel",
          type: "traditional game",
          difficulty: "medium",
          description:
            "a child's game. The game is an ancient game usually played with five small objects, or ten in the case of groups",
          image: "bekel.png",
          isPlayable: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  // async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  // },
};
