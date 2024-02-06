Angular 15
--------------------------------------------------------------------------------------

    Angular is a SPA framework.

    Server                                                  Client
        spa-bundle
                        <------REQ-------------
                        ---(spa-bundle) RESP----->           index.html + .js

    To Reduce initial loading time:
        1. Lazy Loading
        2. Server Side Rendering


    Lab Setup

        VSCode          latest  IDE
        NodeJS          18.x    DevPlatform     https://nodejs.org
        Angular CLI     16.x                    npm i -g @angular/cli@16.1.3

    NodeJS?

        is a javascript standalone non-ui runtime .

        Compose
        Transpelling
        Manage Dependencies
        Build
        Test
        Package

        For all of these to happen we need some tools like compilers, build tools ..etc.,
        And these tools are javascript based software and these tools need
        to run in standalone mode and thats where NodeJS comes in.

    Angular CLI ?

        Angular CLI is a frontier of project management for angular.

        ng version

        ng new app-name

        cd app-name

        ng serve
        ng serve --port 8989 -o
        ng build
        ng build --prod
        ng test

        ng g c ComponentName --skip-tests
        ng g module ModuleName
        ng g directive DirectiveName --skip-tests
        ng g pipe PipeName --skip-tests
        ng g servive ServiceName --skip-tests ...etc

    Angular Archetecture

        Each of the angular resources is a typescript class.
        
        We use decorators on each of those classes to identify their roles.
        
        Each of these resource ahve their own config., and the config details are passed as a json object into the
        decorators and is called 'meta-data'.

        Module
            @NgModule({
                declarations:[],
                imports;[],
                exports;[],
                providers:[],
                bootstrap:[]
            })
            class SalesModule {

            }

        Directive
            @Directive({
                selector:'',
                providers:[]
            })
            class FastMovingStockDirective {

            }

        Component
            @Component({
                selector:'',
                templateUrl:'',
                styleUrls:[],
                providers:[]
            })
            class DashboardComponent {

            }

        Service
            @Injectable({
                providedIn:'',
                providers:[]
            })
            class OrdersService {

            }

        Pipe
            @Pipe({
                name:'',
                providers:[]
            })
            class AmountInWordsPipe {

            }

    Angular Modules

        is a group of components, directives, pipes , services and other modules as well.

        In angular , a module is a single unit of memory block (as and whena amodule is laoded, it means that
        all the components, pipes, servives and other group resource of that module are loaded into the memory.)

        Each angular app must be held inside a top-level-module called 'ROOT MODULE'. Generally app.module is the
        name used for 'ROOT MODULE'. 'exports' section is absent for 'ROOT MODULE'.

            @NgModule({
                declarations:[],    //list of components, pipes, directives that belong to this module
                imports:[],         //list of other modules to be inported into this module
                exports:[],         //list of components, pipes, directives that are publicly permitted
                providers:[],       //list of services 
                bootstrap:[]        //inform the initial component of the ROOT MODULE
            })
            class SalesModule {

            }

    