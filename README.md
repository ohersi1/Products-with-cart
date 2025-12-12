# Products with cart

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler




If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Issue 1:
I had an issue with my font not working. I realised that you have to load your font first when you have the font files saved locally using @font-face. That took me a while to figure out but once I did that and then set the font-family to my new font in the body I resolved that issue.

Issue 2:
My + button was moving once my count was 10 or above because I used justify-content: space-between so once my count was double digits the + button would move physically on the screen which was terrible. I solved it by setting width on my count span to 3ch. this means the width of my span is 3 characters so it would solve my problem. I also text-align: center the span so my count was centered to help with aesthetics and living up to the design.