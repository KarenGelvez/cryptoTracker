class Http {
  static instance = new Http();

  get = async url => {
    try {
      let request = await fetch(url);
      let json = await request.json();
      return json;
    } catch (error) {
      console.log('HTTP GET: ', error);
      throw Error(error);
    }
  };

  post = async (url, body) => {
    try {
      let request = await fetch(url, {
        method: 'POST',
        body,
      });
      let json = await request.json();
      return json;
    } catch (error) {
      console.log('HTTP POST: ', error);
      throw Error(error);
    }
  };

  put = async (url, body) => {
    try {
      let request = await fetch(url, {
        method: 'PUT',
        body,
      });
      let json = await request.json();
      return json;
    } catch (error) {
      console.log('HTTP PUT: ', error);
      throw Error(error);
    }
  };

  delete = async url => {
    try {
      let request = await fetch(url, {
        method: 'DELETE',
      });
      let json = await request.json();
      return json;
    } catch (error) {
      console.log('HTTP DELETE: ', error);
      throw Error(error);
    }
  };
}

export default Http;
