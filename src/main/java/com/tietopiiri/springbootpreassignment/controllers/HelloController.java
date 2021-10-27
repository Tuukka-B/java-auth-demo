package com.tietopiiri.springbootpreassignment.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCrypt;
import java.util.Map;

@RestController
public class HelloController {

    @PostMapping("/post-data")
    public void getData(@RequestHeader("Authorization") String suppliedPassword, @RequestBody Map<String, String> data) {
        /* hard-coded stuff */
        String salt = "$2a$10$eMwbUMmFcP78eUAix65gFe";
        String[] creds = suppliedPassword.split(":");
        String hashed = BCrypt.hashpw("Q29uZ3JhdHNPbkZpbmRpbmdUaGlzRWFzdGVyRWdnIQ==", salt).strip();
        /* debug
         *
         * System.out.println("Password");
         * System.out.println(hashed);
         * System.out.println("User-supplied Password");
         * System.out.println(userPass);
         */
        if (creds[1].equals(hashed) && creds[0].equals("api-user")) {
            System.out.println("Password matches! Printing received data...");
            data.forEach((k, v) -> System.out.println((k + ": " + v)));
        }
        else
            throw new ForbiddenException();

    }

    @ResponseStatus(value= HttpStatus.UNAUTHORIZED, reason="Forbidden")  // 401
    public class ForbiddenException extends RuntimeException {
        // ...
    }


}