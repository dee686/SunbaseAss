package com.masai.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String uuid;
    @NotEmpty(message = "please enter first name")
    @NotNull
    @JsonProperty("first_name")
    private String firstName;
    @NotNull
    @NotEmpty(message = "please enter last name")
    @JsonProperty("last_name")
    private String lastName;
    @NotNull
    @NotEmpty(message = "please enter street")
    private String street;
    @NotNull
    @NotEmpty(message = "please enter address")
    private String address;
    @NotNull
    @NotEmpty(message = "please enter city name")
    private String city;
    //@NotNull
    //@NotEmpty(message = "please enter state")
    private String state;
   //@Email(message = "please have valid email format")
    private String email;
    //@NotNull
    //@NotEmpty(message = "please enter phone number")
    private String phone;
}
