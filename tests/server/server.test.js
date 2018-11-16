let request = require("supertest");

let server = require("../../server/server");

jest.mock("../../server/data/datainterface", () => {
  return {
    getOrgans: () => [{ name: "Brain" }, { name: "Lungs" }]
  };
});

test("check that /organs is working", () => {
  let expected = "Brain";
  return request(server)
    .get("/api/list")
    .then(res => {
      console.log(res.body);
      let actual = res.body[0].name;
      expect(actual).toEqual(expected);
    });
  // .catch(err => {
  // console.log("error", err);
  // });
});
