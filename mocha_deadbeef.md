```
  1) / ////:
     Error: timeout of 2000ms exceeded. Ensure the done() callback is being called in this test.
      at Timeout.<anonymous> (C:\Users\user\AppData\Roaming\nvm\v6.1.0\node_modules\mocha\lib\runnable.js:226:19)

```

# doneについて

doneはテスト終了をmochaに伝える

```

Once you’ve imported supertest, it’s quite simple to use. In my examples, I’ll be using the test framework provided by Mocha.

describe('my api', function() {
    it('returns hello world', function(done) {
        request.
            .get('/')
            .expect('Hello, World!', done);
    });
});

This is about as simple as the tests get. We call the root of the site, and expect the response body to equal “Hello, World!”.

Since the request is async, we take in a “done” parameter (which Mocha passes to us). We call that at the end of the test when we’ve actually had a chance to verify the server response.

You can easily test a JSON response with supertest:
```