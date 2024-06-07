package com.example.backend.dto;
import com.example.backend.entity.GameRecord;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString
public class GameRecordDTO {
    private Long id;
    private String username;
    private int score;
    private String date;

    public GameRecordDTO(GameRecord GameRecord) {
        id = GameRecord.getId();
        username = GameRecord.getUsername();
        score = GameRecord.getScore();
        date = GameRecord.getDate();
    }
}
