import { defineConfig } from 'umi'

export default defineConfig({
  hash: true,
  publicPath: '/react-resso-memory-game/',
  base: '/react-resso-memory-game/',
  styles: [
    `
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    html,
    body {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  ],
})
