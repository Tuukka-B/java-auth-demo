package com.tuukka.javaauthdemo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCrypt;
import java.util.Map;

@RestController
public class HelloController {

    @PostMapping("/post-data")
    public void getData(@RequestHeader("Authorization") String suppliedCredentials, @RequestBody Map<String, String> data) {

        /* hard-coded stuff */
        String salt = "$2a$10$eMwbUMmFcP78eUAix65gFe";
        String hashed = BCrypt.hashpw("Q29uZ3JhdHNPbkZpbmRpbmdUaGlzRWFzdGVyRWdnIQ==", salt).strip();
        /* hard coded stuff ends */

        String[] suppliedCredsArr = suppliedCredentials.split(":");

        /* debug
         *
         * System.out.println("Password");
         * System.out.println(hashed);
         * System.out.println("User-supplied Password");
         * System.out.println(userPass);
         */

        if (suppliedCredsArr[1].equals(hashed) && suppliedCredsArr[0].equals("api-user")) {
            System.out.println("Credentials match! Printing received data...");
            data.forEach((k, v) -> System.out.println((k + ": " + v)));
        } else
            throw new UnAuthorizedException();

    }

    @ResponseStatus(value= HttpStatus.UNAUTHORIZED, reason="Authentication failed")  // 401
    public class UnAuthorizedException extends RuntimeException {
        // ...
    }


}