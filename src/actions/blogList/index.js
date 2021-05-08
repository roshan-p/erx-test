
const getBlog = async () =>  {
    const rawResponse = await fetch('https://us-central1-erx-frontend-test.cloudfunctions.net/blog', {
        method: 'GET',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(data)
      });
      const content = await rawResponse.json();
    
      return content;
  }

  export default  getBlog;