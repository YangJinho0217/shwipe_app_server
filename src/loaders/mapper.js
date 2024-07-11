const mapper = require("mybatis-mapper");

mapper.createMapper([
  "./src/mapper/web.xml",
  "./src/mapper/user.xml",
  "./src/mapper/board.xml",
  "./src/mapper/common.xml"
]);

module.exports = mapper;
