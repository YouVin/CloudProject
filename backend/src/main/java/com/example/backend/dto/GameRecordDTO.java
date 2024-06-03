package com.example.backend.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class GameRecordDTO {
    private Long id;
    private String playerName;
    private int score;
    private String gameDate;
}
