json-server-auth access rules

    http://localhost:9999/{accessRule}/accounts

    access digit is 
        0    no access
        2   read access
        4   write access
        6   read and write access

    accessRule is inspired from UNIX auth system.

        regOwner logginUser public

        accessRule      Meaning
        666             All owner user, loggedin users and public can read and write
        
        620             Owner user can read and write
                        loggin user can read
                        public user has no access

        http://localhost:9999/666/accounts

            will allow all users to do everything.

        http://localhost:9999/660/accounts

            will allow the owner user and loggedIn user to do anything
            and anonymous/pubic user can not do anything

        


    