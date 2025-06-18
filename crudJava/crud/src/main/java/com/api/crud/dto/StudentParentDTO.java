package com.api.crud.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentParentDTO {

    @JsonProperty("fullName")
    private String fullName;
    @JsonProperty("contactPhoneNumber")
    private Long contactPhoneNumber;
    @JsonProperty("email")
    private String email;


    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Long getContactPhoneNumber() {
        return contactPhoneNumber;
    }

    public void setContactPhoneNumber(Long contactPhoneNumber) {
        this.contactPhoneNumber = contactPhoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
