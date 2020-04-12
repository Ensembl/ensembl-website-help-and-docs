const getOneDocument = async (db, name) => {
  try {
    const match = await db.get('SELECT * FROM documents WHERE name = ?', name);
    if (!match) {
      return;
    }
    match.data = JSON.parse(match.data);
    return match;
  } catch (error) {
    console.log('error getting the document', error);
  }
};


module.exports = {
  getOneDocument
};
