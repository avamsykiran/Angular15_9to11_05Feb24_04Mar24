Typescript
--------------------------------------------------------------------------------------------

    Typescript = JavaScript + Types

    Lab Setup

        tsc         typescript compiler

        compiling .ts into .js is called transpelling

    Creating a project:

        npm init -y
        npm i Typescript --save-dev

        npx tsc --init

        npx tsc filename.ts 

    Datatypes

        number
        string
        boolean
        bigint
        symbol

    Special Datatypes

        any
        unknown
        never
        undefined
        null

    Standard tsconfig

        {
            "compilerOptions": {
                "module": "commonjs",
                "esModuleInterop": true,
                "target": "es6",
                "moduleResolution": "node",
                "sourceMap": false,
                "outDir": "dist"
            },
            "lib": ["es2015"]
        }

    functions

        function funName(param1:type,param2:type) : returntype {

        }

        const funName = function(param1:type,param2:type) : returntype {

        }

        returnType can be any supported data type inc;uding void and never.

        mostly we use void, and void facilitates null value.
        never doesnt even allow nulls.

        
    OOP

        interface
        class
        aliases
        enums


