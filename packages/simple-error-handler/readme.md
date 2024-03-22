## Simple Logger
![simple-error-handler workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-error-handler-test.yaml/badge.svg)
![simple-error-handler workflow](https://github.com/juliusagency/jla-node-monorepo/actions/workflows/simple-error-handler-github.yaml/badge.svg)

A simple error handler for Nodejs applications.

### Installation
```bash
  npm install @juliusagency/simple-error-handler
```
### Usage
```
 - in an Application (index.ts):

    const app: Express = express();
    ...

    // after the last router
    app.use(errorHandler);

  - somewhere in a controller:

    export const getItem = async (req: Request, res: Response | any, next: NextFunction) => {
      ...
      if (!item) {
        throw new AppError({
          code: ResponseCode.NOT_FOUND,
          description: 'Item does not exist',
        });
      }
      return res.status(ResponseCode.OK).json(item);
    };
```