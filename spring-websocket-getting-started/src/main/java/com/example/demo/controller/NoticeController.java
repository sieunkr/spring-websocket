package com.example.demo.controller;

import com.example.demo.dto.NoticeMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class NoticeController {


    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public NoticeMessage sendMessage(@Payload NoticeMessage noticeMessage) {
        return noticeMessage;
    }


    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public NoticeMessage addUser(@Payload NoticeMessage noticeMessage,
                               SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
        headerAccessor.getSessionAttributes().put("username", noticeMessage.getSender());
        return noticeMessage;
    }

}