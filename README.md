# resso-memory-game

![][david-url]
![][license-url]

A tiny game written in `react` with `resso`. It's inspired by IgorMinar's [Memory-Game](https://github.com/IgorMinar/Memory-Game). You can view the online demo [here](http://leftstick.github.io/react-resso-memory-game).

> If you are looking for `angular5` version, check it [here](https://github.com/leftstick/angular5-memory-game)

> If you are looking for `vue3` version, check it [here](https://github.com/leftstick/vue-memory-game)

## Components Tree

![](https://raw.githubusercontent.com/leftstick/react-resso-memory-game/master/docs/components.png)

## Presentational Components break down

1. `MemoryGame`, the whole game board
2. `ScoreBoard`, the panel on the top, including "logo", "progress", "best score"
3. `Logo`, on the left of `ScoreBoard`, showing the game Logo
4. `MatchInfo`, on the center of `ScoreBoard`, showing the progress of this round
5. `Score`, on the right of `ScoreBoard`, showing the best result
6. `ChessBoard`, on the center of `Game`, the playing area
7. `Card`, each card in the `ChessBoard`
8. `GameStatusBoard`, the footer part, displaying current status of game

## File Structure

```
react-resso-memory-game
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   │   ├── 8-ball.png
│   │   ├── back.png
│   │   ├── baked-potato.png
│   │   ├── dinosaur.png
│   │   ├── kronos.png
│   │   ├── rocket.png
│   │   ├── skinny-unicorn.png
│   │   ├── that-guy.png
│   │   └── zeppelin.png
│   ├── helpers
│   │   ├── game.ts
│   │   ├── index.ts
│   │   ├── object.ts
│   │   └── view.ts
│   ├── layouts
│   │   └── index.ts
│   ├── stores
│   │   └── gameStore.ts
│   ├── pages
│   │   ├── components
│   │   ├── document.ejs
│   │   ├── index.less
│   │   └── index.tsx
│   └── ITypes.ts
├── package.json
├── tsconfig.json
└── typings.d.ts
```

## Want Having a try locally?

```bash
#cloning code
git clone https://github.com/leftstick/react-resso-memory-game.git
cd react-resso-memory-game

#install dependencies
yarn
#start debug server
yarn start
```

Now, view the demo at [http://localhost:8080](http://localhost:8080)

## LICENSE

[GPL v3 License](https://raw.githubusercontent.com/leftstick/react-resso-memory-game/master/LICENSE)

[david-url]: https://david-dm.org/leftstick/react-resso-memory-game.png
[license-url]: https://img.shields.io/github/license/leftstick/react-resso-memory-game.svg
