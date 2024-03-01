app.module
    |-app.component
    |       |- <router-outlet>      //will be replaced by accComp/stmtComp/loginC/regComp
    |
    |-accounts.module
    |   |-accounts-component
    |   |   |- <router-outlet>      //will be replaced by listcomp/formComp
    |   |
    |   |-list.component
    |   |-account-form.component
    |
    |-statement.module
    |   |-statement-component
    |
    |-gateway.module
    |   |-login.component
    |   |-register.component

access rules

    when no user logged in ( anonymous user )               onlyAnonymousUsersGuard   
        access allowed only to /login and /register

    when a user logged in
        when it is an ADMIN                                 onlyAdminsGuard
            access allowed only to /accounts/*

        when it is a ACCOUNT_HOLDER                         onlyAccountHolderGuard
            access allowed only to /statement/*

Model Graph

    BtaUser     <-OneToOne->    Account     <-OneToMany->  Txn

Actions / Operations Flow

                    action.type                     action.payload                          State
    Gateway

                    [gatesay] login           {userName:string,password:string}       currentUser,error
                    [gateway] register        {userName:string,password:string}       error,isOK

    Accounts
                    [account] load              No Payload                            accounts,error
                    [account] delete            {id:number}
                    [account] resetPassword     {userId:number,password:string}

    Statement
                    [txns] load                 {accountId:number}                     txns,error  
                    [txns] add                  {txn:Txn}
                    [txns] delete               {id:number}
                    [txns] update               {txn:Txn}