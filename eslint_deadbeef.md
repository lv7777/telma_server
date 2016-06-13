# eslintで死んだ場所を記述して自分が引っかかりやすいところをメモっとく。

## 一回目



```
C:\Users\user\Desktop\g\GeckoLion\telma_server\test\router-test.js
   9:29  error  Unexpected string concatenation  prefer-template
   9:73  error  Missing semicolon                semi
  10:7   error  Missing semicolon                semi
  11:3   error  Missing semicolon                semi
  ```
  
  ## 2回目
  
  ```
  C:\Users\user\Desktop\g\GeckoLion\telma_server\router.js
   2:6  error  'sql' is never reassigned, use 'const' instead      prefer-const
   3:6  error  'express' is never reassigned, use 'const' instead  prefer-const
   4:6  error  'router' is never reassigned, use 'const' instead   prefer-const
   9:5  error  Expected method shorthand                           object-shorthand
  12:2  error  Missing semicolon                                   semi

✖ 5 problems (5 errors, 0 warnings)

  ```
  
  ## 3回目、全部のeslint
  
  ```
  
c:\Users\user\Desktop\g\GeckoLion\telma_server>npm run lint

> telma_server@1.0.0 lint c:\Users\user\Desktop\g\GeckoLion\telma_server
> eslint main.js express.js router.js socketio.js sql.js


C:\Users\user\Desktop\g\GeckoLion\telma_server\express.js
  1:5  error  'express' is never reassigned, use 'const' instead  prefer-const
  2:5  error  'router' is never reassigned, use 'const' instead   prefer-const
  3:5  error  'app' is never reassigned, use 'const' instead      prefer-const

C:\Users\user\Desktop\g\GeckoLion\telma_server\router.js
  72:7  error  Missing semicolon  semi

C:\Users\user\Desktop\g\GeckoLion\telma_server\socketio.js
   2:5   error  'expressserver' is never reassigned, use 'const' instead  prefer-const
   3:5   error  'socketio' is never reassigned, use 'const' instead       prefer-const
   5:5   error  'socket' is never reassigned, use 'const' instead         prefer-const
   7:14  error  Missing semicolon                                         semi
  10:5   error  'obj' is never reassigned, use 'const' instead            prefer-const

C:\Users\user\Desktop\g\GeckoLion\telma_server\sql.js
  1:5  error  'sql' is never reassigned, use 'const' instead  prefer-const

✖ 10 problems (10 errors, 0 warnings)
  ```
  
  ## 4回目、分割したあと
  
  ```
  
C:\Users\user\Desktop\g\GeckoLion\telma_server\express.js
  3:44  error  Missing semicolon                               semi
  4:5   error  'app' is never reassigned, use 'const' instead  prefer-const

C:\Users\user\Desktop\g\GeckoLion\telma_server\router.js
   7:9  error  'router' is never reassigned, use 'const' instead  prefer-const
  96:2  error  Missing semicolon                                  semi

C:\Users\user\Desktop\g\GeckoLion\telma_server\socketinit.js
   1:5   error  'socketio' is never reassigned, use 'const' instead  prefer-const
   1:34  error  Missing semicolon                                    semi
   3:5   error  'socket' is never reassigned, use 'const' instead    prefer-const
   7:39  error  Missing semicolon                                    semi
   8:26  error  Missing semicolon                                    semi
   9:7   error  Missing semicolon                                    semi
  14:2   error  Missing semicolon                                    semi

✖ 11 problems (11 errors, 0 warnings)

```
  