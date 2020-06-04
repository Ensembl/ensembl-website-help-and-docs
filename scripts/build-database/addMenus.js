const addMenus = async (db, menus) => {
  for (appMenu of menus) {
    await insertAppMenu(db, appMenu);
  }
};

const insertAppMenu = async (db, appMenu) => {
  const sql = `INSERT INTO menus(application, data) VALUES (:appName, :data)`;
  await db.run(sql, {
    ':appName': appMenu.name,
    ':data': JSON.stringify(appMenu.data)
  });
};

module.exports = addMenus;
