import CommentDaoImpl from "./CommentDaoImpl";

// instantiate client
// connect client
// create/get db
const db = "db"; //import the db connection from db dir
const commentDaoImpl = new CommentDaoImpl(db);

export { commentDaoImpl };
