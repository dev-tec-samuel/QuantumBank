package br.com.poo.poobank.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class CustomControllerAdvice extends ResponseEntityExceptionHandler {

  @ExceptionHandler(Exception.class)
  public ResponseEntity<?> responseException(RuntimeException re, WebRequest wr) {
    return handleExceptionInternal(re, "Houve um erro no processamento!", new HttpHeaders(), HttpStatus.BAD_REQUEST, wr);
  }
}