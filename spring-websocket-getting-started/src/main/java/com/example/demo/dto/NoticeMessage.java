package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoticeMessage {

    private MessageType type;
    private String content;
    private String sender;

    public enum MessageType {
        NOTICE,
        JOIN,
        LEAVE
    }

}
