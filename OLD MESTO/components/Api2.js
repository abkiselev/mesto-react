export class Api2 {
    constructor({ baseUrl, headers }){   
        this._baseUrl = baseUrl;
        this._headers = headers;
        
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
        }
        return res.json();
    }

    // getRandomGif(){
    //     return fetch(`${this._baseUrl}/random?api_key=LgKQAIWNj0vz4nfwGHULAscH7a9nyP5R`, {
    //         headers: this._headers
    //         })
    //         .then(res => this._getResponseData(res))
    // }

    uploadGif(){
        return fetch(`https://upload.giphy.com/v1/gifs?api_key=LgKQAIWNj0vz4nfwGHULAscH7a9nyP5R`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
              "source_image_url": "https://i.gifer.com/pmw.mp44"
            })
          })
          .then(res => this._getResponseData(res))
          
      }

}