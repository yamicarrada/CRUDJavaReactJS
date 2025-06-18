package com.api.crud.converter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.support.DefaultConversionService;


@Configuration
public class ConverterConfig {

    @Bean
    public DefaultConversionService conversionService(StudentDTOToStudentConverter studentDTOToStudentConverter,
                                                      StudentToStudentDTOConverter studentToStudentDTOConverter,
                                                      StudentParentDTOtoStudentParent studentParentDTOtoStudentParent,
                                                      StudentParentToStudentParentDTO studentParentToStudentParentDTO){
        DefaultConversionService conversionService = new DefaultConversionService();
        conversionService.addConverter(studentDTOToStudentConverter);
        conversionService.addConverter(studentToStudentDTOConverter);
        conversionService.addConverter(studentParentDTOtoStudentParent);
        conversionService.addConverter(studentParentToStudentParentDTO);
        return conversionService;
    }
}

