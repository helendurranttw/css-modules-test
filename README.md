# CSS Modules Test

This is a simple test demonstrating some components using CSS Modules.

# To use

This package isn't published, so clone the repo, build, and link it for use in your project:

```
git clone https://github.com/helendurranttw/css-modules-test.git
cd css-modules-test
yarn
yarn build
yarn link
```

In your project, add the following to your dependencies in `package.json`:

`"css-modules-test": "0.0.1"`

Then run:

`yarn link css-modules-test`

And you should be good to go. If you run `yarn install` on your repository, the linked pacakage may appear to fail to install, but when you run it should work.

To use a component:

```
import Alert from "css-modules-test/build/alert/alert";

// ....

  <Alert dismissible={true} size="sm" special={true} type="success" onDismiss={() => alert('dismissed')}>
      <p>Everything went well and life is amazing.</p>
  </Alert>
```
