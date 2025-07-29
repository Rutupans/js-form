
    function validateForm()
        {
            const name = document.getElementById( "name" ).value.trim();
            const email = document.getElementById( "email" ).value.trim();
            const phone = document.getElementById( "phone" ).value.trim();
            const phone_pattern = /^[0-9]{10}$/;
            const password = document.getElementById( "password" ).value;
            const conf_pass = document.getElementById( "conf_pass" ).value;

            if ( name.length < 5 )
            {
        alert( "Name must be at least 5 characters long." );
                return false;
            }

            if ( !email.includes( "@" ) )
            {
        alert( "Enter a valid email." );
                return false;
            }

            if ( !phone_pattern.test( phone ) || phone === "1234567890" )
            {
        alert( "Enter a valid 10-digit phone number." );
                return false;
            }

            if (
                password.toLowerCase() === "password" ||
                password.toLowerCase() === name.toLowerCase() ||
                password.length < 8
            )
            {
        alert( "Password is not strong. It cannot be your name, or less than 8 characters." );
                return false;
            }

            if ( password !== conf_pass )
            {
        alert( "Passwords do not match." );
                return false;
            }

            alert( "Form submitted successfully!" );
            return true;
        }
    