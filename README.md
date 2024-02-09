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

    Angular Directives And Components

        Angular application feature html extendability.

        We can create custome html elements and attributes. That is what is called a Directive.

        Directives
            Attribute Directive
                is a custom attribute

            Structural Directive
                is an attribute directive that can control the rendering of an element.
                *ngIf
                *ngFor
                ngSwitch - *ngSwitchCase 

            Component Directive (Components)    
                is a custom html element

        Angular Components

            Component is the atomic unit of a UI/UX application.

            Component   =   STYLE                           STATE & BEHAVIOUR           PRESENTATION
                            dashboard.component.css     dashboard.component.ts      dashboard.component.html

            @Component({
                selector:'app-header',
                templateUrl:'dashboard.component.html',
                styleUrls:['dashboard.component.css']
            })
            class DashboardComponent {
                //list of all fields to maintain the state of the component

                //methods to operate on the state or to handle the events.
            }

            <app-header></app-header>
        
        Angular Data Binding

            Data Binding is all about using the fields and method of the component class inside
            the component template. Everytiem the field gets modified, its reflection on the screen
            are reevalauted autoamtically.

            Interpolation
                Binding a field or an angualr expression with the contnet of an element.

                <tagName> {{angular-expression}} </tagName>

            Two-Way Data Binding
                Bind a field with a form input element.
                'ngModel' is a attribute directive from 'FormsModule' from '@angular/forms', is used for two-way data binding.

                <input name="tb1" [(ngModel)]="field" />

            One-Way Data Binding
                Attribute Binding
                    Binding a field or an expression with a attribute of an element.

                    <tagName attribute="value"></tagName>
                    <tagName [attribute]="field"></tagName>
                    
                Event Binding
                    Invoke a method to handle event when an event occurs.

                    <tagName (eventAttributeDirective)="method()" ></tagName>

                    html-event-attribute        eventAttributeDirective
                    ----------------------------------------------------
                        onclick                     click
                        onDblClick                  dblClick
                        onBlur                      blur
                        onfocus                     focus
                        onChange                    change
                        onSubmit                    submit, ngSubmit
                        onmouseover                 mouseover
                        ...etc.,
                        
                Style Binding
                    Bind a field or an expression on to the css-property of an element.

                    <tagName [style.css.property]="field" ></tagName>
                    <div [style.backgroundColor]="myBgColor" ></div>

                Css Class Binding

                    Bind a field to switch on or off a css-class

                    <tagName class="c1 c2 c3"></tagName>

                    <tagName [class.c1]="booleanField1" [class.c2]="booleanField2" ></tagName>
                    
                    this.cssClassesList = "c1 c2 c3";
                    <tagName [ngClass]="cssClassesList" ></tagName>
                    
                    this.cssClassesArray = ["c1","c2","c3"];
                    <tagName [ngClass]="cssClassesArray" ></tagName>
                    
                    this.cssClassesObj = {c1:true,c2:false,c3:true};
                    <tagName [ngClass]="cssClassesObj" ></tagName>

        Structural Directives

            ngIf
                <ng-template [ngIf]="userName!==null">
                    <div>
                        Hello {{userName}}!
                    </div>
                </ng-template>

                <div *ngIf="userName!==null">
                 Hello {{userName}}!
                </div>

            ngFor
                this.skills = ["ui","rest-api","java","javascript"];

                <ol>
                    <li *ngFor="let s of skills"> {{s}} </li>
                </ol>

            ngSwitch

                <div [ngSwitch]="emp.designation">
                    <img [src]="managerIcon" *ngSwitchCase="'mgr'"/>
                    <img [src]="directorIcon" *ngSwitchCase="'dir'"/>
                    <img [src]="srAssociateIcon" *ngSwitchCase="'sassc'"/>
                    <img [src]="associateIcon" *ngSwitchCase="'assc'"/>
                    <img [src]="defaultIcon" *ngSwitchDefault/>
                </div>
    
    Angular Pipes

        is used to tranform a value just before it renders.

        buitl-in pipes
            lowercase
            uppercase
            titlecase
            number
            currency
            date
            ....etc.,

        custom pipes
            @Pipe({
                name:'',
                providers:[]
            })
            class AmountInWordsPipe implements PipeTranform {
                transform(value,...paramsList) : string {
                    //trnasform the incoming value into something else.
                }
            }

        usage

            {{value|pipeName:param1:param2}}

    Cutom Attribute Directives

        @Input()        is used to receive a value from the parent component

        @HostListner()  is sued to handle event on the host-element

            <tagName myOwnDirective="value">
            </tagName>

            <tagName [myOwnDirective]="field">
            </tagName>