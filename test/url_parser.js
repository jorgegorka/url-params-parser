const expect = require("chai").expect;
const UrlParser = require("../url_parser").UrlParser;

let urlAddress =
  "https://test.address.com:2603/route/to/page/?climate=change&sea-level=rising";
let urlPattern = "";

describe("UrlParser", () => {
  it("should return the hostname", () => {
    expect(UrlParser(urlAddress, urlPattern).host).to.equal(
      "test.address.com:2603"
    );
  });

  it("should return the hostname", () => {
    expect(UrlParser(urlAddress, urlPattern).hostname).to.equal(
      "test.address.com"
    );
  });

  it("should return the port", () => {
    expect(UrlParser(urlAddress, urlPattern).port).to.equal("2603");
  });

  it("should return the path name", () => {
    expect(UrlParser(urlAddress, urlPattern).pathname).to.equal(
      "/route/to/page/"
    );
  });

  it("should return the path name", () => {
    expect(UrlParser(urlAddress, urlPattern).protocol).to.equal("https:");
  });

  it("should return the search queries", () => {
    expect(UrlParser(urlAddress, urlPattern).search).to.equal(
      "?climate=change&sea-level=rising"
    );
  });

  it("should return the search queries as an object", () => {
    expect(UrlParser(urlAddress, urlPattern).queryParams).to.deep.equal({
      climate: "change",
      "sea-level": "rising"
    });
  });

  it("should return the search queries as an array with all keys", () => {
    expect(UrlParser(urlAddress, urlPattern).queryParamsKeys).to.deep.equal([
      "climate",
      "sea-level"
    ]);
  });

  it("should return the search queries as an array with all values", () => {
    expect(UrlParser(urlAddress, urlPattern).queryParamsValues).to.deep.equal([
      "change",
      "rising"
    ]);
  });

  it("should return the path name as an array of elements", () => {
    expect(UrlParser(urlAddress, urlPattern).pathNames).to.deep.equal([
      "route",
      "to",
      "page"
    ]);
  });

  describe("A url with named params", () => {
    describe("In root path", () => {
      beforeEach(() => {
        urlAddress =
          "https://test.address.com:2603/1234/developer/?climate=change&sea-level=rising";
        urlPattern = "/:id/:title";
      });

      it("should return the named params keys", () => {
        expect(UrlParser(urlAddress, urlPattern).namedParamsKeys).to.deep.equal(
          ["id", "title"]
        );
      });

      it("should return the named params values", () => {
        expect(
          UrlParser(urlAddress, urlPattern).namedParamsValues
        ).to.deep.equal(["1234", "developer"]);
      });

      it("should return the named params as an object", () => {
        expect(UrlParser(urlAddress, urlPattern).namedParams).to.deep.equal({
          id: "1234",
          title: "developer"
        });
      });
    });

    describe("In a first level path", () => {
      beforeEach(() => {
        urlAddress =
          "https://test.address.com:2603/employee/1234/developer/?climate=change&sea-level=rising";
        urlPattern = "/employee/:id/:title";
      });

      it("should return the named params keys", () => {
        expect(UrlParser(urlAddress, urlPattern).namedParamsKeys).to.deep.equal(
          ["id", "title"]
        );
      });

      it("should return the named params values", () => {
        expect(
          UrlParser(urlAddress, urlPattern).namedParamsValues
        ).to.deep.equal(["1234", "developer"]);
      });

      it("should return the named params as an object", () => {
        expect(UrlParser(urlAddress, urlPattern).namedParams).to.deep.equal({
          id: "1234",
          title: "developer"
        });
      });
    });

    describe("In a multilevel level path", () => {
      beforeEach(() => {
        urlAddress =
          "https://test.address.com:2603/employees/show/1234/developer/reports/asc/?climate=change&sea-level=rising";
        urlPattern = "/employees/show/:id/:title/reports/:order";
      });

      it("should return the named params keys", () => {
        expect(UrlParser(urlAddress, urlPattern).namedParamsKeys).to.deep.equal(
          ["id", "title", "order"]
        );
      });

      it("should return the named params values", () => {
        expect(
          UrlParser(urlAddress, urlPattern).namedParamsValues
        ).to.deep.equal(["1234", "developer", "asc"]);
      });

      it("should return the named params as an object", () => {
        expect(UrlParser(urlAddress, urlPattern).namedParams).to.deep.equal({
          id: "1234",
          title: "developer",
          order: "asc"
        });
      });
    });
  });
});
