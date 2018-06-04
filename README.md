# Best app ever

### Setup

Clone the repo

```bash
git clone https://github.com/learnercys/best-app-ever.git
```

Install dependencies

```bash
npm install
```

Start

```bash
npm start
```

**Note:** Be sure that the port `8888` can be used. Also you can change this default value by setting the environment variable `PORT`.

Now you're ready to use the api.

Examples for requirement 1:

* `GET http://localhost:8888/vehicles/2015/Audi/A3`
* `GET http://localhost:8888/vehicles/2015/Toyota/Yaris`
* `GET http://localhost:8888/vehicles/2015/Ford/Crown Victoria`
* `GET http://localhost:8888/vehicles/undefined/Ford/Fusion`

Also for requirement 2: `POST http://localhost:8888/vehicles`

```
{
    "modelYear": 2015,
    "manufacturer": "Audi",
    "model": "A3"
}
```

```
{
    "modelYear": 2015,
    "manufacturer": "Toyota",
    "model": "Yaris"
}
```

And

```
{
    "manufacturer": "Honda",
    "model": "Accord"
}
```

