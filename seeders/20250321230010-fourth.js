"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");
    const crochetSizes = [
      {
        crochetId: "BUqSeiIyK_JUR2xabUV3", // Replace with actual ID from crochet seed
        sizeId: "pKULP1dTBkkXgwvWplQ_", // Replace with actual size ID
        colors: null,
      },
      {
        crochetId: "BUqSeiIyK_JUR2xabUV3", // Replace with actual ID from crochet seed
        sizeId: "0gdLbQyxtscQCOXKJby4", // Replace with actual size ID
        colors: null,
      },

      {
        crochetId: "gopIJDLtUEQIzwhdOrp2",
        sizeId: "pKULP1dTBkkXgwvWplQ_",
        colors: JSON.stringify(["black", "navy blue"]),
      },
      {
        crochetId: "gopIJDLtUEQIzwhdOrp2",
        sizeId: "0gdLbQyxtscQCOXKJby4",
        colors: null,
      },

      // pullovers
      {
        crochetId: "L_MNuB0x8AweRX2JTCOO",
        sizeId: "0gdLbQyxtscQCOXKJby4",
        colors: JSON.stringify(["black", "navy blue"]),
      },
      {
        crochetId: "L_MNuB0x8AweRX2JTCOO",
        sizeId: "F6T7grblh1KUf9TGmKfZ",
        colors: null,
      },
      {
        crochetId: "L_MNuB0x8AweRX2JTCOO",
        sizeId: "TUckKpd929_B2DewprxG",
        colors: null,
      },

      // beach wears
      {
        crochetId: "heIZLthy942DzdoHgdmv",
        sizeId: "d934anElAz19eAsLs0G2",
        colors: JSON.stringify(["black", "navy blue"]),
      },
      {
        crochetId: "heIZLthy942DzdoHgdmv",
        sizeId: "pKULP1dTBkkXgwvWplQ_",
        colors: null,
      },
      {
        crochetId: "heIZLthy942DzdoHgdmv",
        sizeId: "0gdLbQyxtscQCOXKJby4",
        colors: null,
      },

      // jacket
      {
        crochetId: "sgZh0_Ts2lMSURKobxZZ",
        sizeId: "F6T7grblh1KUf9TGmKfZ",
        colors: null,
      },
      {
        crochetId: "sgZh0_Ts2lMSURKobxZZ",
        sizeId: "TUckKpd929_B2DewprxG",
        colors: null,
      },

      // dress
      {
        crochetId: "rwqDjNhdF-wurvlxIw_4",
        sizeId: "d934anElAz19eAsLs0G2",
        colors: null,
      },
      {
        crochetId: "rwqDjNhdF-wurvlxIw_4",
        sizeId: "pKULP1dTBkkXgwvWplQ_",
        colors: null,
      },
      {
        crochetId: "rwqDjNhdF-wurvlxIw_4",
        sizeId: "0gdLbQyxtscQCOXKJby4",
        colors: null,
      },

      // two sets
      {
        crochetId: "DeYB8pLlphbBgfCqj-1g",
        sizeId: "d934anElAz19eAsLs0G2",
        colors: null,
      },
      {
        crochetId: "DeYB8pLlphbBgfCqj-1g",
        sizeId: "pKULP1dTBkkXgwvWplQ_",
        colors: null,
      },

      //another two sets
      {
        crochetId: "MFnLtl01sw_-WXbSbehB",
        sizeId: "d934anElAz19eAsLs0G2",
        colors: null,
      },
      {
        crochetId: "MFnLtl01sw_-WXbSbehB",
        sizeId: "pKULP1dTBkkXgwvWplQ_",
        colors: null,
      },
    ].map((item) => ({
      id: nanoid(20),
      crochetId: item.crochetId,
      sizeId: item.sizeId,
      colors: item.colors,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("crochet_sizes", crochetSizes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("crochet_sizes", null, {});
  },
};
