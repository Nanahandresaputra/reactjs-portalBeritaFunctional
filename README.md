
# Portal Berita
Web portal Berita ini merupakan sarana mencari informasi dan berita terkini, memikiki fitur pencarian, category, dll.<br/>
Karena aplikasi ini masih menggunakan free public api jadi request nya terbatas hanya 100 request perharinya.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Nanahandresaputra/reactjs-portalBeritaFunctional.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


referensi Api :

 - [NewsApi](https://newsapi.org/)
 - [GNews](https://gnews.io/)
 - [mediastack](https://mediastack.com/)


### Jika error pada aplikasi
- 400	Bad Request -- Your request is invalid.
- 401	Unauthorized -- Your API key is wrong.
- 403	Forbidden -- You have reached your daily quota, the next reset is at 00:00 UTC.
- 429	Too Many Requests -- You have made more requests per second than you are allowed.
- 500	Internal Server Error -- We had a problem with our server. Try again later.
- 503	Service Unavailable -- We're temporarily offline for maintenance. Please try again later.