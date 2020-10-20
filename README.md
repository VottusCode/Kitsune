<h1 align="center">
    <img alt="Senko" src="https://i.imgur.com/dKT0ayc.png" height="100px"/>
    <br>
    Kitsune
  <br>
</h1>

Originally built as a small bot for KitsuneVPN, we're rebuilding it and making it more powerful than ever.

## About the bot

Kitsune is a helpful moderation bot that we have a lot of plans with. At the moment, it can't do really much as it's code originates from abandoned [KitsuneVPN/BotKitsune](https://github.com/KitsuneVPN/BotKitsune).

## Setting up

Let's setup **Kitsune**, shall we?

### Requirements

These are the requirements to run Kitsune.
<br>
Don't forget that they can change overtime.

**We recommend using the tested version of listed requirements, otherwise you may run into issues.**

- MongoDB (tested on 4.2)
- Node.js (tested on version 12 and 14)
- Yarn (v1 only) - can be installed via `npm i -g yarn`

### Installing

#### Clone the repository

Either download the repository via GitHub, or if you have Git install then run:

```shell
# HTTPS
$ git clone https://github.com/VottusCode/Kitsune

# Or via SSH
$ git clone git@github.com:VottusCode/Kitsune
```

#### Installing all dependencies

Simply run:

```shell
$ yarn install
```

#### Configuing the bot

First of all, rename `config.example.ts` to config.ts.
<br>
Then open the file and change the configuration to it's appropriate values.

### Starting up the bot

There are two commands to start the bot. The difference between them is that one is meant for development and the other for production.

#### Development

```shell
$ yarn dev
```

This will set the `NODE_ENV` environment variable to `development` and will launch the bot with nodemon, which restarts the application on file changes.

### Production

```shell
$ yarn start
```

This will set the `NODE_ENV` environment variable to `production`.

<br>
<hr/>

This bot is created by [VottusCode](https://github.com/VottusCode) and is licensed under MIT,
please see the LICENSE file.
