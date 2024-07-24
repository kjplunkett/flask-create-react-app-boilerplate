# Flask Create React App Boilerplate

Starter kit for local web development with a Flask backend + React frontend

## Development

### Prerequisites
> Prerequisites:
> Node: [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
> Python: [pyenv](https://github.com/pyenv/pyenv) and [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)

### Python Dependencies

Ensure you have the correct version of python installed 

```shell
pyenv install
```

If you get a prompt about the version already existing, cancel that command and move on.

Create a new virtualenv

```shell
pyenv virtualenv flask-react-starter-kit
```

Activate the virtualenv
```shell
pyenv activate flask-react-starter-kit
```

Install python dependencies 

```shell
pip install -r requirements.txt
```

### Node Dependencies

Ensure you have the correct version of node installed

```shell
nvm install
```

If you get a prompt about the version already existing, cancel that command and move on.

Install node dependencies

```shell
npm install
```

## Configuration

Copy the example environment variables file
```shell
cp .env.example .env.local
```

## Usage

Start the frontend 

```shell
npm run start
```

In a new shell, start the backend

````shell
flask run
````

Load the frontend in your browser

```
http://localhost:3000
```

## Testing

Run frontend tests
```shell
npm run test
```

Run backend tests
```shell
pytest
```

## TODO

- [x] Finish boilerplate setup
- [ ] Add tests
- [ ] Linting, Formatting
- [ ] Finish README
- [ ] Containerize
