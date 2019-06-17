const UrlParser = (urlString, namedUrl = "") => {
  const urlBase = new URL(urlString);

  /**
   * Wrapper for URL.host
   *
   **/
  function host() {
    return urlBase.host;
  }

  /**
   * Wrapper for URL.hostname
   *
   **/
  function hostname() {
    return urlBase.hostname;
  }

  /**
   * Returns the named params and their values as an object
   *
   **/
  function namedParams() {
    const allPathName = pathNames();
    const allNamedParamsKeys = namedParamsWithIndex();

    return allNamedParamsKeys.reduce((values, paramKey) => {
      values[paramKey.value] = allPathName[paramKey.index];
      return values;
    }, {});
  }

  /**
   * Returns an array of named params keys
   *
   **/
  function namedParamsKeys() {
    const allNamedParamsKeys = namedParamsWithIndex(namedUrl);

    return allNamedParamsKeys.reduce((values, paramKey) => {
      values.push(paramKey.value);
      return values;
    }, []);
  }

  /**
   * Returns an array of named params values
   *
   **/
  function namedParamsValues() {
    const allPathName = pathNames();
    const allNamedParamsKeys = namedParamsWithIndex();

    return allNamedParamsKeys.reduce((values, paramKey) => {
      values.push(allPathName[paramKey.index]);
      return values;
    }, []);
  }

  /**
   * Returns an array of named param ids with their position in the url
   *
   **/
  function namedParamsWithIndex() {
    const namedUrlParams = getPathNames(namedUrl);

    return namedUrlParams.reduce((validParams, param, index) => {
      if (param[0] === ":") {
        validParams.push({ value: param.slice(1), index });
      }
      return validParams;
    }, []);
  }

  /**
   * Wrapper for URL.port
   *
   **/
  function port() {
    return urlBase.port;
  }

  /**
   * Wrapper for URL.pathname
   *
   **/
  function pathname() {
    return urlBase.pathname;
  }

  /**
   * Wrapper for URL.protocol
   *
   **/
  function protocol() {
    return urlBase.protocol;
  }

  /**
   * Wrapper for URL.search
   *
   **/
  function search() {
    return urlBase.search;
  }

  /**
   * Returns an array with all query params and their values
   *
   **/
  function queryParams() {
    const params = {};
    urlBase.searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }

  /**
   * Returns an array with all query params keys
   *
   **/
  function queryParamsKeys() {
    const params = [];
    urlBase.searchParams.forEach((_value, key) => {
      params.push(key);
    });

    return params;
  }

  /**
   * Returns an array with all query params keys
   *
   **/
  function queryParamsValues() {
    const params = [];
    urlBase.searchParams.forEach(value => {
      params.push(value);
    });

    return params;
  }

  /**
   * Returns an array with all the parts of the url pathname
   *
   **/
  function pathNames() {
    return getPathNames(urlBase.pathname);
  }

  /**
   * Returns an array with all the parts of a pathname
   * Private method
   **/
  function getPathNames(pathName) {
    if (pathName === "/" || pathName.trim().length === 0) return [pathName];
    if (pathName.slice(-1) === "/") {
      pathName = pathName.slice(0, -1);
    }
    if (pathName[0] === "/") {
      pathName = pathName.slice(1);
    }

    return pathName.split("/");
  }

  return Object.freeze({
    host: host(),
    hostname: hostname(),
    namedParams: namedParams(),
    namedParamsKeys: namedParamsKeys(),
    namedParamsValues: namedParamsValues(),
    pathNames: pathNames(),
    port: port(),
    pathname: pathname(),
    protocol: protocol(),
    search: search(),
    queryParams: queryParams(),
    queryParamsKeys: queryParamsKeys(),
    queryParamsValues: queryParamsValues()
  });
};

module.exports = { UrlParser };
