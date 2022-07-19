// We can inject the db dependency in the dao. This will allow us to inject different test db to make tests faster

describe("Comment Dao", () => {
  beforeAll(() => {
    // initializations
    // e.g DAO initialization
  });
  beforeEach(() => {
    // reset initializations
    // e.g in-memory db clear
  });

  describe("find all", () => {
    it("sould find all comment", () => {
      //some test logic here
    });
  });

  describe("insert", () => {
    it("sould insert a comment in db", () => {
      //some test logic here
    });
  });
});
